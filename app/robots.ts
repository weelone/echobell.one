import type { MetadataRoute } from "next";

const subscriptionDisallows = [
  "/subscription/",
  "/en/subscription/",
  "/zh/subscription/",
  "/es/subscription/",
  "/fr/subscription/",
  "/ja/subscription/",
  "/de/subscription/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/og", "/_next/static/", "/_next/image"],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          // Do not index token-based subscription pages (all locales)
          ...subscriptionDisallows,
        ],
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/api/", "/_next/", "/private/", ...subscriptionDisallows],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/_next/static/", "/_next/image"],
        disallow: ["/api/", "/_next/", "/private/", ...subscriptionDisallows],
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
