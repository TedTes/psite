export default function StatusBadge({
  status,
  className = "",
}: {
  status: string;
  className?: string;
}) {
  const normalized = status.toLowerCase() === "in progress" ? "building" : status.toLowerCase();
  return (
    <span className={`status-badge status-badge--${normalized.replaceAll(" ", "-")} ${className}`.trim()}>
      [{normalized}]
    </span>
  );
}
