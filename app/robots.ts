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
          "/zh/subscription/",
          "/es/subscription/",
          "/fr/subscription/",
          "/ja/subscription/",
          "/de/subscription/",
        ],
      },
    ],
    sitemap: "https://echobell.one/sitemap.xml",
    host: "https://echobell.one",
  };
}
