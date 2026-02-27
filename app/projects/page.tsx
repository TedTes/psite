"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Calendar } from "lucide-react";

const categoryMap: Record<string, string[]> = {
  SaaS: ["SaaS Dashboard", "AI Content Writer"],
  Web: ["E-Commerce Platform", "Real Estate Listing", "Restaurant Booking"],
  Mobile: ["Health & Fitness App"],
};

function getCategory(project: Project): string {
  for (const [cat, titles] of Object.entries(categoryMap)) {
    if (titles.includes(project.title)) return cat;
  }
  return "Web";
}

const filters = ["All", "SaaS", "Web", "Mobile"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => getCategory(p) === active);

  return (
    <>
      <main className="min-h-screen pt-8 sm:pt-12 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Page header */}
          <div className="mb-12">
            <span className="text-xs text-accent font-mono tracking-widest uppercase mb-3 block">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Projects</h1>
            <p className="text-muted max-w-xl text-base sm:text-lg leading-relaxed">
              SaaS products, web apps, and tools I&apos;ve built — from solo
              side projects to enterprise-scale applications.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  active === f
                    ? "bg-accent text-white"
                    : "bg-card border border-card-border text-muted hover:text-foreground hover:border-accent/30"
                }`}
              >
                {f}
                {f !== "All" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    {projects.filter((p) => getCategory(p) === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative bg-card border border-card-border rounded-2xl p-5 sm:p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl sm:text-6xl font-black text-card-border/25 font-mono leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                      <Calendar size={9} /> {project.year}
                    </span>
                    <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {getCategory(project)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted bg-card-border/50 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-card-border/50">
                    <div className="flex gap-1">
                      <span className="p-1.5 rounded-lg text-muted">
                        <Github size={13} />
                      </span>
                      <span className="p-1.5 rounded-lg text-muted">
                        <ExternalLink size={13} />
                      </span>
                    </div>
                    <span className="text-xs text-muted inline-flex items-center gap-1 group-hover:text-accent transition-colors">
                      Case study{" "}
                      <ArrowRight
                        size={11}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
