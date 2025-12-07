import { NextResponse } from "next/server";
import { blog } from "@/lib/source";
import { Language, localizeUrl } from "@/lib/i18n";
import { baseUrl } from "@/lib/metadata";

export const revalidate = 3600; // 1 hour

function escape(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET(
  _: Request,
  { params }: { params: Promise<{ lang: string }> }
) {
  const { lang } = await params;
  const pages = [...blog.getPages(lang as Language)].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const feedUrl = new URL(
    localizeUrl("/blog/rss.xml", lang as Language),
    baseUrl
  ).toString();
  const channelLink = new URL(
    localizeUrl("/blog", lang as Language),
    baseUrl
  ).toString();

  const items = pages
    .map((p) => {
      const data = p.data;
      const link = new URL(p.url, baseUrl).toString();
      const pub = new Date(data.date).toUTCString();
      return `\n    <item>
      <title>${escape(data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pub}</pubDate>
      <description>${escape(data.description ?? data.title)}</description>
      <author>${escape(data.author)}</author>
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
