import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://emmanueloyekanlu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "experience", "projects", "publications", "contact"];
  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
  }));
}
