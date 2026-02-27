import {
  ArrowLeft,
  ExternalLink,
  Github,
  Check,
  Calendar,
  Briefcase,
} from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Tedros Tesfu`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 text-sm text-muted mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {project.year}
              </span>
              <span className="w-1 h-1 rounded-full bg-card-border" />
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={14} />
                {project.role}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 animate-fade-in-up animation-delay-200">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 animate-fade-in-up animation-delay-400">
            <a
              href={project.live}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.github}
              className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Description — wider column */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-6">
                About the <span className="text-accent">Project</span>
              </h2>
              <p className="text-muted leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Details sidebar */}
            <div className="md:col-span-2">
              <div className="bg-card border border-card-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted mb-1">Year</p>
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">Role</p>
                    <p className="text-sm font-medium">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-1">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] bg-card-border text-muted px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-card-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">
            Key <span className="text-accent">Features</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex gap-3 bg-card border border-card-border rounded-xl p-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-accent" />
                </div>
                <p className="text-sm text-muted leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-card-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted mb-6">Interested in working together?</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground px-5 sm:px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
