import { NextResponse } from "next/server";
import {
  getAiLatestBlogPosts,
  getAiPriorityDocs,
  getLocalizedDocsRoots,
} from "@/lib/aiIndex";
import { baseUrl } from "@/lib/metadata";

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
    "> Echobell converts webhooks and emails into iOS notifications and phone call alerts.",
    "",
    "Use this file as the curated starting point for Echobell documentation at inference time.",
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
    formatFileListItem("Support", "mailto:echobell@weelone.com"),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
}
