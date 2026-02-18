import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  getAllPosts,
  togglePostVisibility,
  createPost,
  updatePost,
  deletePost,
  isUserPost,
} from "@/lib/posts";

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");
  return !!token?.value;
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const posts = getAllPosts().map((p) => ({
    ...p,
    editable: isUserPost(p.slug),
  }));
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, excerpt, content, tags, isPublic } = body;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }

  const post = createPost({
    title,
    excerpt: excerpt || "",
    content,
    tags: tags || [],
    isPublic: isPublic ?? true,
  });

  return NextResponse.json(post, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { slug, action, ...updates } = body;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  if (action === "toggle") {
    const success = togglePostVisibility(slug);
    if (!success) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
  } else {
    if (!isUserPost(slug)) {
      return NextResponse.json(
        { error: "Cannot edit built-in posts" },
        { status: 403 }
      );
    }
    const success = updatePost(slug, updates);
    if (!success) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
  }

  const posts = getAllPosts().map((p) => ({
    ...p,
    editable: isUserPost(p.slug),
  }));
  return NextResponse.json(posts);
}

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await request.json();
  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  if (!isUserPost(slug)) {
    return NextResponse.json(
      { error: "Cannot delete built-in posts" },
      { status: 403 }
    );
  }

  const success = deletePost(slug);
  if (!success) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const posts = getAllPosts().map((p) => ({
    ...p,
    editable: isUserPost(p.slug),
  }));
  return NextResponse.json(posts);
}
