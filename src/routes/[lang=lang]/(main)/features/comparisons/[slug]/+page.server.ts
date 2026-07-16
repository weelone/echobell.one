import { error } from "@sveltejs/kit";
import { buildLocalizedMeta } from "$lib/server/meta-builders";
import {
  competitorSlugs,
  getComparisonPageData,
  isCompetitorSlug,
} from "$lib/competitor-comparisons";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.flatMap((lang) => competitorSlugs.map((slug) => ({ lang, slug })));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const { slug } = params;
  if (!isCompetitorSlug(slug)) error(404, "Not Found");

  const t = getComparisonPageData(slug, lang);
  return {
    lang,
    slug,
    meta: buildLocalizedMeta({
      path: `/features/comparisons/${slug}`,
      lang,
      title: t.meta.title,
      description: t.meta.description,
      keywords: [...t.meta.keywords],
    }),
  };
};
