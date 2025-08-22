import { NextResponse } from "next/server";
import { blog } from "@/lib/source";
import { Language, localizeUrl } from "@/lib/i18n";
import { baseUrl } from "@/lib/metadata";

export const runtime = "edge";
export const revalidate = 3600; // 1 hour

function escape(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ lang: Language }> }
) {
  const { lang } = await params;
  const pages = [...blog.getPages(lang)].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  const feedUrl = new URL(
    localizeUrl("/blog/rss.xml", lang),
    baseUrl
  ).toString();
  const channelLink = new URL(localizeUrl("/blog", lang), baseUrl).toString();

  const items = pages
    .map((p) => {
      const link = new URL(p.url, baseUrl).toString();
      const pub = new Date(p.data.date ?? p.file.name).toUTCString();
      return `\n    <item>
      <title>${escape(p.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pub}</pubDate>
      <description>${escape(p.data.description ?? p.data.title)}</description>
      <author>${escape(p.data.author)}</author>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Echobell Blog (${lang})</title>
    <link>${channelLink}</link>
    <description>Latest posts from Echobell</description>
    <language>${lang}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
