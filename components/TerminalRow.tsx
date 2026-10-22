import type { ReactNode } from "react";

export default function TerminalRow({
  label,
  description,
  meta,
  className = "",
}: {
  label: ReactNode;
  description: ReactNode;
  meta?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`system-row ${className}`.trim()}>
      <div className="system-row__label">{label}</div>
      <div className="system-row__description">{description}</div>
      <div className="system-row__meta">{meta}</div>
    </div>
  );
}
