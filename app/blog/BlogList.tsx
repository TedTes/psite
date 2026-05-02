"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

interface PostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  series?: string;
  module?: string;
  chapter?: string;
  seriesOrder?: number;
  chapterOrder?: number;
  topicOrder?: number;
}

export default function BlogList({ posts }: { posts: PostItem[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  const groupedSeries = useMemo(() => {
    const seriesGroups = new Map<string, Map<string, PostItem[]>>();

    filtered.forEach((post) => {
      const seriesName = post.series ?? "Other Writing";
      const chapterName = post.chapter ?? post.module ?? "Articles";
      const chapters = seriesGroups.get(seriesName) ?? new Map();
      const chapterPosts = chapters.get(chapterName) ?? [];

      chapterPosts.push(post);
      chapters.set(chapterName, chapterPosts);
      seriesGroups.set(seriesName, chapters);
    });

    return Array.from(seriesGroups.entries())
      .map(([series, chapters]) => ({
        series,
        chapters: Array.from(chapters.entries())
          .map(([chapter, chapterPosts]) => ({
            chapter,
            posts: chapterPosts.sort(
              (a, b) =>
                (a.topicOrder ?? Number.MAX_SAFE_INTEGER) -
                  (b.topicOrder ?? Number.MAX_SAFE_INTEGER) ||
                new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
            order: Math.min(
              ...chapterPosts.map(
                (post) => post.chapterOrder ?? Number.MAX_SAFE_INTEGER
              )
            ),
          }))
          .sort((a, b) => a.order - b.order),
        order: Math.min(
          ...Array.from(chapters.values()).flatMap((chapterPosts) =>
            chapterPosts.map(
              (post) => post.seriesOrder ?? Number.MAX_SAFE_INTEGER
            )
          )
        ),
      }))
      .sort((a, b) => a.order - b.order);
  }, [filtered]);

  return (
    <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl font-black mb-2">Writing</h1>
          <p className="text-muted text-sm">
            {posts.length} {posts.length === 1 ? "post" : "posts"} on product
            engineering, design systems, and AI.
          </p>
        </div>

        {/* Tag filters */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeTag === null
                  ? "bg-accent text-white border-accent"
                  : "border-card-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  activeTag === tag
                    ? "bg-accent text-white border-accent"
                    : "border-card-border text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Post list */}
        <div className="flex flex-col gap-12">
          {groupedSeries.map((seriesGroup) => (
            <section key={seriesGroup.series}>
              {groupedSeries.length > 1 && (
                <h2 className="mb-8 text-2xl font-bold">
                  {seriesGroup.series}
                </h2>
              )}

              <div className="flex flex-col gap-10">
                {seriesGroup.chapters.map((chapterGroup) => (
                  <section key={chapterGroup.chapter}>
                    {chapterGroup.chapter !== "Articles" && (
                      <h3 className="mb-5 text-xs font-semibold uppercase tracking-wide text-muted">
                        {chapterGroup.order !== Number.MAX_SAFE_INTEGER
                          ? `${chapterGroup.order}. `
                          : ""}
                        {chapterGroup.chapter}
                      </h3>
                    )}

                    <div className="flex flex-col divide-y divide-card-border">
                      {chapterGroup.posts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="py-8 first:pt-0 group block"
                        >
                          <div className="flex items-center gap-3 text-xs text-muted mb-3">
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={11} />
                              {new Date(post.date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock size={11} />
                              {post.readTime}
                            </span>
                          </div>

                          <h4 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-accent transition-colors leading-snug">
                            {post.topicOrder ? `${post.topicOrder}. ` : ""}
                            {post.title}
                          </h4>
                          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs text-muted group-hover:text-accent group-hover:gap-2.5 transition-all">
                              Read <ArrowRight size={12} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted text-sm">
              No posts with that tag.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
