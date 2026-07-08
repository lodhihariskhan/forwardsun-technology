import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/services", "/products", "/about", "/contact", "/privacy", "/terms"];
const stableLastModified = new Date("2026-07-08T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: stableLastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
