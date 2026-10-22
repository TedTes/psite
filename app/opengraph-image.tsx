import { ImageResponse } from "next/og";

export const alt = "Tedros Tesfu — software engineer building products end to end";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0c0d", color: "#e4ddd2", padding: "72px", fontFamily: "monospace" }}>
      <div style={{ display: "flex", color: "#8bcf72", fontSize: 30 }}>~/tedtes $ whoami</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600 }}>Tedros Tesfu</div>
        <div style={{ display: "flex", maxWidth: 940, color: "#c7bfb2", fontSize: 38, lineHeight: 1.35 }}>Software engineer. I build products end to end: design, code, launch.</div>
      </div>
      <div style={{ display: "flex", color: "#d7b73e", fontSize: 28 }}>currently building scoutlead.io</div>
    </div>,
    size,
  );
}
