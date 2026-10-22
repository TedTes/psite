import type { ReactNode } from "react";

export default function TerminalAccordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="system-accordion">
      <summary><span aria-hidden="true" className="system-accordion__icon">▸</span>{title}</summary>
      <div className="system-accordion__content">{children}</div>
    </details>
  );
}
