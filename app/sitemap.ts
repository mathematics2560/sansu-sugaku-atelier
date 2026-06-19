import type { MetadataRoute } from "next";

const BASE_URL = "https://sansu-sugaku-atelier.com";

const PATHS = [
  "/",
  "/grade",
  "/grade/high-school",
  "/grade/middle",
  "/topics",
  "/prints",
  "/prints/math1",
  "/prints/mathA",
  "/prints/math2",
  "/prints/chu1",
  "/how-to-learn",
  "/faq",
  "/news",
  "/about",
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
