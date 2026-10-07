import type { Metadata } from "next";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated portfolio of Agentic AI, computer vision, data engineering, financial AI, geospatial, and enterprise-architecture projects out of 250+ public GitHub repositories.",
  alternates: {
    canonical: "/projects/",
  },
};

export default function ProjectsPage() {
  return <ProjectsExplorer />;
}
