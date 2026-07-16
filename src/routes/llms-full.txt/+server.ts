import { getAiContentItems } from "$lib/server/ai-index";
import { toAbsoluteUrl } from "$lib/metadata";
import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
import type { RequestHandler } from "./$types";

export const prerender = true;

const CACHE_CONTROL =
  "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400";

function formatFileListItem(
  label: string,
  url: string,
  note?: string
): string {
  return note ? `- [${label}](${url}): ${note}` : `- [${label}](${url})`;
}

export const GET: RequestHandler = () => {
  const items = getAiContentItems();
  const docs = items.filter((item) => item.kind === "docs");
  const blogPosts = items.filter((item) => item.kind === "blog");
  const appStoreLink = getAppStoreLink(["llms-full", "app-store"]);
  const googlePlayLink = getGooglePlayLink();

  const lines = [
    "# Echobell",
    "",
    "> Exhaustive markdown URL index for Echobell documentation and blog content. Echobell turns webhooks and emails into mobile push notifications, time-sensitive alerts, and phone call alerts.",
    "",
    "Use this file when you need broad coverage instead of the curated `/llms.txt` subset.",
    "",
    `Total docs pages: ${docs.length}.`,
    `Total blog pages: ${blogPosts.length}.`,
    "",
    "## Entry Points",
    formatFileListItem(
      "Summary index",
      toAbsoluteUrl("/llms.txt"),
      "Curated starting point with the highest-value docs."
    ),
    formatFileListItem(
      "JSON index",
      toAbsoluteUrl("/ai-index.json"),
      "Structured manifest for programmatic ingestion."
    ),
    formatFileListItem("App Store", appStoreLink, "Official iOS app listing."),
    formatFileListItem(
      "Google Play",
      googlePlayLink,
      "Official Android app listing."
    ),
    "",
    "## Docs",
    ...docs.map((item) =>
      formatFileListItem(
        `${item.lang.toUpperCase()} ${item.title}`,
        item.rawMarkdownUrl,
        item.description
      )
    ),
    "",
    "## Blog",
    ...blogPosts.map((item) =>
      formatFileListItem(
        `${item.lang.toUpperCase()} ${item.title}`,
        item.rawMarkdownUrl,
        item.description
      )
    ),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
};
