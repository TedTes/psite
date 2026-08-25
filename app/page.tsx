import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects, type Project } from "@/data/projects";
import StatusBadge from "@/components/StatusBadge";

const topicIdeas = [
  "Why LLM Apps Need Product Boundaries",
  "The Difference Between Agents and Workflows",
  "Designing Human Review Into AI Systems",
  "What Makes a Useful Developer Tool",
  "Cloudflare Workers as a Product Backend",
  "Pricing Rules, Matching, and Quote Automation",
  "Building With Structured Outputs",
  "How I Think About Resume Optimization",
  "Customer Discovery as a Repeatable System",
  "Lessons From Building Small SaaS Products",
  "When a Prototype Becomes a Product",
  "Tigrinya Support in English Learning Tools",
];

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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
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
          <span>{project.year}</span>
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
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const projects = getFeaturedProjects().slice(0, 2);

  return (
    <main className="site-content">
      <div className="site-content__inner--wide">
        <section>
          <h1 className="sr-only">Tedros Tesfu</h1>
          <p className="content-meta mb-4">Writing</p>
          <div className="content-list">
            {topicIdeas.map((topic, index) => (
              <div key={topic} className="content-row">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="content-row-title">{topic}</h2>
                  <span className="content-meta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="content-section-heading">Selected Projects</h2>
            <Link href="/projects" className="text-sm text-accent hover:underline">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
