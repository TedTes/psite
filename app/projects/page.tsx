import type { Metadata } from "next";
import Link from "next/link";
import { getProjectsByCategory } from "@/data/projects";
import TerminalPrompt from "@/components/TerminalPrompt";

export const metadata: Metadata = {
  title: "Projects | Tedros Tesfu",
  description:
    "Applied AI products, full-stack systems, developer tooling, and language-learning work by Tedros Tesfu.",
};

const groupedProjects = Array.from(getProjectsByCategory()).filter(
  ([, categoryProjects]) => categoryProjects.length > 0
);

function directoryName(category: string): string {
  return category
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-");
}

export default function ProjectsPage() {
  return (
    <main className="terminal-page">
      <section className="terminal-window terminal-window--wide" aria-labelledby="projects-title">
        <div className="terminal-titlebar">
          <div className="terminal-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="terminal-path">~/tedtes/projects</span>
        </div>

        <div className="terminal-body">
          <TerminalPrompt path="~/projects" command="pwd" />
          <h1 id="projects-title" className="terminal-name">
            /projects
          </h1>
          <p className="terminal-bio">
            Product systems, applied AI experiments, developer tools, and
            language-learning work.
          </p>

          {groupedProjects.map(([category, projects]) => (
            <section key={category}>
              <TerminalPrompt
                path={`~/projects/${directoryName(category)}`}
                command="ls"
              />
              <div className="terminal-list">
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="terminal-product-row terminal-product-row--wide"
                  >
                    <span className="terminal-product-name">
                      {project.slug}/
                    </span>
                    <span className="terminal-product-description">
                      {project.description}
                    </span>
                    <span
                      className={`terminal-status terminal-status--${project.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {project.status.toLowerCase()}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <TerminalPrompt path="~/projects" command="cd .." />
          <div className="terminal-contact-row">
            <span aria-hidden="true">→</span>
            <Link href="/">home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
