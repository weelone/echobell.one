import { getBlogPostsByDate } from "$lib/server/content";
import { createPageMeta, buildOgImageUrl, toAbsoluteUrl } from "$lib/metadata";
import { applyTitleTemplate } from "$lib/server/meta-builders";
import { languages, localizeUrl, uiDictionary, i18n, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const t = uiDictionary[lang].blog;

  const posts = getBlogPostsByDate(lang).map((post) => ({
    url: post.url,
    title: post.data.title,
    description: post.data.description,
    date: post.data.date.toISOString(),
  }));

  const ogImageUrl = buildOgImageUrl({
    title: t.title,
    description: t.description,
    type: "blog",
    lang,
  });

  const meta = createPageMeta({
    title: applyTitleTemplate(t.title, lang),
    description: t.description,
    canonical: localizeUrl("/blog", lang),
    languageAlternates: {
      "x-default": localizeUrl("/blog", i18n.defaultLanguage),
      ...Object.fromEntries(languages.map((l) => [l, localizeUrl("/blog", l)])),
    },
    typeAlternates: {
      "application/rss+xml": localizeUrl("/blog/rss.xml", lang),
      "application/atom+xml": localizeUrl("/blog/atom.xml", lang),
    },
    ogUrl: toAbsoluteUrl(localizeUrl("/blog", lang)),
    ogImages: [{ url: ogImageUrl }],
    twitterImages: [{ url: ogImageUrl }],
  });

  return { lang, meta, posts, t: { title: t.title, description: t.description } };
};
