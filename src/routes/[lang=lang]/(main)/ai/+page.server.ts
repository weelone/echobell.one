import { getAiGuideCopy } from "$lib/ai-guide-i18n";
import { getAiLatestBlogPosts, getAiPriorityDocs } from "$lib/server/ai-index";
import { applyTitleTemplate } from "$lib/server/meta-builders";
import { createPageMeta, toAbsoluteUrl } from "$lib/metadata";
import { languages, localizeUrl, i18n, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const copy = getAiGuideCopy(lang);
  const canonical = localizeUrl("/ai", lang);

  const meta = createPageMeta({
    title: applyTitleTemplate(copy.title, lang),
    description: copy.description,
    canonical,
    languageAlternates: {
      "x-default": localizeUrl("/ai", i18n.defaultLanguage),
      ...Object.fromEntries(languages.map((l) => [l, localizeUrl("/ai", l)])),
    },
    ogUrl: toAbsoluteUrl(canonical),
  });

  return {
    lang,
    meta,
    priorityDocs: getAiPriorityDocs(lang),
    recentBlogPosts: getAiLatestBlogPosts(lang, 6),
  };
};
