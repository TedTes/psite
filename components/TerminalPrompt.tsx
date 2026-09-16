import type { CSSProperties } from "react";

interface TerminalPromptProps {
  path: string;
  command: string;
}

export default function TerminalPrompt({ path, command }: TerminalPromptProps) {
  const style = {
    "--terminal-input-width": `${Math.max(command.length, 1)}ch`,
    "--terminal-type-steps": Math.max(command.length, 1),
  } as CSSProperties;

  return (
    <p className="terminal-command" style={style}>
      <span className="terminal-prompt">{path}</span>{" "}
      <span className="terminal-symbol">$</span>{" "}
      <span className="terminal-input">{command}</span>
    </p>
  );
}
