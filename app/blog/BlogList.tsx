"use client";

import Link from "next/link";
import { getProjectHref, hasProjectLink, projects } from "@/data/projects";
import type { SeriesMeta, Post } from "@/lib/posts";

interface BlogLandingProps {
  series: SeriesMeta[];
  standalonePosts: Pick<
    Post,
    "slug" | "title" | "excerpt" | "date" | "readTime" | "tags"
  >[];
  showProjects?: boolean;
}

const visibleProjects = projects.filter(hasProjectLink);

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toUpperCase();
}

function formatReadTime(readTime: string): string {
  return readTime.replace(" read", "").toUpperCase();
}

export default function BlogLanding({
  series,
  standalonePosts,
  showProjects = false,
}: BlogLandingProps) {
  const recentPosts = [...standalonePosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="site-content">
      <div className="site-content__inner">
        {showProjects ? (
          <h1 className="sr-only">Tedros Tesfu</h1>
        ) : (
          <h1 className="sr-only">Writing</h1>
        )}

        {recentPosts.length > 0 && (
          <section>
            <div className="content-list">
              {recentPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group content-row"
                >
                  <p className="content-meta mb-3">
                    {formatDate(post.date)} · {formatReadTime(post.readTime)}
                  </p>
                  <h3
                    className={`transition-colors group-hover:text-accent ${
                      index === 0 ? "content-feature-title" : "content-row-title"
                    }`}
                  >
                    {post.title}
                  </h3>
                  <p className="content-row-copy mt-3">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {series.length > 0 && (
          <section className="content-section">
            <div className="content-list">
              {series.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group content-row"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="content-row-title transition-colors group-hover:text-accent">
                          {item.name}
                        </h3>
                        <span className="content-meta">
                          {item.topicCount} published
                        </span>
                      </div>
                      {item.description && (
                        <p className="content-row-copy">{item.description}</p>
                      )}
                    </div>
                  </div>
                  {item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="content-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {showProjects && visibleProjects.length > 0 && (
          <section className="content-section">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h2 className="content-section-heading">Projects</h2>
              <Link href="/projects" className="text-sm text-accent hover:underline">
                See all →
              </Link>
            </div>

            <div className="content-list">
              {visibleProjects.slice(0, 3).map((project) => (
                <div key={project.slug} className="content-row">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <a
                      href={getProjectHref(project)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group min-w-0 flex-1"
                      aria-label={`Open ${project.title}`}
                    >
                      <h3 className="content-project-title transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="content-row-copy">{project.description}</p>
                    </a>
                    <div className="flex shrink-0 items-center gap-2 text-xs text-muted">
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
                        <span className="opacity-40">·</span>
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
                </div>
              ))}
            </div>
          </section>
        )}

        {series.length === 0 && standalonePosts.length === 0 && (
          <p className="text-sm text-muted">Nothing published yet.</p>
        )}
      </div>
    </main>
  );
}
