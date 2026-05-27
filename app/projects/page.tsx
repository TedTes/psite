import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectHref, hasProjectLink, projects, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Tedros Tesfu",
  description: "Production-minded software projects across automation, developer tooling, and applied AI.",
};

const visibleProjects = projects.filter(hasProjectLink);

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

  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="project-thumbnail-placeholder aspect-video flex items-center justify-center">
      <span className="text-4xl font-black tracking-tight opacity-20 select-none">
        {initials}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="site-content">
      <div className="site-content__inner--wide">
        <header className="content-header">
          <h1 className="sr-only">Projects</h1>
          <p className="content-lede">
            Production-minded software projects across automation, developer
            tooling, and applied AI workflows.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {visibleProjects.map((project) => (
            <article
              key={project.slug}
              className="group project-card"
            >
              {/* Thumbnail */}
              <a
                href={getProjectHref(project)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="block overflow-hidden border-b border-card-border"
              >
                <ProjectThumbnail project={project} />
              </a>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <a
                    href={getProjectHref(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0"
                  >
                    <h2 className="content-project-title transition-colors group-hover:text-accent leading-snug">
                      {project.title}
                    </h2>
                  </a>
                  <div className="flex shrink-0 items-center gap-1.5 text-xs text-muted pt-0.5">
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
                      <span className="opacity-30">·</span>
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

                <p className="content-row-copy mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="content-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="content-section">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
