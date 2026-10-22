import type { Metadata } from "next";
import Link from "next/link";
import TerminalSection from "@/components/TerminalSection";
import { siteConfig } from "@/data/site";
import TerminalCta from "@/components/TerminalCta";
import TerminalTitlebar from "@/components/TerminalTitlebar";

export const metadata: Metadata = {
  title: "Launch Score",
  description: "A quick assessment of how ready your product is to earn trust and launch.",
};

export default function ScorePage() {
  return (
    <main className="terminal-page terminal-page--with-nav">
      <section className="terminal-window" aria-labelledby="score-title">
        <TerminalTitlebar path="/score" />
        <div className="terminal-body score-placeholder">
          <TerminalSection path="~/score" command="status">
            <p className="terminal-kicker">coming soon</p>
            <h1 id="score-title" className="terminal-name">Launch Score</h1>
            <p className="terminal-bio">A fast, practical check of how ready your product is to launch and earn trust.</p>
          </TerminalSection>
          <TerminalSection path="~/score" command="start">
            <TerminalCta title="Want a human review now?" actions={<><Link href="/work-with-me" className="primary-action">See the Launch Audit</Link><a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">→ book a call</a></>}>
              <p>The automated score is coming soon. The audit is available now.</p>
            </TerminalCta>
          </TerminalSection>
        </div>
      </section>
    </main>
  );
}
