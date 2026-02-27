import { getPublicPosts } from "@/lib/posts";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function RecentPosts() {
  const posts = getPublicPosts().slice(0, 4);
  const [featured, ...rest] = posts;

  if (!featured) return null;

  return (
    <section className="py-14 sm:py-20 border-t border-card-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs text-accent font-mono tracking-widest uppercase mb-2 block">
              02 — Writing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">Recent Articles</h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-accent inline-flex items-center gap-1.5 transition-colors group"
          >
            All posts{" "}
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Magazine layout: featured left, list right */}
        <div className="grid md:grid-cols-5 gap-4">

          {/* ── Featured post (left, large) ── */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group md:col-span-3 relative bg-card border border-card-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col"
          >
            {/* Top colour band */}
            <div className="h-2 bg-gradient-to-r from-accent via-accent-hover to-indigo-400 shrink-0" />

            <div className="p-5 sm:p-7 flex flex-col flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-accent bg-accent/10 px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                {featured.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted leading-relaxed mb-6 flex-1 text-sm">
                {featured.excerpt}
              </p>

              {/* Meta + CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-card-border/50">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={10} /> {featured.readTime}
                  </span>
                </div>
                <span className="text-xs font-medium text-muted inline-flex items-center gap-1.5 group-hover:text-accent transition-colors">
                  Read article
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>

          {/* ── Compact posts (right column) ── */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex-1 bg-card border border-card-border rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 flex gap-4"
              >
                {/* Index number */}
                <span className="text-2xl font-black text-card-border/35 font-mono leading-none shrink-0 mt-0.5 select-none">
                  {String(i + 2).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  {/* Tags */}
                  <div className="flex gap-1.5 flex-wrap mb-1.5">
                    {post.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-semibold mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[11px] text-muted">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-0.5">
                      <Clock size={9} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
