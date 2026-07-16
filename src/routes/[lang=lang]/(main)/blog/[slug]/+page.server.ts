import { error } from "@sveltejs/kit";
import {
  getBlogPost,
  getBlogPosts,
  getRawMarkdownPath,
} from "$lib/server/content";
import { renderMdx } from "$lib/server/mdx";
import { createBlogMeta, buildOgImageUrl, toAbsoluteUrl } from "$lib/metadata";
import { applyTitleTemplate } from "$lib/server/meta-builders";
import { languages, localizeUrl, i18n, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () => {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of languages) {
    for (const post of getBlogPosts(lang)) {
      params.push({ lang, slug: post.slugs[0] });
    }
  }
  return params;
};

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

/**
 * Picks the most relevant other blog posts for internal linking.
 * Scores by shared-tag overlap first, then falls back to recency.
 */
function getRelatedPosts(
  lang: Language,
  currentSlug: string,
  tags: string[] | undefined,
  limit = 3
) {
  const currentTags = new Set((tags ?? []).map(normalizeTag));

  return getBlogPosts(lang)
    .filter((post) => post.slugs[0] !== currentSlug)
    .map((post) => {
      const postTags = (post.data.tags ?? []).map(normalizeTag);
      const shared = postTags.filter((tag) => currentTags.has(tag)).length;
      return { post, shared, time: new Date(post.data.date).getTime() };
    })
    .sort((a, b) => {
      if (b.shared !== a.shared) return b.shared - a.shared;
      return b.time - a.time;
    })
    .slice(0, limit)
    .map(({ post }) => ({
      url: post.url,
      title: post.data.title,
      description: post.data.description,
      date: post.data.date.toISOString(),
    }));
}

export const load: PageServerLoad = async ({ params }) => {
  const lang = params.lang as Language;
  const post = getBlogPost(params.slug, lang);
  if (!post) error(404, "Not Found");

  const { html, toc } = await renderMdx(post.body, {
    lang,
    cacheKey: post.file,
    stripTitleHeading: true,
  });

  const canonical = localizeUrl(`/blog/${params.slug}`, lang);
  const publishedTime = new Date(post.data.date).toISOString();
  const modifiedTime = new Date(
    post.data.lastModified ?? post.data.date
  ).toISOString();

  const ogImageUrl =
    post.data.image ||
    buildOgImageUrl({
      title: post.data.title,
      description: post.data.description,
      type: "blog",
      lang,
    });

  const meta = {
    ...createBlogMeta({
      title: applyTitleTemplate(post.data.title, lang),
      description: post.data.description ?? post.data.title,
      canonical,
      publishedTime,
      modifiedTime,
      authors: post.data.author ? [post.data.author] : [],
      tags: post.data.tags,
      image: ogImageUrl,
      url: toAbsoluteUrl(canonical),
    }),
    languageAlternates: {
      "x-default": localizeUrl(`/blog/${params.slug}`, i18n.defaultLanguage),
      ...Object.fromEntries(
        languages.map((l) => [l, localizeUrl(`/blog/${params.slug}`, l)])
      ),
    },
    typeAlternates: {
      "text/markdown": getRawMarkdownPath(post.url),
      "application/rss+xml": localizeUrl("/blog/rss.xml", lang),
      "application/atom+xml": localizeUrl("/blog/atom.xml", lang),
    },
  };

  return {
    lang,
    meta,
    slug: params.slug,
    title: post.data.title,
    breadcrumbLabel: post.data.title,
    description: post.data.description,
    author: post.data.author,
    date: publishedTime,
    lastModified: modifiedTime,
    image: post.data.image,
    tags: post.data.tags,
    html,
    toc,
    related: getRelatedPosts(lang, params.slug, post.data.tags),
    canonical: toAbsoluteUrl(canonical),
  };
};
