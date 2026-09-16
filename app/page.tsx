import Link from "next/link";
import { getSeriesList, getStandalonePosts } from "@/lib/posts";
import TerminalPrompt from "@/components/TerminalPrompt";

const productRows = [
  {
    slug: "syncresume",
    name: "syncresume/",
    description: "resume optimization workspace for targeted job applications",
    status: "live",
  },
  {
    slug: "snapquote",
    name: "snapquote/",
    description: "same-day quoting for home-service trades",
    status: "building",
  },
  {
    slug: "scoutlead",
    name: "scoutlead/",
    description: "AI customer discovery and outreach backend",
    status: "mvp",
  },
  {
    slug: "lidscout",
    name: "lidscout/",
    description: "market gap research from public customer signals",
    status: "prototype",
  },
];

const contactRows = [
  { label: "github.com/TedTes", href: "https://github.com/TedTes" },
  { label: "linkedin/tedrostesfu", href: "https://linkedin.com/in/tedrostesfu" },
  { label: "x.com/TedTes", href: "https://x.com/TedTes" },
  { label: "tedtfu@gmail.com", href: "mailto:tedtfu@gmail.com" },
];

function formatMonth(dateValue: string | Date): string {
  if (dateValue instanceof Date) {
    return dateValue.toISOString().slice(0, 7);
  }

  return dateValue.slice(0, 7);
}

export default function Home() {
  const writingRows = [
    ...getStandalonePosts()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post) => ({
        href: `/blog/${post.slug}`,
        label: formatMonth(post.date),
        title: post.title,
      })),
    ...getSeriesList().map((series) => ({
      href: `/blog/${series.slug}`,
      label: "series",
      title: `${series.name} (${series.topicCount} topics)`,
    })),
  ].slice(0, 4);

  return (
    <main className="terminal-page">
      <section className="terminal-window" aria-labelledby="terminal-title">
        <div className="terminal-titlebar">
          <div className="terminal-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="terminal-path">~/tedtes</span>
        </div>

        <div className="terminal-body">
          <TerminalPrompt path="~/tedtes" command="whoami" />
          <p className="terminal-bio">
          Hey there 👋, My name is Tedros , currently iterating on building small products , lets see where it goes 
          </p>

          <TerminalPrompt path="~/products" command="ls" />
          <div className="terminal-list">
            {productRows.map((product) => (
              <Link
                key={product.slug}
                href={`/projects/${product.slug}`}
                className="terminal-product-row"
              >
                <span className="terminal-product-name">{product.name}</span>
                <span className="terminal-product-description">
                  {product.description}
                </span>
                <span
                  className={`terminal-status terminal-status--${product.status}`}
                >
                  {product.status}
                </span>
              </Link>
            ))}
          </div>

          <TerminalPrompt path="~/writing" command="cat *.md" />
          <div className="terminal-writing-list">
            {writingRows.map((row) => (
              <Link
                key={row.href}
                href={row.href}
                className="terminal-writing-row terminal-writing-row--link"
              >
                <span>{row.label}</span>
                <span>{row.title}</span>
              </Link>
            ))}
          </div>

          <TerminalPrompt path="~/contact" command="open" />
          <div className="terminal-contact-row">
            <span aria-hidden="true">→</span>
            {contactRows.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  contact.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
