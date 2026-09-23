import type { Metadata } from "next";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated portfolio of Agentic AI, computer vision, data engineering, financial AI, geospatial, and enterprise-architecture projects out of 198+ public GitHub repositories.",
};

export default function ProjectsPage() {
  return <ProjectsExplorer />;
}
