import Link from "next/link";
import type { Post, SeriesMeta } from "@/lib/posts";
import TerminalSection from "@/components/TerminalSection";
import TerminalRow from "@/components/TerminalRow";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

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
        <TerminalTitlebar path="/writing" />

        <div className="terminal-body">
          <TerminalSection path="~/writing" command="cat README.md">
            <h1 id="writing-title" className="terminal-name terminal-name--split">
              <span className="terminal-name__lead">Notes and references</span> on AI
              systems, software architecture, and math foundations.
            </h1>
          </TerminalSection>

          {recentPosts.length > 0 && (
            <TerminalSection path="~/writing/articles" command="cat *.md">
              <div className="terminal-list">
                {recentPosts.map((post) => (
                  <TerminalRow
                    key={post.slug}
                    label={formatMonth(post.date)}
                    description={<><Link href={`/blog/${post.slug}`} className="row-title-link">{post.title}</Link><span>{post.excerpt}</span></>}
                    meta={post.readTime}
                  />
                ))}
              </div>
            </TerminalSection>
          )}

          {series.length > 0 && (
            <TerminalSection path="~/writing/series" command="ls">
              <div className="terminal-list">
                {series.map((item) => (
                  <TerminalRow
                    key={item.slug}
                    label="series"
                    description={<><Link href={`/blog/${item.slug}`} className="row-title-link">{item.name}/</Link><span>{item.description || "Structured notes in progress"}</span></>}
                    meta={`${item.topicCount} topics`}
                  />
                ))}
              </div>
            </TerminalSection>
          )}

          {series.length === 0 && standalonePosts.length === 0 && (
            <TerminalSection path="~/writing/articles" command="cat *.md">
              <p className="terminal-product-description">
                Nothing published yet.
              </p>
            </TerminalSection>
          )}

          <TerminalSection path="~/writing" command="open">
            <TerminalCta title="Want to talk about the work?" actions={<><Link href="/#contact" className="primary-action">Contact</Link><Link href="/">→ home</Link></>}>
              <p>Questions, projects, and thoughtful notes are welcome.</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </section>
    </main>
  );
}
