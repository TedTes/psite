import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="site-content">
      <div className="site-content__inner">
        <section className="content-panel">
          <h1 className="content-feature-title">
            Blog posts are repo-backed now.
          </h1>
          <p className="content-row-copy mt-4">
            This site now follows a production-safe content model: posts live as
            markdown files under <code>content/blog/</code> and are deployed with
            the rest of the site.
          </p>
          <p className="content-row-copy">
            To publish a post, add or edit a markdown file in the repository and
            redeploy. The public blog is available at{" "}
            <Link href="/blog" className="text-accent underline underline-offset-4">
              /blog
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
