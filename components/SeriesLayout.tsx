"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, Menu, X, ArrowLeft, BookOpen, Lock } from "lucide-react";
import type { SeriesData, TopicMeta } from "@/lib/posts";

interface SeriesLayoutProps {
  seriesData: SeriesData;
  currentSlug?: string;
  content?: string;
  title?: string;
  excerpt?: string;
}

export default function SeriesLayout({
  seriesData,
  currentSlug,
  content,
  title,
  excerpt,
}: SeriesLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeChapter = seriesData.chapters.find((ch) =>
    ch.topics.some((t) => t.slug === currentSlug)
  );

  const [openChapters, setOpenChapters] = useState<Set<string>>(() => {
    if (activeChapter) return new Set([activeChapter.chapterSlug]);
    if (seriesData.chapters.length > 0) return new Set([seriesData.chapters[0].chapterSlug]);
    return new Set<string>();
  });

  useEffect(() => {
    setSidebarOpen(false);
  }, [currentSlug]);

  function toggleChapter(slug: string) {
    const chapter = seriesData.chapters.find((ch) => ch.chapterSlug === slug);
    if (!chapter || chapter.publicTopicCount === 0) return;

    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  const allTopics = seriesData.chapters.flatMap((ch) =>
    ch.topics.filter((topic) => topic.isPublic)
  );
  const currentIdx = allTopics.findIndex((t) => t.slug === currentSlug);
  const prevTopic: TopicMeta | null = currentIdx > 0 ? allTopics[currentIdx - 1] : null;
  const nextTopic: TopicMeta | null =
    currentIdx >= 0 && currentIdx < allTopics.length - 1 ? allTopics[currentIdx + 1] : null;

  const sidebar = (
    <nav className="p-5 pt-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent mb-6 transition-colors"
      >
        <ArrowLeft size={11} />
        All writing
      </Link>

      <div className="mb-5">
        <Link
          href={`/blog/${seriesData.slug}`}
          className="text-sm font-semibold leading-snug hover:text-accent transition-colors block"
        >
          {seriesData.name}
        </Link>
        <p className="text-xs text-muted mt-1">
          {seriesData.chapters.length} {seriesData.chapters.length === 1 ? "chapter" : "chapters"}
        </p>
      </div>

      <div className="space-y-0.5">
        {seriesData.chapters.map((chapter) => {
          const isOpen = openChapters.has(chapter.chapterSlug);
          const isActive = chapter === activeChapter;
          const isDisabled = chapter.publicTopicCount === 0;

          return (
            <div key={chapter.chapterSlug}>
              <button
                type="button"
                disabled={isDisabled}
                onClick={() => toggleChapter(chapter.chapterSlug)}
                className={`w-full flex items-start justify-between gap-2 py-1.5 px-2 rounded-md text-xs text-left transition-colors ${
                  isDisabled
                    ? "cursor-not-allowed text-muted/45"
                    : isActive
                      ? "text-foreground font-medium"
                      : "text-muted hover:text-foreground"
                }`}
              >
                <span className="min-w-0 leading-snug">
                  {chapter.chapterOrder < 999 ? `${chapter.chapterOrder}. ` : ""}
                  {chapter.name}
                </span>
                {isDisabled ? (
                  <Lock size={10} className="mt-0.5 flex-shrink-0" />
                ) : isOpen ? (
                  <ChevronDown size={11} className="mt-0.5 flex-shrink-0" />
                ) : (
                  <ChevronRight size={11} className="mt-0.5 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="ml-2 pl-3 border-l border-card-border mt-0.5 mb-1 space-y-0.5">
                  {chapter.topics.map((topic) => {
                    const label = `${topic.topicOrder ? `${topic.topicOrder}. ` : ""}${
                      topic.title
                    }`;

                    if (!topic.isPublic) {
                      return (
                        <span
                          key={topic.slug}
                          className="block cursor-not-allowed rounded px-2 py-1 text-xs leading-snug text-muted/45"
                        >
                          {label}
                        </span>
                      );
                    }

                    return (
                      <Link
                        key={topic.slug}
                        href={`/blog/${topic.slug}`}
                        className={`block py-1 px-2 rounded text-xs leading-snug transition-colors ${
                          topic.slug === currentSlug
                            ? "bg-accent/10 text-accent font-medium"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-20 flex items-center gap-3 px-4 py-3 border-b border-card-border bg-background/95 backdrop-blur-sm">
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
          aria-label="Toggle chapter navigation"
        >
          {sidebarOpen ? <X size={14} /> : <Menu size={14} />}
          Chapters
        </button>
        {title && (
          <>
            <span className="text-card-border text-xs">/</span>
            <span className="text-xs text-muted truncate">{title}</span>
          </>
        )}
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-30" onClick={() => setSidebarOpen(false)}>
          <div className="absolute inset-0 bg-black/50" />
          <aside
            className="scrollbar-none absolute inset-y-0 left-0 w-72 overflow-y-auto border-r border-card-border bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebar}
          </aside>
        </div>
      )}

      {/* Desktop layout */}
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-[clamp(18rem,24vw,24rem)] shrink-0">
          <div className="sticky top-0 h-screen border-r border-card-border">
            <div className="scrollbar-none h-full overflow-y-auto pb-10">
              {sidebar}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background via-background/85 to-transparent" />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-6 sm:px-10 lg:px-14 py-8 lg:py-12">
          {content ? (
            <article className="max-w-2xl">
              {activeChapter && (
                <p className="text-xs text-muted mb-5">
                  <Link
                    href={`/blog/${seriesData.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {seriesData.name}
                  </Link>
                  {" / "}
                  {activeChapter.name}
                </p>
              )}

              <h1 className="text-3xl font-black leading-tight sm:text-4xl tracking-tight mb-4">
                {title}
              </h1>
              {excerpt && (
                <p className="text-base leading-7 text-muted mb-8 border-b border-card-border pb-8">
                  {excerpt}
                </p>
              )}

              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Prev / Next navigation */}
              <div className="mt-12 pt-8 border-t border-card-border flex items-start justify-between gap-6">
                {prevTopic ? (
                  <Link
                    href={`/blog/${prevTopic.slug}`}
                    className="group flex flex-col text-sm hover:text-accent transition-colors max-w-[45%]"
                  >
                    <span className="text-xs text-muted mb-1">← Previous</span>
                    <span className="font-medium group-hover:text-accent line-clamp-2 leading-snug">
                      {prevTopic.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextTopic && (
                  <Link
                    href={`/blog/${nextTopic.slug}`}
                    className="group flex flex-col text-sm text-right hover:text-accent transition-colors max-w-[45%]"
                  >
                    <span className="text-xs text-muted mb-1">Next →</span>
                    <span className="font-medium group-hover:text-accent line-clamp-2 leading-snug">
                      {nextTopic.title}
                    </span>
                  </Link>
                )}
              </div>
            </article>
          ) : (
            /* Series overview */
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs text-muted mb-5">
                <BookOpen size={13} />
                <span>
                  {seriesData.chapters.length} chapters ·{" "}
                  {seriesData.chapters.reduce((sum, ch) => sum + ch.publicTopicCount, 0)} topics
                </span>
              </div>

              <h1 className="text-3xl font-black sm:text-4xl tracking-tight mb-4">
                {seriesData.name}
              </h1>

              {seriesData.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {seriesData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-3 mb-8">
                {seriesData.chapters.map((ch) => (
                  <div
                    key={ch.chapterSlug}
                    className={`border border-card-border rounded-lg p-4 transition-colors ${
                      ch.publicTopicCount > 0 ? "hover:border-accent/30" : "opacity-50"
                    }`}
                  >
                    <h2 className="text-sm font-semibold mb-2">
                      {ch.chapterOrder < 999 ? `${ch.chapterOrder}. ` : ""}
                      {ch.name}
                    </h2>
                    <ul className="space-y-1">
                      {ch.topics.map((t) => (
                        <li key={t.slug}>
                          {t.isPublic ? (
                            <Link
                              href={`/blog/${t.slug}`}
                              className="text-xs text-muted hover:text-accent transition-colors"
                            >
                              {t.topicOrder ? `${t.topicOrder}. ` : ""}
                              {t.title}
                            </Link>
                          ) : (
                            <span className="text-xs text-muted/60">
                              {t.topicOrder ? `${t.topicOrder}. ` : ""}
                              {t.title}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {allTopics[0] && (
                <Link
                  href={`/blog/${allTopics[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  Start reading →
                </Link>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
