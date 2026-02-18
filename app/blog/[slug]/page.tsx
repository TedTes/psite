import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/posts";
import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.isPublic) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Alex Morgan`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.isPublic) notFound();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Alex<span className="text-accent">.</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            All Posts
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted">
              <span>By {post.author}</span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose prose-invert prose-indigo max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_strong]:text-foreground [&_code]:text-accent [&_code]:bg-accent/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-card [&_pre]:border [&_pre]:border-card-border [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i}>{line.replace("## ", "")}</h2>;
              }
              if (line.startsWith("```")) {
                return null;
              }
              if (line.trim() === "") {
                return null;
              }
              if (line.startsWith("- **")) {
                const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
                if (match) {
                  return (
                    <p key={i} className="ml-4 mb-2">
                      <strong>{match[1]}</strong>
                      {match[2]}
                    </p>
                  );
                }
              }
              if (line.startsWith("- ")) {
                return (
                  <p key={i} className="ml-4 mb-2">
                    {line.replace("- ", "• ")}
                  </p>
                );
              }
              return <p key={i}>{line}</p>;
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-card-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:gap-2.5 transition-all"
            >
              <ArrowLeft size={14} />
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
