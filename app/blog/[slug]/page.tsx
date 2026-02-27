import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/posts";
import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/ReadingProgress";

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
      <ReadingProgress />

      <main className="pt-12 pb-24">
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

          <div
            className="prose prose-invert prose-indigo max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:text-muted [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_strong]:text-foreground [&_em]:italic [&_code]:text-accent [&_code]:bg-accent/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-card [&_pre]:border [&_pre]:border-card-border [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:mb-6 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_blockquote]:border-l-3 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:my-4 [&_blockquote]:text-muted [&_blockquote]:italic [&_a]:text-accent [&_a]:underline [&_hr]:border-card-border [&_hr]:my-6 [&_img]:rounded-xl [&_img]:max-w-full [&_img]:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
