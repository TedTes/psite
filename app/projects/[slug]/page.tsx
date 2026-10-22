import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getVisibleProjects, type Project } from "@/data/projects";
import TerminalSection from "@/components/TerminalSection";
import TerminalRow from "@/components/TerminalRow";
import StatusBadge from "@/components/StatusBadge";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project
    ? { title: project.title, description: project.description }
    : { title: "Project Not Found" };
}

function ProjectActions({ project }: { project: Project }) {
  const links = [
    project.live !== "#" ? { label: "visit live product", href: project.live } : null,
    project.github !== "#" ? { label: "view source", href: project.github } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return <>{links.map((link, index) => <span key={link.href} className="inline-link-group">{index > 0 && <span>·</span>}<a href={link.href} target="_blank" rel="noopener noreferrer">→ {link.label}</a></span>)}</>;
}

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="terminal-page terminal-page--with-nav">
      <article className="terminal-window terminal-window--wide" aria-labelledby="project-title">
        <TerminalTitlebar path={`/projects/${project.slug}`} />

        <div className="terminal-body">
          <TerminalSection path={`~/projects/${project.slug}`} command="cat README.md">
            <header className="project-intro">
              <p className="terminal-kicker">{project.category}</p>
              <h1 id="project-title" className="terminal-name">{project.title}</h1>
              <p className="terminal-bio">{project.description}</p>
            </header>
          </TerminalSection>

          <TerminalSection path={`~/projects/${project.slug}`} command="cat problem.md">
            <div className="terminal-markdown"><p>{project.caseStudy?.problem ?? project.longDescription}</p></div>
          </TerminalSection>

          <TerminalSection path={`~/projects/${project.slug}`} command="cat for-whom.md">
            <div className="terminal-markdown"><p>{project.audience ?? project.description}</p></div>
          </TerminalSection>

          {project.image && (
            <TerminalSection path={`~/projects/${project.slug}/screenshots`} command="open 01.png">
              <figure className="project-screenshot">
                <Image src={project.image} alt={`${project.title} product screenshot`} fill sizes="(max-width: 768px) 100vw, 880px" className="object-contain object-top" priority />
              </figure>
            </TerminalSection>
          )}

          <TerminalSection path={`~/projects/${project.slug}`} command="cat built.md">
            <div className="project-built">
              <p>{project.longDescription}</p>
              <div className="terminal-chip-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="terminal-list">
                {project.features.slice(0, 5).map((feature, index) => <TerminalRow key={feature} label={String(index + 1).padStart(2, "0")} description={feature} meta="built" />)}
              </div>
            </div>
          </TerminalSection>

          <TerminalSection path={`~/projects/${project.slug}`} command="cat status-and-learnings.md">
            <div className="project-status-block">
              <div className="terminal-list">
                <TerminalRow label="status" description={project.year} meta={<StatusBadge status={project.status} />} />
                <TerminalRow label="role" description={project.role} />
              </div>
              {project.learnings && <ul>{project.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul>}
            </div>
          </TerminalSection>

          <TerminalSection path={`~/projects/${project.slug}`} command="open">
            <TerminalCta title={project.live !== "#" ? `Explore ${project.title}.` : "Explore the project."} actions={<><ProjectActions project={project} /><Link href="/#products">→ all products</Link></>}>
              <p>{project.description}</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </article>
    </main>
  );
}
