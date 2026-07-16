import { getBlogPosts, getDocsPages } from "$lib/server/content";
import { baseUrl } from "$lib/metadata";
import { languages, localizeUrl, i18n } from "$lib/i18n";
import { competitorSlugs } from "$lib/competitor-comparisons";
import type { RequestHandler } from "./$types";

export const prerender = true;

const seoLandingPages = [
  "/pushover-alternative",
  "/ntfy-alternative",
  "/focus-mode-alerts",
  "/server-down-phone-call-alerts",
  "/app-store-connect-review-notifications",
] as const;

const SITE_LAST_MODIFIED = new Date("2026-07-11");

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  alternates?: Record<string, string>;
}

function url(path: string): string {
  return new URL(path, baseUrl).toString();
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

function getLocalizedAlternates(path: string): Record<string, string> {
  const basePath = stripLanguagePrefix(path);
  return {
    "x-default": url(localizeUrl(basePath, i18n.defaultLanguage)),
    ...Object.fromEntries(
      languages.map((lang) => [lang, url(localizeUrl(basePath, lang))])
    ),
  };
}

function createLocalizedEntries(
  path: string,
  metadata: Omit<SitemapEntry, "url" | "alternates">
): SitemapEntry[] {
  const alternates = getLocalizedAlternates(path);
  return languages.map((lang) => ({
    ...metadata,
    url: url(localizeUrl(path, lang)),
    alternates,
  }));
}

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    // Homepage - highest priority
    ...createLocalizedEntries("/", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    }),

    // AI-oriented indexes (non-localized)
    {
      url: url("/llms.txt"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: url("/llms-full.txt"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: url("/ai-index.json"),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 0.7,
    },

    // Main features pages
    ...createLocalizedEntries("/features/webhooks", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...createLocalizedEntries("/features/email-triggers", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...createLocalizedEntries("/features/call-notifications", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...createLocalizedEntries("/features/channels", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    ...createLocalizedEntries("/features/templates", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    ...createLocalizedEntries("/features/comparisons", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    }),
    ...competitorSlugs.flatMap((slug) =>
      createLocalizedEntries(`/features/comparisons/${slug}`, {
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    ),

    // Features index page
    ...createLocalizedEntries("/features", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    }),

    // Use-case landing page
    ...createLocalizedEntries("/use-cases", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.84,
    }),
    ...seoLandingPages.flatMap((path) =>
      createLocalizedEntries(path, {
        lastModified: SITE_LAST_MODIFIED,
        changeFrequency: "monthly",
        priority: 0.86,
      })
    ),

    // AI reading guide page
    ...createLocalizedEntries("/ai", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.75,
    }),

    // Documentation and blog
    ...createLocalizedEntries("/docs", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
    ...createLocalizedEntries("/blog", {
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    }),

    // Legal pages
    ...createLocalizedEntries("/privacy", {
      lastModified: new Date("2025-03-25"),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
    ...createLocalizedEntries("/terms", {
      lastModified: new Date("2025-03-25"),
      changeFrequency: "yearly",
      priority: 0.5,
    }),

    // Dynamic pages from content
    ...languages.flatMap((lang) =>
      getDocsPages(lang).map((page) => ({
        url: url(page.url),
        lastModified: page.data.lastModified
          ? new Date(page.data.lastModified)
          : SITE_LAST_MODIFIED,
        changeFrequency: "weekly" as const,
        priority: 0.6,
        alternates: getLocalizedAlternates(page.url),
      }))
    ),
    ...languages.flatMap((lang) =>
      getBlogPosts(lang).map((page) => ({
        url: url(page.url),
        lastModified: page.data.lastModified
          ? new Date(page.data.lastModified)
          : new Date(page.data.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: getLocalizedAlternates(page.url),
      }))
    ),
  ];

  const deduped = new Map<string, SitemapEntry>();
  for (const entry of entries) {
    if (!deduped.has(entry.url)) {
      deduped.set(entry.url, entry);
    }
  }
  return [...deduped.values()];
}

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const GET: RequestHandler = () => {
  const entries = buildEntries();

  const body = entries
    .map((entry) => {
      const alternates = Object.entries(entry.alternates ?? {})
        .map(
          ([hreflang, href]) =>
            `<xhtml:link rel="alternate" hreflang="${escape(hreflang)}" href="${escape(href)}"/>`
        )
        .join("");
      return `<url><loc>${escape(entry.url)}</loc>${alternates}<lastmod>${entry.lastModified.toISOString()}</lastmod><changefreq>${entry.changeFrequency}</changefreq><priority>${entry.priority}</priority></url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
};
