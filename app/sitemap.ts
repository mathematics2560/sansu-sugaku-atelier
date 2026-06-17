import type { MetadataRoute } from "next";

const BASE_URL = "https://sansu-sugaku-atelier.com";

const PATHS = [
  "/",
  "/grade",
  "/grade/high-school",
  "/topics",
  "/prints",
  "/prints/math1",
  "/prints/mathA",
  "/how-to-learn",
  "/faq",
  "/news",
  "/contact",
  "/privacy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
  }));
}
