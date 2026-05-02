"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, FileText, Github } from "lucide-react";
import { projects } from "@/data/projects";
import type { SeriesMeta, Post } from "@/lib/posts";

interface BlogLandingProps {
  series: SeriesMeta[];
  standalonePosts: Pick<Post, "slug" | "title" | "excerpt" | "date" | "readTime" | "tags">[];
  showProjects?: boolean;
}

const visibleProjects = projects.filter(
  (project) => project.live !== "#" || project.github !== "#"
);

export default function BlogLanding({
  series,
  standalonePosts,
  showProjects = false,
}: BlogLandingProps) {
  return (
    <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div>
          {series.length > 0 && (
            <section className="mb-14">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Structured Series
              </h2>
              <div className="flex flex-col gap-3">
                {series.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/blog/${s.slug}`}
                    className="group flex items-start gap-4 p-4 rounded-lg border border-card-border hover:border-accent/40 hover:bg-card transition-all"
                  >
                    <BookOpen
                      size={15}
                      className="mt-0.5 flex-shrink-0 text-muted group-hover:text-accent transition-colors"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-semibold group-hover:text-accent transition-colors leading-snug">
                          {s.name}
                        </h3>
                        <ArrowRight
                          size={13}
                          className="flex-shrink-0 mt-0.5 text-muted group-hover:text-accent transition-colors"
                        />
                      </div>
                      <p className="text-xs text-muted">
                        {s.chapterCount} {s.chapterCount === 1 ? "chapter" : "chapters"} ·{" "}
                        {s.topicCount} {s.topicCount === 1 ? "topic" : "topics"}
                      </p>
                      {s.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {s.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {standalonePosts.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Standalone Notes
              </h2>
              <div className="flex flex-col divide-y divide-card-border">
                {standalonePosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group py-5 first:pt-0 flex items-start gap-4"
                  >
                    <FileText
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-muted group-hover:text-accent transition-colors"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold group-hover:text-accent transition-colors leading-snug mb-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted line-clamp-1 mb-2">{post.excerpt}</p>
                      <div className="flex gap-3 text-xs text-muted">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {showProjects && visibleProjects.length > 0 && (
            <section className="mt-14">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Projects
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleProjects.slice(0, 4).map((project) => {
                  const projectUrl = project.live !== "#" ? project.live : project.github;

                  function openProject() {
                    window.open(projectUrl, "_blank", "noopener,noreferrer");
                  }

                  return (
                    <article
                      key={project.slug}
                      role="link"
                      tabIndex={0}
                      onClick={openProject}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openProject();
                        }
                      }}
                      className="group cursor-pointer rounded-lg border border-card-border p-4 transition-colors hover:border-accent/40 hover:bg-card focus:outline-none focus:ring-2 focus:ring-accent/30"
                    >
                      <h3 className="mb-2 text-sm font-semibold leading-snug">
                        {project.title}
                      </h3>
                      <p className="mb-3 line-clamp-2 text-xs leading-5 text-muted">
                        {project.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-card-border/60 px-1.5 py-0.5 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted">
                        {project.live !== "#" && (
                          <span className="inline-flex items-center gap-1.5 transition-colors group-hover:text-accent">
                            <ExternalLink size={12} />
                            Live
                          </span>
                        )}
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            onKeyDown={(event) => event.stopPropagation()}
                            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                          >
                            <Github size={12} />
                            Code
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {series.length === 0 && standalonePosts.length === 0 && (
            <p className="text-sm text-muted">Nothing published yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
