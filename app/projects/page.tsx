import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getProjectsByCategory,
  type Project,
} from "@/data/projects";
import StatusBadge from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Projects | Tedros Tesfu",
  description:
    "Applied AI products, full-stack systems, developer tooling, and language-learning work by Tedros Tesfu.",
};

const groupedProjects = Array.from(getProjectsByCategory()).filter(
  ([, categoryProjects]) => categoryProjects.length > 0
);

function initialsOf(title: string): string {
  return title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-video overflow-hidden bg-card">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div className="project-thumbnail-placeholder aspect-video flex items-center justify-center">
      <span className="text-4xl font-black tracking-tight opacity-20 select-none">
        {initialsOf(project.title)}
      </span>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      {project.live !== "#" && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
        >
          Live
          <ArrowUpRight size={11} />
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
          className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
        >
          Code
          <ArrowUpRight size={11} />
        </a>
      )}
    </div>
  );
}

function SpotlightCard({ project }: { project: Project }) {
  return (
    <article className="group spotlight-card grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Read ${project.title} case study`}
        className="block overflow-hidden border-b border-card-border md:border-b-0 md:border-r"
      >
        {project.image ? (
          <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden bg-card">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
          </div>
        ) : (
          <div className="project-thumbnail-placeholder aspect-video md:aspect-auto md:h-full flex items-center justify-center">
            <span className="text-5xl font-black tracking-tight opacity-20 select-none">
              {initialsOf(project.title)}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <StatusBadge status={project.status} />
          <span className="content-meta">{project.year}</span>
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h3 className="content-feature-title transition-colors group-hover:text-accent">
            {project.title}
          </h3>
        </Link>

        <p className="content-row-copy mb-4">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="content-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-card-border pt-4 text-xs text-muted">
          <span>{project.role}</span>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group project-card flex flex-col">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Read ${project.title} case study`}
        className="block overflow-hidden border-b border-card-border"
      >
        <ProjectThumbnail project={project} />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <Link href={`/projects/${project.slug}`} className="min-w-0">
            <h3 className="content-project-title transition-colors group-hover:text-accent leading-snug">
              {project.title}
            </h3>
          </Link>
          <StatusBadge status={project.status} className="shrink-0 pt-0.5" />
        </div>

        <p className="content-row-copy mb-4">{project.description}</p>

        <div className="mb-4 mt-auto flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="content-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-card-border pt-3 text-xs text-muted">
          <span>
            {project.year} · {project.role}
          </span>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [firstCategory, ...restCategories] = groupedProjects;
  const [spotlightProject, ...restOfFirstCategory] = firstCategory?.[1] ?? [];

  return (
    <main className="site-content">
      <div className="site-content__inner--wide">
        <header className="content-header fade-up">
          <p className="hero-eyebrow mb-4">Selected work</p>
          <h1 className="content-title">Projects</h1>
          <p className="content-lede">
            A tighter hierarchy of current product systems first, followed by
            applied AI, developer tooling, and language-learning work.
          </p>
        </header>

        {spotlightProject && (
          <section className="fade-up" style={{ animationDelay: "80ms" }}>
            <SpotlightCard project={spotlightProject} />
          </section>
        )}

        {firstCategory && restOfFirstCategory.length > 0 && (
          <section className="content-section">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h2 className="content-section-heading">{firstCategory[0]}</h2>
              <span className="content-meta">
                {firstCategory[1].length}{" "}
                {firstCategory[1].length === 1 ? "project" : "projects"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {restOfFirstCategory.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {restCategories.map(([category, categoryProjects]) => (
          <section key={category} className="content-section">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h2 className="content-section-heading">{category}</h2>
              <span className="content-meta">
                {categoryProjects.length}{" "}
                {categoryProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {categoryProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        ))}

        <div className="content-section">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={13} />
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
