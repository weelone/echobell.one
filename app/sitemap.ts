import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";
import { source, blog } from "@/lib/source";
import { languages, localizeUrl } from "@/lib/i18n";
import { competitorSlugs } from "@/lib/competitor-comparisons";

// Revalidate daily to keep lastModified stable but fresh
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    // Homepage - highest priority
    ...getLocalizedUrls("/").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 1,
        } as const)
    ),

    // Main features pages
    ...getLocalizedUrls("/features/webhooks").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.9,
        } as const)
    ),
    ...getLocalizedUrls("/features/email-triggers").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.9,
        } as const)
    ),
    ...getLocalizedUrls("/features/call-notifications").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.9,
        } as const)
    ),
    ...getLocalizedUrls("/features/channels").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        } as const)
    ),
    ...getLocalizedUrls("/features/templates").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        } as const)
    ),
    ...getLocalizedUrls("/features/comparisons").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.85,
        } as const)
    ),
    ...competitorSlugs.flatMap((slug) =>
      getLocalizedUrls(`/features/comparisons/${slug}`).map(
        (item) =>
          ({
            url: url(item),
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
          } as const)
      )
    ),

    // Features index page
    ...getLocalizedUrls("/features").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.85,
        } as const)
    ),

    // Documentation and blog
    ...getLocalizedUrls("/docs").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        } as const)
    ),
    ...getLocalizedUrls("/blog").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        } as const)
    ),

    // Legal pages
    ...getLocalizedUrls("/privacy").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date("2025-03-25"),
          changeFrequency: "yearly",
          priority: 0.5,
        } as const)
    ),
    ...getLocalizedUrls("/terms").map(
      (item) =>
        ({
          url: url(item),
          lastModified: new Date("2025-03-25"),
          changeFrequency: "yearly",
          priority: 0.5,
        } as const)
    ),

    // Dynamic pages from CMS
    ...languages.flatMap((lang) => {
      return source.getPages(lang).map((page) => {
        const lastModified = page.data.lastModified;
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        } as MetadataRoute.Sitemap[number];
      });
    }),
    ...languages.flatMap((lang) => {
      return blog.getPages(lang).map((page) => {
        const lastModified = page.data.lastModified;
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        } as MetadataRoute.Sitemap[number];
      });
    }),
  ];
}

function getLocalizedUrls(url: string): string[] {
  return languages.map((lang) => localizeUrl(url, lang));
}
