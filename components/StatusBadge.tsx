import type { ProjectStatus } from "@/data/projects";

const STATUS_COLOR: Record<ProjectStatus, string> = {
  Live: "#22c55e",
  MVP: "#f59e0b",
  "In progress": "#38bdf8",
  Prototype: "#a8a29e",
};

export default function StatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span className={`status-badge ${className}`}>
      <span
        className="status-badge__dot"
        style={{ backgroundColor: STATUS_COLOR[status] }}
      />
      {status}
    </span>
  );
}
