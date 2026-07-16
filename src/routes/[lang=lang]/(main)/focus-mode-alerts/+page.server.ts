import { buildLocalizedMeta } from "$lib/server/meta-builders";
import { getCopy } from "$lib/landing/focus-mode-alerts";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const t = getCopy(lang);
  return {
    lang,
    meta: buildLocalizedMeta({
      path: "/focus-mode-alerts",
      lang,
      title: t.meta.title,
      description: t.meta.description,
      keywords: [...t.meta.keywords],
    }),
  };
};
