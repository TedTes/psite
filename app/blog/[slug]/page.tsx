import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostBySlug, getPublicPosts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/ReadingProgress";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getPublicPosts().map((post) => ({ slug: post.slug }));
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
    title: `${post.title} | Tedros Tesfu`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.isPublic) notFound();

  return (
    <>
      <ReadingProgress />

      <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 overflow-hidden rounded-[2rem] border border-card-border bg-card">
            <div className="relative px-6 py-8 sm:px-8 sm:py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_28%)]" />
              <div className="relative">
                <Link
                  href="/blog"
                  className="mb-6 inline-flex items-center gap-1.5 text-sm text-accent transition-all hover:gap-2.5"
                >
                  <ArrowLeft size={14} />
                  Back to all posts
                </Link>

                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="mb-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>

                <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted">
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
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mx-auto mt-16 max-w-3xl border-t border-card-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-accent transition-all hover:gap-2.5"
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
