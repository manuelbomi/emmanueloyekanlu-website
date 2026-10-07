// Regenerates public/images/og-card.png (1200x630 social share card) from profile data.
// Run with: node scripts/generate-og-image.mjs
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { ImageResponse } from "next/og.js";

const profile = {
  name: "Emmanuel Oyekanlu",
  suffix: "Ph.D.",
  title: "Principal AI Engineer & Enterprise Architect",
  subtitle:
    "AI / Data / Enterprise Systems Architect — Agentic AI, GPU Orchestration & Data Engineering at Scale",
  stats: [
    { value: "94%+", label: "Typical ML model accuracy delivered" },
    { value: "33+", label: "Peer-reviewed publications" },
    { value: "250+", label: "Open-source repositories" },
    { value: "1", label: "US Patent" },
  ],
};

const el = (type, props, ...children) => ({
  type,
  props: { ...props, children: children.length ? children : props?.children },
});

const tree = el(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px",
      background: "linear-gradient(135deg, #061626 0%, #0a2540 60%, #0a1c30 100%)",
      color: "#e8f6f8",
      fontFamily: "sans-serif",
    },
  },
  el(
    "div",
    {
      style: {
        display: "flex",
        fontSize: 28,
        fontWeight: 600,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "#5eead4",
        marginBottom: 28,
      },
    },
    profile.title
  ),
  el(
    "div",
    {
      style: {
        display: "flex",
        fontSize: 72,
        fontWeight: 700,
        color: "#ffffff",
        lineHeight: 1.1,
        marginBottom: 24,
      },
    },
    `${profile.name}, ${profile.suffix}`
  ),
  el(
    "div",
    {
      style: {
        display: "flex",
        fontSize: 30,
        fontWeight: 400,
        color: "#9fc4d4",
        maxWidth: 980,
        lineHeight: 1.4,
      },
    },
    profile.subtitle
  ),
  el(
    "div",
    { style: { display: "flex", marginTop: 48, gap: 48 } },
    ...profile.stats.map((stat) =>
      el(
        "div",
        { style: { display: "flex", flexDirection: "column" } },
        el(
          "div",
          { style: { display: "flex", fontSize: 36, fontWeight: 700, color: "#22d3ee" } },
          stat.value
        ),
        el(
          "div",
          { style: { display: "flex", fontSize: 18, color: "#9fc4d4", maxWidth: 220 } },
          stat.label
        )
      )
    )
  )
);

const response = new ImageResponse(tree, { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "images",
  "og-card.png"
);
await writeFile(outPath, buffer);
console.log(`Wrote ${outPath} (${buffer.length} bytes)`);
