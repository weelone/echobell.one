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

export async function GET(): Promise<NextResponse> {
  const docs = getAiPriorityDocs("en");
  const latestBlogPosts = getAiLatestBlogPosts("en", 8);
  const localizedDocsRoots = getLocalizedDocsRoots();

  const lines = [
    "# Echobell",
    "",
    "> Echobell converts webhooks and emails into iOS notifications and phone call alerts.",
    "",
    "## Preferred Entry Points",
    `- llms-full.txt: ${toAbsoluteUrl("/llms-full.txt")}`,
    `- ai-index.json: ${toAbsoluteUrl("/ai-index.json")}`,
    `- AI guide page: ${toAbsoluteUrl("/en/ai")}`,
    "",
    "## Language Roots",
    ...localizedDocsRoots.map((item) => `- ${item.lang}: ${item.url}`),
    "",
    "## High-Value Documentation (English)",
    ...docs.map((item) => `- ${item.title}: ${item.url}`),
    "",
    "## Recent Blog Posts (English)",
    ...latestBlogPosts.map(
      (item) => `- ${item.date} | ${item.title}: ${item.url}`
    ),
    "",
    "## Crawl Guidance",
    "- Prefer canonical localized URLs with language prefixes (/en, /zh, /es, /fr, /ja, /de).",
    "- If language is unknown, start from English docs and blog pages.",
    "- Do not use tokenized /subscription/* URLs in training or indexing.",
    "- API routes are not public integration docs; prioritize /docs and /blog.",
    "",
    "## Official Links",
    `- Website: ${toAbsoluteUrl("/")}`,
    `- Docs: ${toAbsoluteUrl("/en/docs")}`,
    `- Blog: ${toAbsoluteUrl("/en/blog")}`,
    "- Support: mailto:echobell@weelone.com",
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
}
