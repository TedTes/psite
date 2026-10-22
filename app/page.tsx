import Link from "next/link";
import { getProjectBySlug, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { getSeriesList, getStandalonePosts } from "@/lib/posts";
import TerminalSection from "@/components/TerminalSection";
import TerminalRow from "@/components/TerminalRow";
import StatusBadge from "@/components/StatusBadge";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

const productOrder = ["syncresume", "snapquote", "lidscout", "autofil", "secretio"];

function formatMonth(dateValue: string | Date): string {
  return (dateValue instanceof Date ? dateValue.toISOString() : dateValue).slice(0, 7);
}

function displayStatus(project: Project): string {
  return project.status === "In progress" ? "building" : project.status.toLowerCase();
}

function ProductRow({ project }: { project: Project }) {
  const live = project.live !== "#" ? project.live : null;

  return (
    <TerminalRow
      label={<Link href={`/projects/${project.slug}`} className="row-title-link">{project.slug}/</Link>}
      description={<><span>{project.description}</span><span className="row-links">{live && <><a href={live} target="_blank" rel="noopener noreferrer">→ visit</a><span>·</span></>}<Link href={`/projects/${project.slug}`}>→ details</Link></span></>}
      meta={<StatusBadge status={displayStatus(project)} />}
    />
  );
}

export default function Home() {
  const products = productOrder.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project] : [];
  });
  const scoutlead = getProjectBySlug("scoutlead");
  const psite = getProjectBySlug("psite");
  const writingRows = [
    ...getStandalonePosts()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post) => ({ href: `/blog/${post.slug}`, label: formatMonth(post.date), title: post.title })),
    ...getSeriesList().map((series) => ({ href: `/blog/${series.slug}`, label: "series", title: `${series.name} (${series.topicCount} topics)` })),
  ].slice(0, 2);

  return (
    <main className="terminal-page terminal-page--with-nav">
      <section className="terminal-window" aria-label="Tedros Tesfu">
        <TerminalTitlebar />

        <div className="terminal-body">
          <TerminalSection path="~/tedtes" command="whoami">
            <h1 className="terminal-name terminal-name--split"><span className="terminal-name__lead">Software engineer.</span> I build products end to end: design, code, launch.</h1>
            <p className="terminal-bio">Currently building <a href="https://scoutlead.io" target="_blank" rel="noopener noreferrer">scoutlead.io</a>.</p>
          </TerminalSection>

          <TerminalSection id="work-with-me" className="home-section" path="~/work-with-me" command="cat offer.md">
            <div className="home-offer">
              <p>Have a rough first version of your app? I turn it into a polished product people trust.</p>
              <div className="terminal-contact-row">
                <Link href="/score">→ Get a free Launch Score</Link><span aria-hidden="true">·</span>
                <Link href="/work-with-me#audit">→ See the audit</Link>
              </div>
            </div>
          </TerminalSection>

          {scoutlead && (
            <TerminalSection className="home-section" path="~/now" command="building">
              <div className="terminal-list">
                <TerminalRow
                  label={<a href="https://scoutlead.io" target="_blank" rel="noopener noreferrer" className="row-title-link">scoutlead.io</a>}
                  description={<><span>find and qualify clients for your business.</span><span className="row-links"><a href="https://scoutlead.io" target="_blank" rel="noopener noreferrer">→ visit</a></span></>}
                  meta={<StatusBadge status="mvp" />}
                />
              </div>
            </TerminalSection>
          )}

          <TerminalSection id="products" className="home-section" path="~/products" command="ls">
            <div className="terminal-list home-product-list">
              {products.map((project) => <ProductRow key={project.slug} project={project} />)}
            </div>
          </TerminalSection>

          <TerminalSection className="home-section" path="~/writing" command="cat *.md">
            <div className="terminal-list">
              {writingRows.map((row) => (
                <TerminalRow key={row.href} label={row.label} description={<Link href={row.href} className="row-title-link">{row.title}</Link>} meta="article" />
              ))}
            </div>
          </TerminalSection>

          {psite && (
            <TerminalSection className="home-section" path="~/site" command="cat build.txt">
              <TerminalRow label={<span className="row-title">psite/</span>} description={<Link href={`/projects/${psite.slug}`}>built with the site itself</Link>} meta={<StatusBadge status="live" />} />
            </TerminalSection>
          )}

          <TerminalSection id="contact" className="home-section" path="~/contact" command="open">
            <div className="terminal-contact-row">
              <a href={`mailto:${siteConfig.email}`}>→ email</a><span aria-hidden="true">·</span>
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">→ book a call</a><span aria-hidden="true">·</span>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">→ GitHub</a><span aria-hidden="true">·</span>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">→ LinkedIn</a><span aria-hidden="true">·</span>
              <a href={siteConfig.links.x} target="_blank" rel="noopener noreferrer">→ X</a>
            </div>
            <TerminalCta
              title="Have a first version that needs finishing?"
              actions={<><Link href="/work-with-me" className="primary-action">Work with me</Link><a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">→ book a call</a></>}
            >
              <p>See how I can help turn it into a polished product people trust.</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </section>
    </main>
  );
}
