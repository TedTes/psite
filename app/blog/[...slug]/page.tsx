import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPostBySlug, getPublicPosts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/ReadingProgress";

type Params = Promise<{ slug: string[] }>;

function slugFromParams(slug: string[]): string {
  return slug.join("/");
}

export async function generateStaticParams() {
  return getPublicPosts().map((post) => ({ slug: post.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slugFromParams(slug));
  if (!post || !post.isPublic) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Tedros Tesfu`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const postSlug = slugFromParams(slug);
  const post = getPostBySlug(postSlug);

  if (!post || !post.isPublic) notFound();

  const allPosts = getPublicPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === postSlug);
  const nextPost =
    currentIndex !== -1 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  return (
    <>
      <ReadingProgress />

      <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={13} />
              Writing
            </Link>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/10 px-2.5 py-0.5 text-xs text-accent rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl tracking-tight mb-5">
              {post.title}
            </h1>

            <p className="text-base leading-7 text-muted mb-6">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-muted border-t border-card-border pt-5">
              <span>{post.author}</span>
              <span className="text-card-border">·</span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-card-border">·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
          </div>

          <div>
            <div
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-16 border-t border-card-border pt-8">
            {nextPost ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                >
                  <ArrowLeft size={14} />
                  All posts
                </Link>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex-1 sm:max-w-sm bg-card border border-card-border rounded-xl p-5 hover:border-accent/50 transition-colors text-right"
                >
                  <p className="text-xs text-muted mb-1.5">Next article</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors leading-snug">
                    {nextPost.title}
                  </p>
                </Link>
              </div>
            ) : (
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-accent transition-all hover:gap-2.5"
              >
                <ArrowLeft size={14} />
                Back to all posts
              </Link>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
