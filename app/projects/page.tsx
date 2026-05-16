import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Tedros Tesfu",
  description: "A selection of projects built by Tedros Tesfu.",
};

const visibleProjects = projects.filter(
  (p) => p.live !== "#" || p.github !== "#"
);

export default function ProjectsPage() {
  return (
    <main className="site-content">
      <div className="site-content__inner">
        <header className="content-header">
          <h1 className="sr-only">Projects</h1>
          <p className="content-lede">
            Production-minded software projects across automation, developer tooling,
            and applied AI workflows.
          </p>
        </header>

        <section>
          <div className="content-list">
            {visibleProjects.map((project) => (
              <article key={project.slug} className="content-row">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="content-project-title">{project.title}</h3>
                      <span className="content-meta">{project.year}</span>
                    </div>
                    <p className="content-row-copy">{project.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-xs text-muted">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        Live
                      </a>
                    )}
                    {project.live !== "#" && project.github !== "#" && (
                      <span className="opacity-40">·</span>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="content-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="content-section">
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
            ← Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
