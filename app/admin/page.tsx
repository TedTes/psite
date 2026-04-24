import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-[60vh] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-card-border bg-card p-8 sm:p-10">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-accent">
          Publishing
        </p>
        <h1 className="mb-4 text-3xl font-bold">Blog posts are repo-backed now.</h1>
        <p className="mb-4 text-muted leading-relaxed">
          This site now follows a production-safe content model: posts live as
          markdown files under <code>content/blog/</code> and are deployed with
          the rest of the site.
        </p>
        <p className="text-muted leading-relaxed">
          To publish a post, add or edit a markdown file in the repository and
          redeploy. The public blog is available at{" "}
          <Link href="/blog" className="text-accent underline underline-offset-4">
            /blog
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
