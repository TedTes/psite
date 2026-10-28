import type { Metadata } from "next";
import Link from "next/link";
import { getProjectsByCategory } from "@/data/projects";
import TerminalSection from "@/components/TerminalSection";
import TerminalRow from "@/components/TerminalRow";
import StatusBadge from "@/components/StatusBadge";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

export const metadata: Metadata = {
  title: "Projects",
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
        <TerminalTitlebar path="/projects" />

        <div className="terminal-body">
          <TerminalSection path="~/projects" command="cat README.md">
            <h1 id="projects-title" className="terminal-name terminal-name--split">
              <span className="terminal-name__lead">Product systems</span>, applied AI
              experiments, developer tools, and language-learning work.
            </h1>
          </TerminalSection>

          {groupedProjects.map(([category, projects]) => (
            <TerminalSection
              key={category}
              path={`~/projects/${directoryName(category)}`}
              command="ls"
            >
              <div className="terminal-list">
                {projects.map((project) => (
                  <TerminalRow
                    key={project.slug}
                    label={<Link href={`/projects/${project.slug}`} className="row-title-link">{project.slug}/</Link>}
                    description={<><span>{project.description}</span><span className="row-links"><Link href={`/projects/${project.slug}`}>→ details</Link></span></>}
                    meta={<StatusBadge status={project.status} />}
                  />
                ))}
              </div>
            </TerminalSection>
          ))}

          <TerminalSection path="~/projects" command="start">
            <TerminalCta title="Need help starting or finishing a product?" actions={<><Link href="/work-with-me" className="primary-action">Work with me</Link><Link href="/">→ home</Link></>}>
              <p>See how I scope and deliver product work.</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </section>
    </main>
  );
}
