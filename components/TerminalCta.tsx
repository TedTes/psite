import type { ReactNode } from "react";

export default function TerminalCta({ title, children, actions }: { title: string; children: ReactNode; actions: ReactNode }) {
  return (
    <section className="system-cta">
      <div><h2>{title}</h2><div className="system-cta__copy">{children}</div></div>
      <div className="system-cta__actions">{actions}</div>
    </section>
  );
}
