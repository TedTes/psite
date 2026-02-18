"use client";

import { useState, useEffect } from "react";
import {
  Lock,
  LogOut,
  Eye,
  EyeOff,
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  X,
  Save,
} from "lucide-react";
import Link from "next/link";

interface PostItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  isPublic: boolean;
  editable: boolean;
}

interface EditorState {
  mode: "create" | "edit";
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string;
  isPublic: boolean;
}

const emptyEditor: EditorState = {
  mode: "create",
  title: "",
  excerpt: "",
  content: "",
  tags: "",
  isPublic: true,
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toggling, setToggling] = useState<string | null>(null);
  const [editor, setEditor] = useState<EditorState | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
      setPassword("");
      fetchPosts();
    } else {
      setError("Invalid password");
    }
    setLoading(false);
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthenticated(false);
    setPosts([]);
  }

  async function fetchPosts() {
    const res = await fetch("/api/admin/posts");
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    } else if (res.status === 401) {
      setAuthenticated(false);
    }
  }

  async function toggleVisibility(slug: string) {
    setToggling(slug);
    const res = await fetch("/api/admin/posts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, action: "toggle" }),
    });

    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
    setToggling(null);
  }

  async function handleSave() {
    if (!editor) return;
    setSaving(true);

    const tags = editor.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (editor.mode === "create") {
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editor.title,
          excerpt: editor.excerpt,
          content: editor.content,
          tags,
          isPublic: editor.isPublic,
        }),
      });

      if (res.ok) {
        setEditor(null);
        fetchPosts();
      }
    } else {
      const res = await fetch("/api/admin/posts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: editor.slug,
          title: editor.title,
          excerpt: editor.excerpt,
          content: editor.content,
          tags,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setPosts(data);
        setEditor(null);
      }
    }
    setSaving(false);
  }

  async function handleDelete(slug: string) {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setDeleting(slug);

    const res = await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });

    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
    setDeleting(null);
  }

  function openEditor(post?: PostItem) {
    if (post) {
      setEditor({
        mode: "edit",
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        tags: post.tags.join(", "),
        isPublic: post.isPublic,
      });
    } else {
      setEditor({ ...emptyEditor });
    }
  }

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data) setPosts(data);
      });
  }, []);

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-accent" />
            </div>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted mt-1">
              Enter your password to manage blog posts
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              autoFocus
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} />
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Editor modal
  if (editor) {
    return (
      <div className="min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {editor.mode === "create" ? "New Post" : "Edit Post"}
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                disabled={saving || !editor.title || !editor.content}
                className="inline-flex items-center gap-1.5 text-sm bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                <Save size={14} />
                {saving ? "Saving..." : "Save Post"}
              </button>
              <button
                onClick={() => setEditor(null)}
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                <X size={14} />
                Cancel
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-24 pb-24">
          <div className="max-w-3xl mx-auto px-6 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Title</label>
              <input
                type="text"
                value={editor.title}
                onChange={(e) =>
                  setEditor({ ...editor, title: e.target.value })
                }
                placeholder="Post title"
                className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Excerpt
              </label>
              <input
                type="text"
                value={editor.excerpt}
                onChange={(e) =>
                  setEditor({ ...editor, excerpt: e.target.value })
                }
                placeholder="Short description shown in post listings"
                className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Tags{" "}
                <span className="text-muted font-normal">
                  (comma-separated)
                </span>
              </label>
              <input
                type="text"
                value={editor.tags}
                onChange={(e) =>
                  setEditor({ ...editor, tags: e.target.value })
                }
                placeholder="React, TypeScript, Web Development"
                className="w-full bg-card border border-card-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {editor.mode === "create" && (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setEditor({ ...editor, isPublic: !editor.isPublic })
                  }
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                    editor.isPublic ? "bg-accent" : "bg-card-border"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform ${
                      editor.isPublic ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-sm">
                  {editor.isPublic ? "Public" : "Private"} — post will
                  {editor.isPublic ? "" : " not"} be visible on the blog
                </span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Content{" "}
                <span className="text-muted font-normal">(Markdown)</span>
              </label>
              <textarea
                value={editor.content}
                onChange={(e) =>
                  setEditor({ ...editor, content: e.target.value })
                }
                placeholder={`## Introduction\n\nWrite your post content here using Markdown...\n\n## Another Section\n\nMore content...`}
                rows={20}
                className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-y font-mono leading-relaxed"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Alex<span className="text-accent">.</span>
          </Link>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Blog <span className="text-accent">Admin</span>
              </h1>
              <p className="text-muted">
                Create, edit, and manage blog post visibility.
              </p>
            </div>
            <button
              onClick={() => openEditor()}
              className="inline-flex items-center gap-1.5 text-sm bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
            >
              <Plus size={14} />
              New Post
            </button>
          </div>

          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="bg-card border border-card-border rounded-xl p-5 flex items-center justify-between gap-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold truncate">{post.title}</h3>
                    <span
                      className={`shrink-0 text-xs px-2 py-0.5 rounded font-medium ${
                        post.isPublic
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {post.isPublic ? "Public" : "Private"}
                    </span>
                    {!post.editable && (
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded font-medium bg-card-border text-muted">
                        Built-in
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <div className="flex gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-accent/10 text-accent px-1.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {post.editable && (
                    <>
                      <button
                        onClick={() => openEditor(post)}
                        className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      >
                        <Pencil size={14} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        disabled={deleting === post.slug}
                        className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
                      >
                        <Trash2 size={14} />
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => toggleVisibility(post.slug)}
                    disabled={toggling === post.slug}
                    className={`inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${
                      post.isPublic
                        ? "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
                        : "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                    }`}
                  >
                    {post.isPublic ? (
                      <EyeOff size={14} />
                    ) : (
                      <Eye size={14} />
                    )}
                  </button>
                </div>
              </div>
            ))}

            {posts.length === 0 && (
              <div className="text-center py-16 text-muted">
                <p className="mb-4">No posts yet.</p>
                <button
                  onClick={() => openEditor()}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  <Plus size={14} />
                  Create your first post
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
