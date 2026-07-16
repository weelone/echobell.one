import { error } from "@sveltejs/kit";
import {
  getDocsPage,
  getDocsPages,
  getDocsSequence,
  getRawMarkdownPath,
} from "$lib/server/content";
import { renderMdx } from "$lib/server/mdx";
import { applyTitleTemplate } from "$lib/server/meta-builders";
import { createPageMeta, buildOgImageUrl, toAbsoluteUrl } from "$lib/metadata";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () => {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of languages) {
    for (const page of getDocsPages(lang)) {
      params.push({ lang, slug: page.slugs.join("/") });
    }
  }
  return params;
};

export const load: PageServerLoad = async ({ params }) => {
  const lang = params.lang as Language;
  const slugs = params.slug ? params.slug.split("/").filter(Boolean) : [];
  const page = getDocsPage(slugs, lang);
  if (!page) error(404, "Not Found");

  const { html, toc } = await renderMdx(page.body, {
    lang,
    cacheKey: page.file,
  });

  const sequence = getDocsSequence(lang);
  const slugPath = slugs.length ? `/docs/${slugs.join("/")}` : "/docs";
  const index = sequence.findIndex(
    (item) => item.slugs.join("/") === slugs.join("/")
  );
  const previous = index > 0 ? sequence[index - 1] : undefined;
  const next =
    index >= 0 && index < sequence.length - 1 ? sequence[index + 1] : undefined;

  const canonical = page.url;
  const ogImageUrl = buildOgImageUrl({
    title: page.data.title ?? "",
    description: page.data.description,
    type: "docs",
    lang,
  });

  const meta = createPageMeta({
    title: applyTitleTemplate(page.data.title, lang),
    description: page.data.description,
    canonical,
    languageAlternates: {
      "x-default": `/en${slugPath}`,
      ...Object.fromEntries(languages.map((l) => [l, `/${l}${slugPath}`])),
    },
    typeAlternates: {
      "text/markdown": getRawMarkdownPath(page.url),
    },
    ogUrl: toAbsoluteUrl(canonical),
    ogImages: [
      { url: ogImageUrl, width: 1200, height: 630, alt: page.data.title },
    ],
    twitterImages: [{ url: ogImageUrl, alt: page.data.title }],
  });

  return {
    lang,
    meta,
    title: page.data.title,
    description: page.data.description,
    html,
    toc,
    previous: previous ? { name: previous.name, url: previous.url } : undefined,
    next: next ? { name: next.name, url: next.url } : undefined,
  };
};
