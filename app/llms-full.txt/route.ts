import { NextResponse } from "next/server";
import { getAiContentItems } from "@/lib/aiIndex";
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
  const items = getAiContentItems();
  const docs = items.filter((item) => item.kind === "docs");
  const blogPosts = items.filter((item) => item.kind === "blog");

  const lines = [
    "# Echobell",
    "",
    "> Exhaustive markdown URL index for Echobell documentation and blog content.",
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

  return new NextResponse(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
}
