import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getVisibleProjects,
  type Project,
} from "@/data/projects";
import TerminalPrompt from "@/components/TerminalPrompt";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getVisibleProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Tedros Tesfu`,
    description: project.description,
  };
}

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    project.live !== "#" ? { label: "live", href: project.live } : null,
    project.github !== "#" ? { label: "source", href: project.github } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="terminal-contact-row">
      <span aria-hidden="true">→</span>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="terminal-page">
      <article className="terminal-window terminal-window--wide" aria-labelledby="project-title">
        <div className="terminal-titlebar">
          <div className="terminal-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="terminal-path">~/tedtes/projects/{project.slug}</span>
        </div>

        <div className="terminal-body">
          <TerminalPrompt
            path={`~/projects/${project.slug}`}
            command="cat README.md"
          />
          <div className="terminal-project-header">
            <div>
              <p className="terminal-kicker">{project.category}</p>
              <h1 id="project-title" className="terminal-name">
                {project.title}
              </h1>
              <p className="terminal-bio">{project.description}</p>
            </div>
            <dl className="terminal-meta-grid">
              <div>
                <dt>status</dt>
                <dd>{project.status.toLowerCase()}</dd>
              </div>
              <div>
                <dt>year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>role</dt>
                <dd>{project.role}</dd>
              </div>
            </dl>
          </div>

          {project.image && (
            <>
              <TerminalPrompt
                path={`~/projects/${project.slug}/assets`}
                command="open preview.png"
              />
              <div className="terminal-preview-frame">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 544px"
                  className="object-contain object-top"
                  priority
                />
              </div>
            </>
          )}

          <TerminalPrompt path={`~/projects/${project.slug}`} command="cat stack.txt" />
          <div className="terminal-chip-row">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <TerminalPrompt path={`~/projects/${project.slug}`} command="cat overview.md" />
          <div className="terminal-markdown">
            <p>{project.longDescription}</p>
          </div>

          {project.caseStudy && (
            <>
              <TerminalPrompt
                path={`~/projects/${project.slug}`}
                command="cat case-study.md"
              />
              <div className="terminal-markdown">
                <h2>problem</h2>
                <p>{project.caseStudy.problem}</p>

                <h2>approach</h2>
                <p>{project.caseStudy.approach}</p>

                <h2>architecture</h2>
                <ol>
                  {project.caseStudy.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>

                <h2>result</h2>
                <p>{project.caseStudy.result}</p>
              </div>
            </>
          )}

          <TerminalPrompt path={`~/projects/${project.slug}`} command="cat features.txt" />
          <div className="terminal-list">
            {project.features.map((feature) => (
              <div key={feature} className="terminal-feature-row">
                <span>+</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <TerminalPrompt path={`~/projects/${project.slug}`} command="cat links.txt" />
          <ProjectLinks project={project} />

          <TerminalPrompt path={`~/projects/${project.slug}`} command="cd .." />
          <div className="terminal-contact-row">
            <span aria-hidden="true">→</span>
            <Link href="/projects">projects</Link>
            <Link href="/">home</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
