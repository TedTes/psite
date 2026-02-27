"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
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
  return (
    <>
      <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-5 sm:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-card border border-card-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-colors group block"
              >
                <div className="flex items-center gap-4 text-xs text-muted mb-4">
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

                <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-accent group-hover:gap-2.5 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}

            {posts.length === 0 && (
              <div className="text-center py-16 text-muted">
                <p>No posts found with that tag.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
