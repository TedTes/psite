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
  series?: string;
  seriesSlug?: string;
  module?: string;
  chapter?: string;
  chapterSlug?: string;
  seriesOrder?: number;
  chapterOrder?: number;
  topicOrder?: number;
}

interface Frontmatter {
  title?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
  series?: string;
  seriesSlug?: string;
  module?: string;
  chapter?: string;
  chapterSlug?: string;
  seriesOrder?: number;
  chapterOrder?: number;
  topicOrder?: number;
}

function stripOrderPrefix(segment: string): string {
  return segment.replace(/^\d+-/, "");
}

function getSlug(filePath: string): string {
  const relativePath = path
    .relative(BLOG_ROOT, filePath)
    .replace(/\\/g, "/")
    .replace(/\.mdx?$/i, "");
  const segments = relativePath.split("/");

  if (/^\d{4}$/.test(segments[0])) {
    return segments.slice(1).map(stripOrderPrefix).join("/");
  }

  return relativePath.split("/").map(stripOrderPrefix).join("/");
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
  const slug = getSlug(filePath);
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
    series: frontmatter.series,
    seriesSlug: frontmatter.seriesSlug,
    module: frontmatter.module,
    chapter: frontmatter.chapter ?? frontmatter.module,
    chapterSlug: frontmatter.chapterSlug,
    seriesOrder: frontmatter.seriesOrder,
    chapterOrder: frontmatter.chapterOrder ?? frontmatter.seriesOrder,
    topicOrder: frontmatter.topicOrder,
  };
}

function readPosts(): Post[] {
  return collectMarkdownFiles(BLOG_ROOT)
    .map(parsePost)
    .sort((a, b) => {
      return (
        (a.seriesOrder ?? Number.MAX_SAFE_INTEGER) -
          (b.seriesOrder ?? Number.MAX_SAFE_INTEGER) ||
        (a.chapterOrder ?? Number.MAX_SAFE_INTEGER) -
          (b.chapterOrder ?? Number.MAX_SAFE_INTEGER) ||
        (a.topicOrder ?? Number.MAX_SAFE_INTEGER) -
          (b.topicOrder ?? Number.MAX_SAFE_INTEGER) ||
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
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

// ── Series data structures ────────────────────────────────────────────────────

export interface TopicMeta {
  title: string;
  slug: string;
  topicOrder?: number;
  excerpt: string;
  isPublic: boolean;
}

export interface ChapterMeta {
  name: string;
  chapterSlug: string;
  chapterOrder: number;
  topics: TopicMeta[];
  publicTopicCount: number;
}

export interface SeriesData {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  chapters: ChapterMeta[];
}

export interface SeriesMeta {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  chapterCount: number;
  topicCount: number;
}

export interface TopicOutline {
  title: string;
  slug: string;
  topicOrder?: number;
  excerpt: string;
  isPublic: boolean;
}

export interface ChapterOutline {
  name: string;
  chapterSlug: string;
  chapterOrder: number;
  topics: TopicOutline[];
  publicTopicCount: number;
}

export interface SeriesOutline {
  name: string;
  slug: string;
  chapters: ChapterOutline[];
}

export function getSeriesList(): SeriesMeta[] {
  const posts = getAllPosts();
  const map = new Map<
    string,
    { name: string; tags: Set<string>; chapters: Set<string>; topicCount: number; firstExcerpt: string }
  >();

  for (const post of posts) {
    if (!post.seriesSlug) continue;
    const existing = map.get(post.seriesSlug);
    if (!existing) {
      map.set(post.seriesSlug, {
        name: post.series ?? post.seriesSlug,
        tags: new Set(post.tags),
        chapters: new Set(post.chapterSlug ? [post.chapterSlug] : []),
        topicCount: post.isPublic ? 1 : 0,
        firstExcerpt: post.isPublic ? post.excerpt : "",
      });
    } else {
      post.tags.forEach((t) => existing.tags.add(t));
      if (post.chapterSlug) existing.chapters.add(post.chapterSlug);
      if (post.isPublic) existing.topicCount++;
      if (!existing.firstExcerpt && post.isPublic) existing.firstExcerpt = post.excerpt;
    }
  }

  return Array.from(map.entries()).map(([slug, data]) => ({
    name: data.name,
    slug,
    description: data.firstExcerpt,
    tags: Array.from(data.tags),
    chapterCount: data.chapters.size,
    topicCount: data.topicCount,
  }));
}

export function getSeriesData(seriesSlug: string): SeriesData | undefined {
  const posts = getAllPosts().filter((p) => p.seriesSlug === seriesSlug);
  if (posts.length === 0) return undefined;

  const chapterMap = new Map<string, { name: string; order: number; topics: Post[] }>();

  for (const post of posts) {
    const chSlug = post.chapterSlug ?? "__default";
    const existing = chapterMap.get(chSlug);
    if (!existing) {
      chapterMap.set(chSlug, {
        name: post.chapter ?? "General",
        order: post.chapterOrder ?? 999,
        topics: [post],
      });
    } else {
      existing.topics.push(post);
    }
  }

  const chapters: ChapterMeta[] = Array.from(chapterMap.entries())
    .sort((a, b) => a[1].order - b[1].order)
    .map(([chSlug, ch]) => ({
      name: ch.name,
      chapterSlug: chSlug,
      chapterOrder: ch.order,
      topics: ch.topics
        .sort((a, b) => (a.topicOrder ?? 999) - (b.topicOrder ?? 999))
        .map((t) => ({
          title: t.title,
          slug: t.slug,
          topicOrder: t.topicOrder,
          excerpt: t.excerpt,
          isPublic: t.isPublic,
        })),
      publicTopicCount: ch.topics.filter((topic) => topic.isPublic).length,
    }));

  const first = posts[0];
  return {
    name: first.series ?? seriesSlug,
    slug: seriesSlug,
    description: "",
    tags: [...new Set(posts.flatMap((p) => p.tags))],
    chapters,
  };
}

export function getStandalonePosts(): Post[] {
  return getPublicPosts().filter((p) => !p.seriesSlug);
}

export function getSeriesOutline(seriesSlug: string): SeriesOutline | undefined {
  const posts = getAllPosts().filter((p) => p.seriesSlug === seriesSlug);
  if (posts.length === 0) return undefined;

  const chapterMap = new Map<string, { name: string; order: number; topics: Post[] }>();

  for (const post of posts) {
    const chSlug = post.chapterSlug ?? "__default";
    const existing = chapterMap.get(chSlug);

    if (!existing) {
      chapterMap.set(chSlug, {
        name: post.chapter ?? "General",
        order: post.chapterOrder ?? 999,
        topics: [post],
      });
    } else {
      existing.topics.push(post);
    }
  }

  const chapters: ChapterOutline[] = Array.from(chapterMap.entries())
    .sort((a, b) => a[1].order - b[1].order)
    .map(([chapterSlug, chapter]) => {
      const topics = chapter.topics
        .sort((a, b) => (a.topicOrder ?? 999) - (b.topicOrder ?? 999))
        .map((topic) => ({
          title: topic.title,
          slug: topic.slug,
          topicOrder: topic.topicOrder,
          excerpt: topic.excerpt,
          isPublic: topic.isPublic,
        }));

      return {
        name: chapter.name,
        chapterSlug,
        chapterOrder: chapter.order,
        topics,
        publicTopicCount: topics.filter((topic) => topic.isPublic).length,
      };
    });

  const first = posts[0];

  return {
    name: first.series ?? seriesSlug,
    slug: seriesSlug,
    chapters,
  };
}
