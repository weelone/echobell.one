import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          // Do not index token-based subscription pages (all locales)
          "/subscription/",
          "/en/subscription/",
          "/zh/subscription/",
          "/es/subscription/",
          "/fr/subscription/",
          "/ja/subscription/",
          "/de/subscription/",
        ],
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/subscription/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/", "/subscription/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://echobell.one/sitemap.xml",
    host: "https://echobell.one",
  };
}
