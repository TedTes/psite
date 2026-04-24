"use client";

import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface PostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function BlogList({
  posts,
}: {
  posts: PostItem[];
}) {
  const featured = posts[0];

  return (
    <>
      <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <section className="mb-10 overflow-hidden rounded-[2rem] border border-card-border bg-card">
            <div className="relative px-6 py-10 sm:px-8 sm:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_28%)]" />
              <div className="relative max-w-3xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.24em] text-accent">
                  <Sparkles size={12} />
                  Writing
                </span>
                <h1 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  Notes on AI systems, product engineering, and practical software.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  Long-form thinking, architecture references, and field notes from building products.
                </p>
                {featured && (
                  <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span>{posts.length} published article{posts.length === 1 ? "" : "s"}</span>
                    <span className="h-1 w-1 rounded-full bg-card-border" />
                    <span>Latest: {featured.title}</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-5 sm:gap-8">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-[1.75rem] border border-card-border bg-card transition-colors hover:border-accent/50"
              >
                <div className="grid gap-0 md:grid-cols-[140px_1fr]">
                  <div className="flex items-end border-b border-card-border bg-[linear-gradient(160deg,rgba(99,102,241,0.16),rgba(99,102,241,0.03)_70%)] px-6 py-5 md:min-h-full md:border-r md:border-b-0">
                    <span className="text-5xl font-black leading-none tracking-tight text-foreground/12">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 text-xl font-semibold leading-tight transition-colors group-hover:text-accent md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mb-5 max-w-3xl leading-relaxed text-muted">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-accent transition-all group-hover:gap-2.5">
                        Read article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {posts.length === 0 && (
              <div className="rounded-[1.75rem] border border-dashed border-card-border bg-card px-6 py-16 text-center text-muted">
                <p>No published posts yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
