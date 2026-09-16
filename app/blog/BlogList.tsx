import Link from "next/link";
import type { Post, SeriesMeta } from "@/lib/posts";
import TerminalPrompt from "@/components/TerminalPrompt";

interface BlogLandingProps {
  series: SeriesMeta[];
  standalonePosts: Pick<
    Post,
    "slug" | "title" | "excerpt" | "date" | "readTime" | "tags"
  >[];
}

function formatMonth(dateValue: string | Date): string {
  if (dateValue instanceof Date) {
    return dateValue.toISOString().slice(0, 7);
  }

  return dateValue.slice(0, 7);
}

export default function BlogLanding({
  series,
  standalonePosts,
}: BlogLandingProps) {
  const recentPosts = [...standalonePosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="terminal-page">
      <section className="terminal-window terminal-window--wide" aria-labelledby="writing-title">
        <div className="terminal-titlebar">
          <div className="terminal-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="terminal-path">~/tedtes/writing</span>
        </div>

        <div className="terminal-body">
          <TerminalPrompt path="~/writing" command="pwd" />
          <h1 id="writing-title" className="terminal-name">
            /writing
          </h1>
          <p className="terminal-bio">
            Notes and references on AI systems, software architecture, and math
            foundations.
          </p>

          {recentPosts.length > 0 && (
            <>
              <TerminalPrompt path="~/writing/articles" command="cat *.md" />
              <div className="terminal-list">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="terminal-blog-row"
                  >
                    <span className="terminal-blog-date">
                      {formatMonth(post.date)}
                    </span>
                    <span className="terminal-blog-main">
                      <span className="terminal-product-name">{post.title}</span>
                      <span className="terminal-product-description">
                        {post.excerpt}
                      </span>
                    </span>
                    <span className="terminal-status">{post.readTime}</span>
                  </Link>
                ))}
              </div>
            </>
          )}

          {series.length > 0 && (
            <>
              <TerminalPrompt path="~/writing/series" command="ls" />
              <div className="terminal-list">
                {series.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="terminal-blog-row"
                  >
                    <span className="terminal-blog-date">series</span>
                    <span className="terminal-blog-main">
                      <span className="terminal-product-name">{item.name}/</span>
                      <span className="terminal-product-description">
                        {item.description || "Structured notes in progress"}
                      </span>
                    </span>
                    <span className="terminal-status">
                      {item.topicCount} topics
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}

          {series.length === 0 && standalonePosts.length === 0 && (
            <>
              <TerminalPrompt path="~/writing/articles" command="cat *.md" />
              <p className="terminal-product-description">
                Nothing published yet.
              </p>
            </>
          )}

          <TerminalPrompt path="~/writing" command="cd .." />
          <div className="terminal-contact-row">
            <span aria-hidden="true">→</span>
            <Link href="/">home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
