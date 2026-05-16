import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tedros Tesfu",
  description:
    "Product-focused builder shaping digital products across engineering, design, and strategy.",
};

const background = [
  {
    label: "Current Focus",
    title: "Product Engineering",
    description:
      "Taking software products from rough idea to production-ready release, with attention to product velocity, maintainability, and user-facing polish.",
  },
  {
    label: "Core Strength",
    title: "Platform and UX Systems",
    description:
      "Designing reusable interfaces, data-heavy workflows, and frontend architecture that can keep moving as a product grows.",
  },
  {
    label: "Operating Style",
    title: "Delivery Leadership",
    description:
      "Working across design, product, and engineering to define scope clearly, ship useful milestones, and keep quality visible.",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Redis",
  "AWS",
  "Docker",
  "GraphQL",
  "React Native",
  "Figma",
];

const links = [
  { label: "Email", value: "tedtfu@gmail.com", href: "mailto:tedtfu@gmail.com" },
  { label: "GitHub", value: "TedTes", href: "https://github.com/TedTes" },
  {
    label: "LinkedIn",
    value: "tedrostesfu",
    href: "https://linkedin.com/in/tedrostesfu",
  },
];

export default function AboutPage() {
  return (
    <main className="site-content">
      <div className="site-content__inner">
        <header className="content-header">
          <h1 className="sr-only">About</h1>
          <p className="content-lede">
            I work at the intersection of product, engineering, and design to
            build software that is clear, useful, and ready for real users.
          </p>
        </header>

        <section>
          <h2 className="section-title">Background</h2>
          <div className="content-list">
            {background.map((item) => (
              <article key={item.title} className="content-row">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="content-row-title">{item.title}</h3>
                  <span className="content-meta">{item.label}</span>
                </div>
                <p className="content-row-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span key={skill} className="content-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">Connect</h2>
          <div className="content-list">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group content-row"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="content-row-title transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="text-sm text-muted">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="content-section">
          <a
            href="/resume.pdf"
            className="text-sm font-medium text-accent hover:underline"
          >
            Resume →
          </a>
        </div>
      </div>
    </main>
  );
}
