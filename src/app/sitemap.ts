import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE_URL = "https://animationbahrain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "services/2d-animation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/3d-animation", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/brand-films", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/motion-graphics", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/explainer-videos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/product-films", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "industries/formula-1", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "industries/telecom", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "industries/banking", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "industries/government", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "blog", priority: 0.6, changeFrequency: "weekly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      const localePrefix = locale === "en" ? "" : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${localePrefix}/${page.path}`.replace(/\/+$/, "") || BASE_URL,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}