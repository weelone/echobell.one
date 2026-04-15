import { NextResponse } from "next/server";
import { Language, languages } from "@/lib/i18n";
import { readRawContentFile } from "@/lib/rawContent";
import { source } from "@/lib/source";
import { baseUrl } from "@/lib/metadata";

const CACHE_CONTROL =
  "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400";

export const revalidate = 86400;

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ lang: string; slug?: string[] }>;
  }
): Promise<NextResponse> {
  const { lang, slug } = await params;
  if (!languages.includes(lang as Language)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const language = lang as Language;
  const page = source.getPage(slug, language);

  if (!page) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const rawFile = await readRawContentFile("docs", language, slug);

  if (!rawFile) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(rawFile.content, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": CACHE_CONTROL,
      "x-robots-tag": "noindex, follow, noarchive",
      link: `<${new URL(page.url, baseUrl).toString()}>; rel="canonical"`,
    },
  });
}
