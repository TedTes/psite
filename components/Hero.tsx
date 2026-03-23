import Link from "next/link";
import { ArrowRight, MapPin, Github, Mail, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { getPublicPosts } from "@/lib/posts";

export default function Hero() {
  const recentProjects = projects.slice(0, 4);
  const recentPosts = getPublicPosts().slice(0, 4);

  return (
    <section className="min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── Left: Bio ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-card border border-card-border flex items-center justify-center text-2xl font-black text-accent">
              TT
            </div>

            {/* Name + location */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Tedros Tesfu</h1>
              <p className="flex items-center gap-1.5 text-sm text-muted mt-1">
                <MapPin size={13} />
                Toronto, Canada
              </p>
            </div>

            {/* Bio */}
            <p className="text-muted leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-muted leading-relaxed text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>

            {/* Links */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Github size={15} />
                github.com/tedros
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Mail size={15} />
                hello@example.com
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <ExternalLink size={15} />
                Resume
              </a>
            </div>
          </div>

          {/* ── Right: Work + Writing ── */}
          <div className="lg:col-span-8 flex flex-col gap-12">

            {/* Projects */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xs font-mono uppercase tracking-widest text-muted">Projects</h2>
                <Link href="/projects" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                  All projects <ArrowRight size={11} />
                </Link>
              </div>
              <div className="flex flex-col divide-y divide-card-border">
                {recentProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="flex items-start justify-between gap-4 py-4 group hover:bg-card/50 -mx-3 px-3 rounded-lg transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">
                        {project.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5 truncate">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 mt-0.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] text-muted bg-card border border-card-border px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Writing */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xs font-mono uppercase tracking-widest text-muted">Writing</h2>
                <Link href="/blog" className="text-xs text-accent hover:underline inline-flex items-center gap-1">
                  All posts <ArrowRight size={11} />
                </Link>
              </div>
              <div className="flex flex-col divide-y divide-card-border">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-start justify-between gap-4 py-4 group hover:bg-card/50 -mx-3 px-3 rounded-lg transition-colors"
                  >
                    <p className="text-sm font-medium group-hover:text-accent transition-colors flex-1 min-w-0">
                      {post.title}
                    </p>
                    <span className="text-xs text-muted shrink-0 mt-0.5">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
