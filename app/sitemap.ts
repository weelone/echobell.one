import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";
import { source, blog } from "@/lib/source";
import { languages, localizeUrl } from "@/lib/i18n";

export const runtime = "edge";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    ...getLocalizedUrls("/").map(
      (item) =>
        ({
          url: url(item),
          changeFrequency: "monthly",
          priority: 1,
        } as const)
    ),
    ...getLocalizedUrls("/docs").map(
      (item) =>
        ({
          url: url(item),
          changeFrequency: "weekly",
          priority: 0.8,
        } as const)
    ),
    ...getLocalizedUrls("/blog").map(
      (item) =>
        ({
          url: url(item),
          changeFrequency: "weekly",
          priority: 0.8,
        } as const)
    ),
    ...languages.flatMap((lang) => {
      return source.getPages(lang).map((page) => {
        const lastModified = page.data.lastModified;
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : undefined,
          changeFrequency: "weekly",
          priority: 0.5,
        } as MetadataRoute.Sitemap[number];
      });
    }),
    ...languages.flatMap((lang) => {
      return blog.getPages(lang).map((page) => {
        const lastModified = page.data.lastModified;
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : undefined,
          changeFrequency: "weekly",
          priority: 0.5,
        } as MetadataRoute.Sitemap[number];
      });
    }),
  ];
}

function getLocalizedUrls(url: string): string[] {
  return languages.map((lang) => localizeUrl(url, lang));
}
