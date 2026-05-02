import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getPublicPosts } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
  const posts = getPublicPosts().slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2 text-accent text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Writing
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
          >
            All posts <ArrowRight size={13} />
          </Link>
        </div>

        <div className="divide-y divide-card-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-start justify-between gap-6 py-6 first:pt-0 last:pb-0 group"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold group-hover:text-accent transition-colors leading-snug mb-1 truncate">
                  {post.title}
                </h3>
                <p className="text-sm text-muted line-clamp-1 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex-shrink-0 text-right hidden sm:block">
                <p className="text-xs text-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="text-xs text-muted mt-0.5 inline-flex items-center gap-1 justify-end">
                  <Clock size={10} />
                  {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
