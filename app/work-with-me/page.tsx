import type { Metadata } from "next";
import Link from "next/link";
import TerminalSection from "@/components/TerminalSection";
import { offers, siteConfig } from "@/data/site";
import { getProjectBySlug } from "@/data/projects";
import OfferCard from "@/components/OfferCard";
import TerminalRow from "@/components/TerminalRow";
import StatusBadge from "@/components/StatusBadge";
import TerminalAccordion from "@/components/TerminalAccordion";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

export const metadata: Metadata = {
  title: "Work with me",
  description: "Turn a working first version into a polished, reliable product people trust.",
};

const proofSlugs = ["syncresume", "snapquote", "lidscout"];

export default function WorkWithMePage() {
  const proof = proofSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project] : [];
  });
  const checkoutConfigured = Boolean(process.env.NEXT_PUBLIC_AUDIT_CHECKOUT_URL);

  return (
    <main className="terminal-page terminal-page--with-nav">
      <article className="terminal-window terminal-window--wide" aria-labelledby="work-title">
        <TerminalTitlebar path="/work-with-me" />

        <div className="terminal-body">
          <TerminalSection path="~/work-with-me" command="cat offer.md">
            <h1 id="work-title" className="terminal-name terminal-name--split"><span className="terminal-name__lead">Make the first version</span> feel finished.</h1>
            <p className="terminal-bio">
              For founders whose app works, but still looks generic, feels unfinished, or breaks in the places that matter.
            </p>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="ls offers">
            <div className="service-grid">
              {offers.map((offer) => (
                <OfferCard key={offer.name} id={offer.name === "Launch Audit" ? "audit" : undefined} title={offer.name} price={offer.price} timeline={offer.timeline}>
                  <p>{offer.description}</p>
                  <ul>{offer.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                </OfferCard>
              ))}
            </div>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="cat process.md">
            <div className="terminal-list">
              <TerminalRow label="01" description={<><strong><a href={siteConfig.scoreUrl} className="row-title-link">→ Get a free Launch Score</a></strong><p>A quick outside view of where the product stands and what needs attention.</p></>} meta="score" />
              <TerminalRow label="02" description={<><strong>Start with an audit</strong><p>Turn the broad signals into a prioritized, concrete finishing plan.</p></>} meta="audit" />
              <TerminalRow label="03" description={<><strong>Fix what matters</strong><p>Use a focused sprint or ongoing support to ship the work.</p></>} meta="build" />
            </div>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="ls proof">
            <div className="terminal-list">
              {proof.map((project) => (
                <TerminalRow key={project.slug} label={<Link href={`/projects/${project.slug}`} className="row-title-link">{project.slug}/</Link>} description={project.description} meta={<StatusBadge status={project.status} />} />
              ))}
            </div>
          </TerminalSection>

          <TerminalSection path="~/work-with-me" command="cat FAQ.md">
            <div className="faq-list">
              <TerminalAccordion title="What stack do you work with?"><p>TypeScript and React across the frontend, with Node.js, Python, Postgres, Supabase, and Cloudflare on the backend. I work inside the stack the product already uses when that is the right choice.</p></TerminalAccordion>
              <TerminalAccordion title="Who owns the code?"><p>You do. Work is delivered in your repository, with the code, documentation, and access needed to keep building without me.</p></TerminalAccordion>
              <TerminalAccordion title="How do you use AI tools?"><p>I use them to move faster on research, implementation, and review. Product decisions, architecture, testing, and the final work remain my responsibility.</p></TerminalAccordion>
            </div>
          </TerminalSection>

          <TerminalSection id="book" path="~/work-with-me" command="start">
            <TerminalCta title="Start with the Launch Audit." actions={<>
              <a href={siteConfig.auditCheckoutUrl} target="_blank" rel="noopener noreferrer" className="primary-action">
                {checkoutConfigured ? "Buy the Launch Audit" : "Request the audit"}
              </a>
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">→ book a call</a>
            </>}>
              <p>Get a concrete plan for turning the version you have into a product people trust.</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </article>
    </main>
  );
}
