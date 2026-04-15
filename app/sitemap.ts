import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/metadata";
import { source, blog } from "@/lib/source";
import { i18n, languages, localizeUrl } from "@/lib/i18n";
import { competitorSlugs } from "@/lib/competitor-comparisons";

const seoLandingPages = [
  "/pushover-alternative",
  "/ntfy-alternative",
  "/focus-mode-alerts",
  "/server-down-phone-call-alerts",
  "/app-store-connect-review-notifications",
] as const;

// Revalidate daily to keep lastModified stable but fresh
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();
  const generatedAt = new Date();
  const entries: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    ...createLocalizedEntries(url, "/", {
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 1,
    }),

    // AI-oriented indexes (non-localized)
    {
      url: url("/llms.txt"),
      lastModified: generatedAt,
      changeFrequency: "daily",
      priority: 0.8,
    } as const,
    {
      url: url("/llms-full.txt"),
      lastModified: generatedAt,
      changeFrequency: "daily",
      priority: 0.7,
    } as const,
    {
      url: url("/ai-index.json"),
      lastModified: generatedAt,
      changeFrequency: "daily",
      priority: 0.7,
    } as const,

    // Main features pages
    ...createLocalizedEntries(url, "/features/webhooks", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...createLocalizedEntries(url, "/features/email-triggers", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...createLocalizedEntries(url, "/features/call-notifications", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...createLocalizedEntries(url, "/features/channels", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    ...createLocalizedEntries(url, "/features/templates", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    ...createLocalizedEntries(url, "/features/comparisons", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    }),
    ...competitorSlugs.flatMap((slug) =>
      createLocalizedEntries(url, `/features/comparisons/${slug}`, {
        lastModified: generatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    ),

    // Features index page
    ...createLocalizedEntries(url, "/features", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    }),

    // Use-case landing page
    ...createLocalizedEntries(url, "/use-cases", {
      lastModified: generatedAt,
      changeFrequency: "monthly",
      priority: 0.84,
    }),
    ...seoLandingPages.flatMap((path) =>
      createLocalizedEntries(url, path, {
        lastModified: generatedAt,
        changeFrequency: "monthly",
        priority: 0.86,
      })
    ),

    // AI reading guide page
    ...createLocalizedEntries(url, "/ai", {
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.75,
    }),

    // Documentation and blog
    ...createLocalizedEntries(url, "/docs", {
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
    ...createLocalizedEntries(url, "/blog", {
      lastModified: generatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    }),

    // Legal pages
    ...createLocalizedEntries(url, "/privacy", {
      lastModified: new Date("2025-03-25"),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
    ...createLocalizedEntries(url, "/terms", {
      lastModified: new Date("2025-03-25"),
      changeFrequency: "yearly",
      priority: 0.5,
    }),

    // Dynamic pages from CMS
    ...languages.flatMap((lang) => {
      return source.getPages(lang).map((page) => {
        const lastModified = page.data.lastModified;
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
          alternates: getLocalizedAlternates(url, page.url),
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
          alternates: getLocalizedAlternates(url, page.url),
        } as MetadataRoute.Sitemap[number];
      });
    }),
  ];

  const deduped = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of entries) {
    if (!deduped.has(entry.url)) {
      deduped.set(entry.url, entry);
    }
  }

  return [...deduped.values()];
}

function getLocalizedUrls(url: string): string[] {
  return languages.map((lang) => localizeUrl(url, lang));
}

function createLocalizedEntries(
  toAbsoluteUrl: (path: string) => string,
  path: string,
  metadata: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">
): MetadataRoute.Sitemap {
  const alternates = getLocalizedAlternates(toAbsoluteUrl, path);

  return getLocalizedUrls(path).map((localizedPath) => ({
    ...metadata,
    url: toAbsoluteUrl(localizedPath),
    alternates,
  }));
}

function getLocalizedAlternates(
  toAbsoluteUrl: (path: string) => string,
  path: string
): NonNullable<MetadataRoute.Sitemap[number]["alternates"]> {
  const basePath = stripLanguagePrefix(path);

  return {
    languages: {
      "x-default": toAbsoluteUrl(localizeUrl(basePath, i18n.defaultLanguage)),
      ...Object.fromEntries(
        languages.map((lang) => [lang, toAbsoluteUrl(localizeUrl(basePath, lang))])
      ),
    },
  };
}

function stripLanguagePrefix(path: string): string {
  const normalized =
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  for (const lang of languages) {
    const prefix = `/${lang}`;
    if (normalized === prefix) return "/";
    if (normalized.startsWith(`${prefix}/`)) {
      return normalized.slice(prefix.length) || "/";
    }
  }

  return normalized;
}
