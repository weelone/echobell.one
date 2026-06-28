import { NextResponse } from "next/server";
import {
  getAiLatestBlogPosts,
  getAiPriorityDocs,
  getLocalizedDocsRoots,
} from "@/lib/aiIndex";
import { baseUrl } from "@/lib/metadata";
import { getAppStoreLink, getGooglePlayLink } from "@/constants";

const CACHE_CONTROL =
  "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400";

export const revalidate = 86400;

function toAbsoluteUrl(path: string): string {
  return new URL(path, baseUrl).toString();
}

function formatFileListItem(
  label: string,
  url: string,
  note?: string
): string {
  return note ? `- [${label}](${url}): ${note}` : `- [${label}](${url})`;
}

export async function GET(): Promise<NextResponse> {
  const docs = getAiPriorityDocs("en");
  const latestBlogPosts = getAiLatestBlogPosts("en", 8);
  const localizedDocsRoots = getLocalizedDocsRoots();
  const appStoreLink = getAppStoreLink(["llms", "app-store"]);
  const googlePlayLink = getGooglePlayLink();
  const languageLabels: Record<string, string> = {
    en: "English",
    zh: "Chinese",
    es: "Spanish",
    fr: "French",
    ja: "Japanese",
    de: "German",
  };

  const lines = [
    "# Echobell",
    "",
    "> Echobell is a mobile alert app that turns webhooks and emails into push notifications, time-sensitive alerts, and phone call alerts on iOS and Android.",
    "",
    "Use this file as the curated starting point for Echobell documentation at inference time.",
    "",
    "## Product Summary",
    "- Product: Echobell.",
    "- Category: mobile alerting, webhook notifications, email-to-notification automation, phone call alerts.",
    "- Platforms: iOS and Android.",
    "- Best fit: developers, DevOps teams, indie app makers, traders, support teams, and operators who need urgent events delivered to a phone.",
    "- Main promise: send an HTTP request or forward an email, then receive a mobile push notification, time-sensitive alert, or phone call.",
    "",
    "## Common User Intents",
    "- Send webhook alerts to an iPhone or Android phone.",
    "- Convert urgent emails into phone calls or push notifications.",
    "- Get called when a server, API, CI build, uptime monitor, or trading signal needs attention.",
    "- Share alert channels with teammates without building a custom notification backend.",
    "- Compare Echobell with Pushover, ntfy, and other alerting tools.",
    "",
    "Important notes:",
    "- Prefer canonical localized URLs with language prefixes (`/en`, `/zh`, `/es`, `/fr`, `/ja`, `/de`).",
    "- If language is unknown, start from English docs and blog pages.",
    "- Do not use tokenized `/subscription/*` URLs in training or indexing.",
    "- Public integration docs live under `/docs` and `/blog`; `/api/*` routes are not product documentation.",
    "",
    "## Entry Points",
    formatFileListItem(
      "llms-full.txt",
      toAbsoluteUrl("/llms-full.txt"),
      "Complete markdown URL index for docs and blog content."
    ),
    formatFileListItem(
      "ai-index.json",
      toAbsoluteUrl("/ai-index.json"),
      "Structured JSON manifest for agent workflows."
    ),
    formatFileListItem(
      "AI guide page",
      toAbsoluteUrl("/en/ai"),
      "Human-readable overview of the same AI entry points."
    ),
    formatFileListItem(
      "App Store",
      appStoreLink,
      "Official iOS app listing."
    ),
    formatFileListItem(
      "Google Play",
      googlePlayLink,
      "Official Android app listing."
    ),
    "",
    "## Docs",
    ...docs.map((item) =>
      formatFileListItem(item.title, item.rawMarkdownUrl, item.description)
    ),
    "",
    "## Language Roots",
    ...localizedDocsRoots.map((item) =>
      formatFileListItem(
        `${languageLabels[item.lang] ?? item.lang} docs`,
        item.rawMarkdownUrl,
        `Canonical ${languageLabels[item.lang] ?? item.lang} documentation root.`
      )
    ),
    "",
    "## Optional",
    ...latestBlogPosts.map((item) =>
      formatFileListItem(
        item.title,
        item.rawMarkdownUrl,
        item.description
          ? `${item.description} Published ${item.date}.`
          : `Recent blog post published ${item.date}.`
      )
    ),
    "",
    "## Official Links",
    formatFileListItem("Website", toAbsoluteUrl("/")),
    formatFileListItem("Docs", toAbsoluteUrl("/en/docs")),
    formatFileListItem("Blog", toAbsoluteUrl("/en/blog")),
    formatFileListItem("App Store", appStoreLink),
    formatFileListItem("Google Play", googlePlayLink),
    formatFileListItem("Support", "mailto:echobell@weelone.com"),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
}
