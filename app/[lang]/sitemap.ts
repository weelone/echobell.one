import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";
import { source, blog } from "@/lib/source";
import { languages } from "@/lib/i18n";

export const runtime = "edge";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/zh"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/docs"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: url("zh/docs"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: url("/blog"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: url("zh/blog"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
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
