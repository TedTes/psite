import { posts as staticPosts, type Post } from "@/data/posts";
import fs from "fs";
import path from "path";

const SETTINGS_PATH = path.join(process.cwd(), "data", "post-settings.json");
const USER_POSTS_PATH = path.join(process.cwd(), "data", "user-posts.json");

type PostSettings = Record<string, { isPublic: boolean }>;

function getSettings(): PostSettings {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveSettings(settings: PostSettings): void {
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2));
}

function getUserPosts(): Post[] {
  try {
    const raw = fs.readFileSync(USER_POSTS_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveUserPosts(posts: Post[]): void {
  fs.writeFileSync(USER_POSTS_PATH, JSON.stringify(posts, null, 2));
}

function resolveVisibility(post: Post, settings: PostSettings): boolean {
  if (settings[post.slug] !== undefined) {
    return settings[post.slug].isPublic;
  }
  return post.isPublic;
}

function allRawPosts(): Post[] {
  return [...staticPosts, ...getUserPosts()];
}

export function getAllPosts(): (Post & { isPublic: boolean })[] {
  const settings = getSettings();
  return allRawPosts()
    .map((post) => ({
      ...post,
      isPublic: resolveVisibility(post, settings),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPublicPosts(): Post[] {
  return getAllPosts().filter((post) => post.isPublic);
}

export function getPostBySlug(
  slug: string
): (Post & { isPublic: boolean }) | undefined {
  const settings = getSettings();
  const post = allRawPosts().find((p) => p.slug === slug);
  if (!post) return undefined;
  return { ...post, isPublic: resolveVisibility(post, settings) };
}

export function togglePostVisibility(slug: string): boolean {
  const settings = getSettings();
  const post = allRawPosts().find((p) => p.slug === slug);
  if (!post) return false;

  const currentVisibility = resolveVisibility(post, settings);
  settings[slug] = { isPublic: !currentVisibility };
  saveSettings(settings);
  return true;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export interface CreatePostInput {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  isPublic: boolean;
}

export function createPost(input: CreatePostInput): Post {
  const userPosts = getUserPosts();
  let slug = slugify(input.title);

  // Ensure unique slug
  const allSlugs = new Set(allRawPosts().map((p) => p.slug));
  let suffix = 1;
  const baseSlug = slug;
  while (allSlugs.has(slug)) {
    slug = `${baseSlug}-${suffix++}`;
  }

  const post: Post = {
    slug,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    date: new Date().toISOString().split("T")[0],
    readTime: estimateReadTime(input.content),
    tags: input.tags,
    author: "Alex Morgan",
    isPublic: input.isPublic,
  };

  userPosts.push(post);
  saveUserPosts(userPosts);

  // Also save to settings
  const settings = getSettings();
  settings[slug] = { isPublic: input.isPublic };
  saveSettings(settings);

  return post;
}

export interface UpdatePostInput {
  title?: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
}

export function updatePost(slug: string, input: UpdatePostInput): boolean {
  const userPosts = getUserPosts();
  const index = userPosts.findIndex((p) => p.slug === slug);
  if (index === -1) return false;

  if (input.title !== undefined) userPosts[index].title = input.title;
  if (input.excerpt !== undefined) userPosts[index].excerpt = input.excerpt;
  if (input.content !== undefined) {
    userPosts[index].content = input.content;
    userPosts[index].readTime = estimateReadTime(input.content);
  }
  if (input.tags !== undefined) userPosts[index].tags = input.tags;

  saveUserPosts(userPosts);
  return true;
}

export function deletePost(slug: string): boolean {
  const userPosts = getUserPosts();
  const index = userPosts.findIndex((p) => p.slug === slug);
  if (index === -1) return false;

  userPosts.splice(index, 1);
  saveUserPosts(userPosts);

  // Clean up settings
  const settings = getSettings();
  delete settings[slug];
  saveSettings(settings);

  return true;
}

export function isUserPost(slug: string): boolean {
  const userPosts = getUserPosts();
  return userPosts.some((p) => p.slug === slug);
}
