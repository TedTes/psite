import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, Calendar } from "lucide-react";

export default function FeaturedProjects() {
  const [featured, ...rest] = projects.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 border-t border-card-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs text-accent font-mono tracking-widest uppercase mb-2 block">
              01 — Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Selected Projects</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent inline-flex items-center gap-1.5 transition-colors group"
          >
            View all{" "}
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento grid: featured left (row-span-2), two smaller right */}
        <div className="grid md:grid-cols-3 gap-4">

          {/* ── Featured card (spans 2 rows on left) ── */}
          <Link
            href={`/projects/${featured.slug}`}
            className="group relative md:col-span-2 md:row-span-2 bg-card border border-card-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col"
          >
            {/* Gradient header area */}
            <div className="relative h-28 sm:h-36 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent flex items-end p-5 sm:p-6 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent" />
              <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="feat-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#feat-grid)" />
              </svg>
              <span className="relative text-[80px] font-black text-accent/10 leading-none select-none font-mono -mb-4">
                01
              </span>
              <span className="relative ml-auto text-xs text-accent bg-accent/20 px-2.5 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>

            {/* Card body */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                  <Calendar size={9} /> {featured.year}
                </span>
                <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {featured.role}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {featured.tags.map((tag) => (
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
                <span className="text-xs text-muted inline-flex items-center gap-1.5 group-hover:text-accent transition-colors font-medium">
                  View case study
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* ── Smaller cards (right column, stacked) ── */}
          {rest.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative bg-card border border-card-border rounded-2xl p-5 sm:p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <span className="absolute top-4 right-5 text-5xl font-black text-card-border/20 font-mono leading-none select-none pointer-events-none">
                {String(i + 2).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                    <Calendar size={9} /> {project.year}
                  </span>
                  <span className="text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-muted bg-card-border/50 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end pt-3 border-t border-card-border/50">
                  <span className="text-xs text-muted inline-flex items-center gap-1 group-hover:text-accent transition-colors">
                    Case study{" "}
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
