import type { CSSProperties } from "react";

interface TerminalPromptProps {
  path: string;
  command: string;
}

/**
 * A single terminal command line. The command text keeps its final width from
 * the first paint and is revealed with a clip, so typing never reflows the line.
 */
export default function TerminalPrompt({ path, command }: TerminalPromptProps) {
  const steps = Math.max(command.length, 1);
  const style = {
    "--terminal-input-width": `${steps}ch`,
    "--terminal-type-steps": steps,
  } as CSSProperties;

  return (
    <p className="terminal-command" style={style}>
      <span className="terminal-prompt">{path}</span>{" "}
      <span className="terminal-symbol">$</span>{" "}
      <span className="terminal-input-wrap">
        <span className="terminal-input">{command}</span>
        <span className="terminal-cursor" aria-hidden="true" />
      </span>
    </p>
  );
}
