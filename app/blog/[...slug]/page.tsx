import { getPostBySlug, getPublicPosts, getSeriesData, getStandalonePosts } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReadingProgress from "@/components/ReadingProgress";
import SeriesLayout from "@/components/SeriesLayout";
import TerminalSection from "@/components/TerminalSection";
import TerminalRow from "@/components/TerminalRow";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

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
      title: post.title,
      description: post.excerpt,
    };
  }

  if (slug.length === 1) {
    const seriesData = getSeriesData(slug[0]);
    if (seriesData) {
      return {
        title: seriesData.name,
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
          <TerminalTitlebar path={`/writing/${post.slug}`} />

          <div className="terminal-body">
            <TerminalSection path={`~/writing/${post.slug}`} command="cat post.md">
              <h1 id="post-title" className="terminal-name">
                {post.title}
              </h1>
              <p className="terminal-bio">{post.excerpt}</p>
            </TerminalSection>

            <TerminalSection path={`~/writing/${post.slug}`} command="cat meta.txt">
              <div className="terminal-list">
                <TerminalRow label={formatDate(post.date)} description={post.author} meta={post.readTime} />
              </div>
            </TerminalSection>

            {post.tags.length > 0 && (
              <TerminalSection path={`~/writing/${post.slug}`} command="cat tags.txt">
                <div className="terminal-chip-row">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </TerminalSection>
            )}

            <TerminalSection path={`~/writing/${post.slug}`} command="cat body.md">
              <div
                className="terminal-article-prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </TerminalSection>

            <TerminalSection path={`~/writing/${post.slug}`} command="open">
              {nextPost ? (
                <TerminalCta title="Keep reading." actions={<><Link href={`/blog/${nextPost.slug}`} className="primary-action">Next article</Link><Link href="/blog">→ all writing</Link></>}>
                  <TerminalRow label="next" description={nextPost.title} meta={nextPost.readTime} />
                </TerminalCta>
              ) : (
                <TerminalCta title="That is everything for now." actions={<><Link href="/blog" className="primary-action">All writing</Link><Link href="/">→ home</Link></>}><p>More notes will be published here.</p></TerminalCta>
              )}
            </TerminalSection>
          </div>
        </article>
      </main>
    </>
  );
}
