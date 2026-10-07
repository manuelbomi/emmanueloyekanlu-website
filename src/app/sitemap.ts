import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const siteUrl = "https://emmanueloyekanlu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "experience", "projects", "publications", "contact"];
  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}/${route}${route ? "/" : ""}`,
    lastModified: new Date(),
  }));
  const projectEntries = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
  }));
  return [...staticEntries, ...projectEntries];
}
