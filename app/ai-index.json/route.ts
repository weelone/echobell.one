import { NextResponse } from "next/server";
import { getAiContentItems, getLocalizedDocsRoots } from "@/lib/aiIndex";
import { languages } from "@/lib/i18n";
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

  return NextResponse.json(
    {
      site: {
        name: "Echobell",
        url: toAbsoluteUrl("/"),
        description:
          "Echobell converts webhooks and emails into iOS notifications and phone call alerts.",
      },
      generatedAt: new Date().toISOString(),
      preferredLanguage: "en",
      supportedLanguages: languages,
      entryPoints: {
        llms: toAbsoluteUrl("/llms.txt"),
        llmsFull: toAbsoluteUrl("/llms-full.txt"),
        aiGuide: toAbsoluteUrl("/en/ai"),
        localizedDocsRoots: getLocalizedDocsRoots(),
      },
      counts: {
        docs: docs.length,
        blog: blogPosts.length,
      },
      docs,
      blog: blogPosts,
    },
    {
      headers: {
        "cache-control": CACHE_CONTROL,
      },
    }
  );
}
