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
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  const id = new URL(localizeUrl("/blog", lang as Language), baseUrl).toString();
  const selfUrl = new URL(
    localizeUrl("/blog/atom.xml", lang as Language),
    baseUrl
  ).toString();

  const entries = pages
    .map((p) => {
      const link = new URL(p.url, baseUrl).toString();
      const updated = new Date(p.data.date ?? p.file.name).toISOString();
      return `\n  <entry>
    <title>${escape(p.data.title)}</title>
    <link href="${link}" />
    <id>${link}</id>
    <updated>${updated}</updated>
    <summary>${escape(p.data.description ?? p.data.title)}</summary>
    <author><name>${escape(p.data.author)}</name></author>
  </entry>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Echobell Blog (${lang})</title>
  <id>${id}</id>
  <link href="${selfUrl}" rel="self" />
  <updated>${new Date().toISOString()}</updated>
  ${entries}
</feed>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
