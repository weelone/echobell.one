import { NextResponse } from "next/server";
import { getAiContentItems } from "@/lib/aiIndex";
import { baseUrl } from "@/lib/metadata";

const CACHE_CONTROL =
  "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400";

export const revalidate = 86400;

function toAbsoluteUrl(path: string): string {
  return new URL(path, baseUrl).toString();
}

export async function GET(): Promise<NextResponse> {
  const items = getAiContentItems();
  const docs = items.filter((item) => item.kind === "docs");
  const blogPosts = items.filter((item) => item.kind === "blog");

  const lines = [
    "# Echobell Full LLM Index",
    "",
    `- Generated from: ${toAbsoluteUrl("/llms-full.txt")}`,
    `- Summary index: ${toAbsoluteUrl("/llms.txt")}`,
    `- JSON index: ${toAbsoluteUrl("/ai-index.json")}`,
    "",
    `- Total docs pages: ${docs.length}`,
    `- Total blog pages: ${blogPosts.length}`,
    "",
    "## Docs",
    ...docs.map((item) => `- [${item.lang}] ${item.title}: ${item.url}`),
    "",
    "## Blog",
    ...blogPosts.map((item) => `- [${item.lang}] ${item.title}: ${item.url}`),
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
}
