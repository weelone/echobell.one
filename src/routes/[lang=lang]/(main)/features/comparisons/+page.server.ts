import { buildLocalizedMeta } from "$lib/server/meta-builders";
import { getComparisonsIndexData } from "$lib/competitor-comparisons";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const t = getComparisonsIndexData(lang);
  return {
    lang,
    meta: buildLocalizedMeta({
      path: "/features/comparisons",
      lang,
      title: t.meta.title,
      description: t.meta.description,
      keywords: [...t.meta.keywords],
    }),
  };
};
