import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { getPublicPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const allPosts = getPublicPosts();
  const featured = allPosts[0];
  const recent = allPosts.slice(1, 4);

  if (!featured) return null;

  return (
    <section id="blog" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
              <BookOpen size={16} />
              Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest <span className="text-accent">Thoughts</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm border border-card-border text-muted hover:border-accent hover:text-accent px-5 py-2.5 rounded-lg transition-colors"
          >
            All Posts <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured post — large card */}
        <Link
          href={`/blog/${featured.slug}`}
          className="block bg-card border border-card-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors group mb-6"
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-accent/20 via-accent/5 to-transparent p-8 md:p-10 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/20 text-accent px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-accent/60 text-sm font-medium">
                  Featured Post
                </p>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-muted mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                {featured.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                Read Article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>

        {/* Recent posts — smaller cards */}
        {recent.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recent.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-card border border-card-border rounded-xl p-6 hover:border-accent/50 transition-colors group block relative"
              >
                <div className="absolute top-6 right-6 text-5xl font-black text-card-border/80 select-none">
                  {String(index + 2).padStart(2, "0")}
                </div>

                <div className="flex items-center gap-3 text-xs text-muted mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors pr-10 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile "View All" link */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-accent"
          >
            View All Posts <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
