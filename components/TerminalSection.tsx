import type { ReactNode } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";

interface TerminalSectionProps {
  path: string;
  command: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

/**
 * One terminal command and the output it owns. The output wrapper reveals as a
 * single unit right after the command finishes typing, so ownership never
 * depends on sibling selectors.
 */
export default function TerminalSection({ path, command, children, id, className }: TerminalSectionProps) {
  return (
    <section id={id} className={["terminal-section", className].filter(Boolean).join(" ")}>
      <TerminalPrompt path={path} command={command} />
      <div className="terminal-output">{children}</div>
    </section>
  );
}
