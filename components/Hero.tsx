import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Github, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getPublicPosts } from "@/lib/posts";

export default function Hero() {
  const recentProjects = projects.slice(0, 4);
  const recentPosts = getPublicPosts().slice(0, 4);

  return (
    <section className="min-h-screen py-12 sm:py-16 relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent/[0.06] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── Left: Bio ── */}
          <div className="lg:col-span-3 flex flex-col gap-5">

            {/* Avatar */}
            <div className="animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-lg font-black shadow-lg shadow-indigo-500/25 animate-float">
                TT
              </div>
            </div>

            {/* Name + location + status */}
            <div className="animate-fade-in-up animation-delay-200">
              <h1 className="text-lg font-bold tracking-tight">Tedros Tesfu</h1>
              <p className="flex items-center gap-1.5 text-xs text-muted mt-0.5">
                <MapPin size={12} />
                Toronto, Canada
              </p>
            </div>

            {/* Bio */}
            <p className="text-muted leading-relaxed text-xs animate-fade-in-up animation-delay-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-card-border via-card-border to-transparent animate-fade-in-up animation-delay-400" />

            {/* Links */}
            <div className="flex flex-col gap-2 animate-fade-in-up animation-delay-500">
              <a
                href="https://github.com/TedTes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group"
              >
                <Github size={13} className="group-hover:text-accent transition-colors shrink-0" />
                <span>github.com/TedTes</span>
                <ArrowUpRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group"
              >
                <Mail size={13} className="group-hover:text-accent transition-colors shrink-0" />
                <span>hello@example.com</span>
                <ArrowUpRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors group"
              >
                <ExternalLink size={13} className="group-hover:text-accent transition-colors shrink-0" />
                <span>Resume</span>
                <ArrowUpRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
              </a>
            </div>

          </div>

          {/* ── Right: Work + Writing ── */}
          <div className="lg:col-span-9 flex flex-col gap-14">

            {/* Projects */}
            <div>
              <div className="flex items-center justify-between mb-5 animate-fade-in-up animation-delay-200">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h2 className="text-xs font-mono uppercase tracking-widest text-muted">Projects</h2>
                </div>
                <span />
              </div>

              <div className="flex flex-col divide-y divide-card-border">
                {recentProjects.map((project, i) => (
                  <a
                    key={project.slug}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-6 py-4 group hover:bg-card/60 -mx-3 px-3 rounded-xl transition-all duration-200 hover:shadow-sm animate-fade-in-up"
                    style={{ opacity: 0, animationDelay: `${0.25 + i * 0.08}s` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-medium group-hover:text-accent transition-colors">
                          {project.title}
                        </p>
                        <ArrowUpRight
                          size={12}
                          className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-150 -translate-x-1 group-hover:translate-x-0"
                        />
                      </div>
                      <p className="text-xs text-muted mt-0.5 truncate">{project.description}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] text-muted bg-card border border-card-border px-2 py-0.5 rounded-full group-hover:border-accent/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="shrink-0 w-36 h-24 rounded-xl overflow-hidden border border-card-border bg-card relative group-hover:border-accent/30 transition-colors duration-200 group-hover:shadow-md">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={144}
                            height={96}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-7 h-7 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-100">
                              <ArrowUpRight size={13} className="text-accent" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm font-bold text-muted/30 select-none">
                          {project.title.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Writing */}
            <div>
              <div className="flex items-center justify-between mb-5 animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h2 className="text-xs font-mono uppercase tracking-widest text-muted">Writing</h2>
                </div>
                <Link href="/blog" className="text-xs text-accent hover:underline inline-flex items-center gap-1 transition-colors">
                  All posts <ArrowRight size={11} />
                </Link>
              </div>

              {recentPosts[0] ? (
                <div className="overflow-hidden rounded-2xl border border-card-border bg-card">
                  <Link
                    href={`/blog/${recentPosts[0].slug}`}
                    className="group block border-b border-card-border bg-[linear-gradient(160deg,rgba(99,102,241,0.16),rgba(99,102,241,0.03)_70%)] px-5 py-5 transition-colors hover:border-accent/30"
                  >
                    <div className="mb-4 flex flex-wrap gap-2">
                      {recentPosts[0].tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-2 text-base font-semibold leading-snug transition-colors group-hover:text-accent">
                      {recentPosts[0].title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-xs leading-6 text-muted">
                      {recentPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between gap-3 text-[11px] text-muted">
                      <span>
                        {new Date(recentPosts[0].date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1 text-accent">
                        Read article <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-col divide-y divide-card-border">
                    {recentPosts.slice(1).map((post, i) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="relative flex items-center justify-between gap-4 px-5 py-3.5 group hover:bg-card/60 transition-all duration-200 overflow-hidden animate-fade-in-up"
                        style={{ opacity: 0, animationDelay: `${0.52 + i * 0.07}s` }}
                      >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-0.5 origin-center scale-y-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-y-100" />
                        <p className="min-w-0 flex-1 pl-0 text-sm font-medium transition-all duration-200 group-hover:pl-3 group-hover:text-accent">
                          {post.title}
                        </p>
                        <span className="shrink-0 rounded-full border border-card-border bg-card px-2 py-0.5 text-[11px] text-muted transition-colors group-hover:border-accent/30">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-card-border px-5 py-8 text-sm text-muted">
                  No published posts yet.
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
