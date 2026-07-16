import { getBlogPostsByDate } from "$lib/server/content";
import { baseUrl } from "$lib/metadata";
import { languages, localizeUrl, type Language } from "$lib/i18n";
import type { EntryGenerator, RequestHandler } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

function escape(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const GET: RequestHandler = ({ params }) => {
  const lang = params.lang as Language;
  const pages = getBlogPostsByDate(lang);

  const feedUrl = new URL(localizeUrl("/blog/rss.xml", lang), baseUrl).toString();
  const channelLink = new URL(localizeUrl("/blog", lang), baseUrl).toString();

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
      ${data.author ? `<author>${escape(data.author)}</author>` : ""}
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

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
