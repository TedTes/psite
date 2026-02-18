import { User, ArrowRight, ExternalLink, Github, Calendar } from "lucide-react";
import { getPublicPosts } from "@/lib/posts";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    tags: ["Next.js", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    tags: ["React", "D3.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Health & Fitness App",
    tags: ["React Native", "Firebase"],
    live: "#",
    github: "#",
  },
  {
    title: "Real Estate Listing",
    tags: ["Next.js", "Mapbox"],
    live: "#",
    github: "#",
  },
  {
    title: "AI Content Writer",
    tags: ["TypeScript", "OpenAI"],
    live: "#",
    github: "#",
  },
  {
    title: "Restaurant Booking",
    tags: ["Vue.js", "MongoDB"],
    live: "#",
    github: "#",
  },
];

export default function Hero() {
  const posts = getPublicPosts().slice(0, 5);

  return (
    <section id="about" className="min-h-screen pt-24 pb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Top: Bio (left, compact) + Blog (right) */}
        <div className="grid lg:grid-cols-7 gap-5 mb-5">
          {/* Bio — narrow left column, centred content */}
          <div className="lg:col-span-2 bg-card border border-card-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-card-border flex items-center justify-center mb-4">
              <User size={24} className="text-accent" />
            </div>
            <h1 className="text-xl font-bold mb-1">Alex Morgan</h1>
            <p className="text-xs text-accent font-medium mb-3">
              Developer &amp; Designer
            </p>
            <p className="text-xs text-muted leading-relaxed mb-4">
              5+ years crafting modern web experiences for startups worldwide.
            </p>
            <div className="flex gap-2">
              {[Github, ExternalLink].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-card-border/50 flex items-center justify-center text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Blog links — right */}
          <div
            id="blog"
            className="lg:col-span-5 bg-card border border-card-border rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold">
                Latest <span className="text-accent">Posts</span>
              </h2>
              <Link
                href="/blog"
                className="text-xs text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                View all <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-1">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-4 py-3 px-3 -mx-3 rounded-lg hover:bg-card-border/30 transition-colors group"
                >
                  <span className="text-xs text-card-border font-mono w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate group-hover:text-accent transition-colors">
                      {post.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-muted inline-flex items-center gap-1">
                        <Calendar size={10} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-accent/70 bg-accent/5 px-1.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-card-border group-hover:text-accent shrink-0 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Projects */}
        <div id="projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-card-border rounded-xl px-5 py-4 hover:border-accent/50 transition-colors group flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold truncate group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted bg-card-border/60 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={project.live}
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    className="text-muted hover:text-accent transition-colors"
                    aria-label="Source Code"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
