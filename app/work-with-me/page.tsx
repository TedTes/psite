import type { Metadata } from "next";
import Link from "next/link";
import TerminalSection from "@/components/TerminalSection";
import { siteConfig } from "@/data/site";
import { getProjectBySlug } from "@/data/projects";
import TerminalRow from "@/components/TerminalRow";
import StatusBadge from "@/components/StatusBadge";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

export const metadata: Metadata = {
  title: "Work with me",
  description: "Turn an idea or early version into a polished, reliable product people can use and trust.",
};

const proofSlugs = ["scoutlead", "quotevan", "syncresume"];

export default function WorkWithMePage() {
  const proof = proofSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project] : [];
  });
  return (
    <main className="terminal-page terminal-page--with-nav">
      <article className="terminal-window terminal-window--wide" aria-labelledby="work-title">
        <TerminalTitlebar path="/work-with-me" />

        <div className="terminal-body">
          <TerminalSection path="~/work-with-me" command="cat offer.md">
            <h1 id="work-title" className="terminal-name terminal-name--split"><span className="terminal-name__lead">Start from zero.</span> Or finish what you have.</h1>
            <p className="terminal-bio">
              For founders starting with an idea, and founders whose current app feels generic, unfinished, or unreliable.
            </p>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="cat working-together.md">
            <div className="home-offer">
              <p>
                Every product needs a different level of help. After a short conversation and a review of your idea or current product, we agree on the problem, scope, timeline, and price before any work starts.
              </p>
              <p>
                I can work across design, frontend, backend, integrations, reliability, and launch—the scope depends on what will move your product forward.
              </p>
            </div>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="cat process.md">
            <div className="terminal-list">
              <TerminalRow label="01" description={<><strong>Share your starting point</strong><p>Send the idea, designs, live product, repository, or whatever you have so far.</p></>} meta="context" />
              <TerminalRow label="02" description={<><strong>Define the work</strong><p>We identify the priorities and agree on deliverables, timeline, and price.</p></>} meta="scope" />
              <TerminalRow label="03" description={<><strong>Build and ship</strong><p>I implement the agreed work, test it, and leave you with a product you can keep building.</p></>} meta="delivery" />
            </div>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="ls proof">
            <div className="terminal-list">
              {proof.map((project) => (
                <TerminalRow key={project.slug} label={<Link href={`/projects/${project.slug}`} className="row-title-link">{project.slug}/</Link>} description={project.description} meta={<StatusBadge status={project.status} />} />
              ))}
            </div>
          </TerminalSection>

          <TerminalSection id="book" path="~/work-with-me" command="start">
            <TerminalCta title="Tell me what you're building." actions={<>
              <a href={`mailto:${siteConfig.email}?subject=Work%20with%20me`} className="primary-action">Send an email</a>
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">→ book a call</a>
            </>}>
              <p>Share your idea or current product, what you need, and where you want to take it.</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </article>
    </main>
  );
}
