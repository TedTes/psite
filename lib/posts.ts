import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_ROOT = path.join(process.cwd(), "content", "blog");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  isPublic: boolean;
}

interface Frontmatter {
  title?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_>~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectMarkdownFiles(fullPath);
    }

    if (entry.isFile() && /\.mdx?$/i.test(entry.name)) {
      return [fullPath];
    }

    return [];
  });
}

function parsePost(filePath: string): Post {
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const frontmatter = data as Frontmatter;
  const slug = path.basename(filePath).replace(/\.mdx?$/i, "");
  const plainText = stripMarkdown(content);

  return {
    slug,
    title: frontmatter.title ?? slug,
    excerpt: frontmatter.excerpt ?? plainText.slice(0, 180),
    content: marked.parse(content) as string,
    date: frontmatter.date ?? new Date().toISOString().slice(0, 10),
    readTime: frontmatter.readTime ?? estimateReadTime(plainText),
    tags: frontmatter.tags ?? [],
    author: frontmatter.author ?? "Tedros Tesfu",
    isPublic: frontmatter.draft !== true,
  };
}

function readPosts(): Post[] {
  return collectMarkdownFiles(BLOG_ROOT)
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPosts(): Post[] {
  return readPosts();
}

export function getPublicPosts(): Post[] {
  return readPosts().filter((post) => post.isPublic);
}

export function getPostBySlug(slug: string): Post | undefined {
  return readPosts().find((post) => post.slug === slug);
}

export function togglePostVisibility(): boolean {
  return false;
}

export interface CreatePostInput {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  isPublic: boolean;
}

export function createPost(_input: CreatePostInput): never {
  throw new Error("Posts are now repo-backed. Add markdown files under content/blog.");
}

export interface UpdatePostInput {
  title?: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
}

export function updatePost(_slug: string, _input: UpdatePostInput): boolean {
  return false;
}

export function deletePost(_slug: string): boolean {
  return false;
}

export function isUserPost(_slug: string): boolean {
  return false;
}
