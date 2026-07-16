import {
  getBlogPost,
  readRawContentFile,
} from "$lib/server/content";
import { baseUrl } from "$lib/metadata";
import { type Language } from "$lib/i18n";
import type { RequestHandler } from "./$types";

// Served at runtime from the worker: prerendering these would conflict
// (`/raw/en/docs` file vs `/raw/en/docs/*` directory) in the assets output.
export const prerender = false;

const CACHE_CONTROL =
  "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400";

export const GET: RequestHandler = ({ params }) => {
  const lang = params.lang as Language;

  const page = getBlogPost(params.slug, lang);
  if (!page) {
    return new Response("Not Found", { status: 404 });
  }

  const rawFile = readRawContentFile("blog", lang, [params.slug]);
  if (!rawFile) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(rawFile.content, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": CACHE_CONTROL,
      "x-robots-tag": "noindex, follow, noarchive",
      link: `<${new URL(page.url, baseUrl).toString()}>; rel="canonical"`,
    },
  });
};
