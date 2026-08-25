import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getProjectBySlug,
  getVisibleProjects,
  type Project,
} from "@/data/projects";
import StatusBadge from "@/components/StatusBadge";

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

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="project-detail-media">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-top"
          priority
        />
      </div>
    );
  }

  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="project-detail-placeholder">
      <span>{initials}</span>
    </div>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="content-panel space-y-5">
      <div>
        <p className="section-title mb-2">Status</p>
        <StatusBadge status={project.status} />
      </div>
      <div>
        <p className="section-title mb-2">Year</p>
        <p className="content-row-title !text-sm">{project.year}</p>
      </div>
      <div>
        <p className="section-title mb-2">Role</p>
        <p className="content-row-title !text-sm">{project.role}</p>
      </div>
      <div>
        <p className="section-title mb-2">Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="content-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(project.live !== "#" || project.github !== "#") && (
        <div className="flex flex-col gap-2 border-t border-card-border pt-5">
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="content-action justify-center"
            >
              Visit live
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="content-action content-action--muted justify-center"
            >
              View source
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
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
    <main className="site-content">
      <div className="site-content__inner--wide">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={13} />
          Projects
        </Link>

        <header className="content-header fade-up max-w-3xl">
          <p className="hero-eyebrow mb-4">{project.category}</p>
          <h1 className="content-title">{project.title}</h1>
          <p className="content-lede">{project.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 lg:hidden">
            <StatusBadge status={project.status} />
            <span className="content-meta">{project.year}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="content-action"
              >
                Live
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="content-action content-action--muted"
              >
                Code
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_16rem] lg:items-start">
          <article className="min-w-0 fade-up" style={{ animationDelay: "80ms" }}>
            <ProjectMedia project={project} />

            <section className="content-section">
              <h2 className="content-section-heading mb-3">Overview</h2>
              <p className="content-row-copy !text-[0.95rem]">{project.longDescription}</p>
            </section>

            {project.caseStudy && (
              <>
                <section className="content-section">
                  <h2 className="content-section-heading mb-3">Problem</h2>
                  <p className="content-row-copy !text-[0.95rem]">{project.caseStudy.problem}</p>
                </section>

                <section className="content-section">
                  <h2 className="content-section-heading mb-3">Approach</h2>
                  <p className="content-row-copy !text-[0.95rem]">{project.caseStudy.approach}</p>
                </section>

                <section className="content-section">
                  <h2 className="content-section-heading mb-3">Architecture</h2>
                  <div className="space-y-2.5">
                    {project.caseStudy.architecture.map((item, index) => (
                      <div
                        key={item}
                        className="content-panel flex items-start gap-3 !py-3.5"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[0.65rem] font-bold text-accent">
                          {index + 1}
                        </span>
                        <p className="content-row-copy !mt-0 !text-[0.9rem]">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-section">
                  <div className="content-panel border-l-2 !border-l-accent">
                    <p className="section-title mb-2">Result</p>
                    <p className="content-row-copy !text-[0.95rem] !text-foreground">
                      {project.caseStudy.result}
                    </p>
                  </div>
                </section>
              </>
            )}

            <section className="content-section">
              <h2 className="content-section-heading mb-3">Key Features</h2>
              <div className="content-list">
                {project.features.map((feature) => (
                  <p key={feature} className="content-row content-row-copy">
                    {feature}
                  </p>
                ))}
              </div>
            </section>
          </article>

          <aside className="hidden lg:block lg:sticky lg:top-8 fade-up" style={{ animationDelay: "120ms" }}>
            <ProjectMeta project={project} />
          </aside>
        </div>
      </div>
    </main>
  );
}
