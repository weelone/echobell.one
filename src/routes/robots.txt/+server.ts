import type { RequestHandler } from "./$types";

export const prerender = true;

const subscriptionDisallows = [
  "/subscription/",
  "/en/subscription/",
  "/zh/subscription/",
  "/es/subscription/",
  "/fr/subscription/",
  "/ja/subscription/",
  "/de/subscription/",
];

interface RobotsRule {
  userAgent: string[];
  allow: string[];
  disallow: string[];
}

const rules: RobotsRule[] = [
  {
    userAgent: ["*"],
    allow: ["/", "/api/og", "/_app/immutable/"],
    disallow: ["/api/", "/admin/", "/private/", ...subscriptionDisallows],
  },
  {
    userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot"],
    allow: ["/", "/_app/immutable/"],
    disallow: ["/api/", "/private/", ...subscriptionDisallows],
  },
  {
    userAgent: ["GPTBot"],
    allow: ["/", "/_app/immutable/"],
    disallow: ["/api/", "/private/", ...subscriptionDisallows],
  },
  {
    userAgent: ["Google-Extended"],
    allow: ["/"],
    disallow: [],
  },
];

export const GET: RequestHandler = () => {
  const blocks = rules.map((rule) => {
    const lines = [
      ...rule.userAgent.map((agent) => `User-Agent: ${agent}`),
      ...rule.allow.map((path) => `Allow: ${path}`),
      ...rule.disallow.map((path) => `Disallow: ${path}`),
    ];
    return lines.join("\n");
  });

  const body = `${blocks.join("\n\n")}\n\nSitemap: https://echobell.one/sitemap.xml\n\nHost: https://echobell.one\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};
