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

  const id = new URL(localizeUrl("/blog", lang), baseUrl).toString();
  const selfUrl = new URL(
    localizeUrl("/blog/atom.xml", lang),
    baseUrl
  ).toString();

  const entriesXml = pages
    .map((p) => {
      const data = p.data;
      const link = new URL(p.url, baseUrl).toString();
      const updated = new Date(data.date).toISOString();
      return `\n  <entry>
    <title>${escape(data.title)}</title>
    <link href="${link}" />
    <id>${link}</id>
    <updated>${updated}</updated>
    <summary>${escape(data.description ?? data.title)}</summary>
    ${data.author ? `<author><name>${escape(data.author)}</name></author>` : ""}
  </entry>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Echobell Blog (${lang})</title>
  <id>${id}</id>
  <link href="${selfUrl}" rel="self" />
  <updated>${new Date().toISOString()}</updated>
  ${entriesXml}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
