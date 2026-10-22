"use client";

import { useState } from "react";
import Link from "next/link";
import type { SeriesData, TopicMeta } from "@/lib/posts";
import TerminalSection from "@/components/TerminalSection";
import TerminalRow from "@/components/TerminalRow";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

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
  const activeChapter = seriesData.chapters.find((chapter) =>
    chapter.topics.some((topic) => topic.slug === currentSlug)
  );

  const [openChapters, setOpenChapters] = useState<Set<string>>(() => {
    if (activeChapter) return new Set([activeChapter.chapterSlug]);
    if (seriesData.chapters.length > 0) {
      return new Set([seriesData.chapters[0].chapterSlug]);
    }
    return new Set<string>();
  });

  function toggleChapter(slug: string) {
    const chapter = seriesData.chapters.find((item) => item.chapterSlug === slug);
    if (!chapter || chapter.publicTopicCount === 0) return;

    setOpenChapters((previous) => {
      const next = new Set(previous);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  const allTopics = seriesData.chapters.flatMap((chapter) =>
    chapter.topics.filter((topic) => topic.isPublic)
  );
  const currentIndex = allTopics.findIndex((topic) => topic.slug === currentSlug);
  const prevTopic: TopicMeta | null =
    currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic: TopicMeta | null =
    currentIndex >= 0 && currentIndex < allTopics.length - 1
      ? allTopics[currentIndex + 1]
      : null;

  return (
    <main className="terminal-page">
      <article className="terminal-window terminal-window--wide" aria-labelledby="series-title">
        <TerminalTitlebar path={`/writing/${seriesData.slug}`} />

        <div className="terminal-body">
          <TerminalSection path={`~/writing/${seriesData.slug}`} command="ls">
            <div className="terminal-series-layout">
              <aside className="terminal-series-sidebar" aria-label="Series topics">
                <Link href="/blog" className="terminal-series-back">
                  ../writing
                </Link>
                <h2 className="terminal-series-title">{seriesData.name}</h2>
                <p className="terminal-series-meta">
                  {seriesData.chapters.length} chapters / {allTopics.length} topics
                </p>

                <div className="terminal-series-chapters">
                  {seriesData.chapters.map((chapter) => {
                    const isOpen = openChapters.has(chapter.chapterSlug);
                    const isDisabled = chapter.publicTopicCount === 0;
                    const isActive = chapter === activeChapter;

                    return (
                      <div key={chapter.chapterSlug}>
                        <button
                          type="button"
                          disabled={isDisabled}
                          onClick={() => toggleChapter(chapter.chapterSlug)}
                          className={`terminal-series-chapter ${
                            isActive ? "terminal-series-chapter--active" : ""
                          }`}
                        >
                          <span>{isOpen ? "v" : ">"}</span>
                          <span>
                            {chapter.chapterOrder < 999
                              ? `${chapter.chapterOrder}. `
                              : ""}
                            {chapter.name}
                          </span>
                          {isDisabled && <span>locked</span>}
                        </button>

                        {isOpen && (
                          <div className="terminal-series-topic-list">
                            {chapter.topics.map((topic) =>
                              topic.isPublic ? (
                                <Link
                                  key={topic.slug}
                                  href={`/blog/${topic.slug}`}
                                  className={`terminal-series-topic ${
                                    topic.slug === currentSlug
                                      ? "terminal-series-topic--active"
                                      : ""
                                  }`}
                                >
                                  {topic.topicOrder ? `${topic.topicOrder}. ` : ""}
                                  {topic.title}
                                </Link>
                              ) : (
                                <span
                                  key={topic.slug}
                                  className="terminal-series-topic terminal-series-topic--locked"
                                >
                                  {topic.topicOrder ? `${topic.topicOrder}. ` : ""}
                                  {topic.title}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </aside>

              <div className="terminal-series-content">
                {content ? (
                  <>
                    <p className="terminal-kicker">
                      {activeChapter ? activeChapter.name : seriesData.name}
                    </p>
                    <h1 id="series-title" className="terminal-name">
                      {title}
                    </h1>
                    {excerpt && <p className="terminal-bio">{excerpt}</p>}

                    <TerminalSection
                      path={`~/writing/${seriesData.slug}`}
                      command="cat topic.md"
                    >
                      <div
                        className="terminal-article-prose"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </TerminalSection>

                    <TerminalSection path={`~/writing/${seriesData.slug}`} command="open">
                      <TerminalCta title="Continue the series." actions={<>{nextTopic && <Link href={`/blog/${nextTopic.slug}`} className="primary-action">Next topic</Link>}{prevTopic && <Link href={`/blog/${prevTopic.slug}`}>→ previous</Link>}<Link href="/blog">→ all writing</Link></>}>
                        <p>{nextTopic ? nextTopic.title : "You reached the latest published topic."}</p>
                      </TerminalCta>
                    </TerminalSection>
                  </>
                ) : (
                  <>
                    <h1 id="series-title" className="terminal-name">
                      {seriesData.name}
                    </h1>
                    <p className="terminal-bio">
                      {seriesData.chapters.length} chapters and {allTopics.length}{" "}
                      published topics.
                    </p>

                    <TerminalSection
                      path={`~/writing/${seriesData.slug}`}
                      command="find . -type f -name '*.md'"
                    >
                      <div className="terminal-list">
                        {seriesData.chapters.map((chapter) => (
                          <TerminalRow key={chapter.chapterSlug} label={String(chapter.chapterOrder).padStart(2, "0")} description={chapter.name} meta={`${chapter.publicTopicCount} topics`} />
                        ))}
                      </div>
                    </TerminalSection>

                    {allTopics[0] && (
                      <TerminalSection path={`~/writing/${seriesData.slug}`} command="start">
                        <TerminalCta title="Start the series." actions={<><Link href={`/blog/${allTopics[0].slug}`} className="primary-action">First topic</Link><Link href="/blog">→ all writing</Link></>}><p>{allTopics[0].title}</p></TerminalCta>
                      </TerminalSection>
                    )}
                  </>
                )}
              </div>
            </div>
          </TerminalSection>
        </div>
      </article>
    </main>
  );
}
