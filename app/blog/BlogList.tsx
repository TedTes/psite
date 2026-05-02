"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import type { SeriesMeta, Post } from "@/lib/posts";

interface BlogLandingProps {
  series: SeriesMeta[];
  standalonePosts: Pick<Post, "slug" | "title" | "excerpt" | "date" | "readTime" | "tags">[];
}

export default function BlogLanding({ series, standalonePosts }: BlogLandingProps) {
  return (
    <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div>
          {series.length > 0 && (
            <section className="mb-14">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Knowledge Base
              </h2>
              <div className="flex flex-col gap-3">
                {series.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/blog/${s.slug}`}
                    className="group flex items-start gap-4 p-4 rounded-lg border border-card-border hover:border-accent/40 hover:bg-card transition-all"
                  >
                    <BookOpen
                      size={15}
                      className="mt-0.5 flex-shrink-0 text-muted group-hover:text-accent transition-colors"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-semibold group-hover:text-accent transition-colors leading-snug">
                          {s.name}
                        </h3>
                        <ArrowRight
                          size={13}
                          className="flex-shrink-0 mt-0.5 text-muted group-hover:text-accent transition-colors"
                        />
                      </div>
                      <p className="text-xs text-muted">
                        {s.chapterCount} {s.chapterCount === 1 ? "chapter" : "chapters"} ·{" "}
                        {s.topicCount} {s.topicCount === 1 ? "topic" : "topics"}
                      </p>
                      {s.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {s.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {standalonePosts.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Writing
              </h2>
              <div className="flex flex-col divide-y divide-card-border">
                {standalonePosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group py-5 first:pt-0 flex items-start gap-4"
                  >
                    <FileText
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-muted group-hover:text-accent transition-colors"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold group-hover:text-accent transition-colors leading-snug mb-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted line-clamp-1 mb-2">{post.excerpt}</p>
                      <div className="flex gap-3 text-xs text-muted">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {series.length === 0 && standalonePosts.length === 0 && (
            <p className="text-sm text-muted">Nothing published yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
