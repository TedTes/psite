import { getPostBySlug, getPublicPosts, getSeriesData, getStandalonePosts } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/ReadingProgress";
import SeriesLayout from "@/components/SeriesLayout";
import TerminalPrompt from "@/components/TerminalPrompt";

type Params = Promise<{ slug: string[] }>;

function slugFromParams(slug: string[]): string {
  return slug.join("/");
}

function formatDate(dateValue: string | Date): string {
  return new Date(dateValue).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = getPublicPosts();
  const seriesSlugs = [
    ...new Set(posts.filter((p) => p.seriesSlug).map((p) => p.seriesSlug!)),
  ];

  // Only pre-render series landing pages at build time.
  // Individual topic pages render on first visit and are cached by Next.js.
  return [
    ...seriesSlugs.map((slug) => ({ slug: [slug] })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slugFromParams(slug);

  const post = getPostBySlug(fullSlug);
  if (post?.isPublic) {
    return {
      title: `${post.title} | Tedros Tesfu`,
      description: post.excerpt,
    };
  }

  if (slug.length === 1) {
    const seriesData = getSeriesData(slug[0]);
    if (seriesData) {
      return {
        title: `${seriesData.name} | Tedros Tesfu`,
        description: `${seriesData.chapters.length} chapters covering ${seriesData.name}.`,
      };
    }
  }

  return { title: "Post Not Found" };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const fullSlug = slugFromParams(slug);
  const post = getPostBySlug(fullSlug);

  // Series topic — render with sidebar layout
  if (post?.isPublic && post.seriesSlug) {
    const seriesData = getSeriesData(post.seriesSlug);
    if (seriesData) {
      return (
        <SeriesLayout
          seriesData={seriesData}
          currentSlug={post.slug}
          content={post.content}
          title={post.title}
          excerpt={post.excerpt || undefined}
        />
      );
    }
  }

  // Standalone post
  if (post?.isPublic) {
    return <StandalonePost post={post} />;
  }

  // Series page — default to the first published topic in the reader layout
  if (slug.length === 1) {
    const seriesData = getSeriesData(slug[0]);
    if (seriesData) {
      const firstTopic = seriesData.chapters
        .flatMap((chapter) => chapter.topics)
        .find((topic) => topic.isPublic);
      const firstPost = firstTopic ? getPostBySlug(firstTopic.slug) : undefined;

      if (firstPost?.isPublic) {
        return (
          <SeriesLayout
            seriesData={seriesData}
            currentSlug={firstPost.slug}
            content={firstPost.content}
            title={firstPost.title}
            excerpt={firstPost.excerpt || undefined}
          />
        );
      }

      return <SeriesLayout seriesData={seriesData} />;
    }
  }

  notFound();
}

function StandalonePost({ post }: { post: Post }) {
  const standalonePosts = getStandalonePosts();
  const currentIndex = standalonePosts.findIndex((p) => p.slug === post.slug);
  const nextPost =
    currentIndex !== -1 && currentIndex < standalonePosts.length - 1
      ? standalonePosts[currentIndex + 1]
      : null;

  return (
    <>
      <ReadingProgress />
      <main className="terminal-page">
        <article className="terminal-window terminal-window--wide" aria-labelledby="post-title">
          <div className="terminal-titlebar">
            <div className="terminal-controls" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="terminal-path">~/tedtes/writing/{post.slug}</span>
          </div>

          <div className="terminal-body">
            <TerminalPrompt path={`~/writing/${post.slug}`} command="cat post.md" />
            <h1 id="post-title" className="terminal-name">
              {post.title}
            </h1>
            <p className="terminal-bio">{post.excerpt}</p>

            <TerminalPrompt path={`~/writing/${post.slug}`} command="cat meta.txt" />
            <dl className="terminal-meta-grid terminal-meta-grid--inline">
              <div>
                <dt>author</dt>
                <dd>{post.author}</dd>
              </div>
              <div>
                <dt>date</dt>
                <dd>{formatDate(post.date)}</dd>
              </div>
              <div>
                <dt>time</dt>
                <dd>{post.readTime}</dd>
              </div>
            </dl>

            {post.tags.length > 0 && (
              <>
                <TerminalPrompt path={`~/writing/${post.slug}`} command="cat tags.txt" />
                <div className="terminal-chip-row">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </>
            )}

            <TerminalPrompt path={`~/writing/${post.slug}`} command="cat body.md" />
            <div
              className="terminal-article-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <TerminalPrompt path={`~/writing/${post.slug}`} command="cd .." />
            {nextPost ? (
              <>
                <div className="terminal-contact-row">
                  <span aria-hidden="true">→</span>
                  <Link href="/blog">writing</Link>
                  <Link href="/">home</Link>
                </div>
                <TerminalPrompt path="~/writing" command="next" />
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="terminal-blog-row terminal-blog-row--next"
                >
                  <span className="terminal-blog-date">next</span>
                  <span className="terminal-blog-main">
                    <span className="terminal-product-name">
                      {nextPost.title}
                    </span>
                    <span className="terminal-product-description">
                      {nextPost.excerpt}
                    </span>
                  </span>
                  <span className="terminal-status">{nextPost.readTime}</span>
                </Link>
              </>
            ) : (
              <div className="terminal-contact-row">
                <span aria-hidden="true">→</span>
                <Link href="/blog">writing</Link>
                <Link href="/">home</Link>
              </div>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
