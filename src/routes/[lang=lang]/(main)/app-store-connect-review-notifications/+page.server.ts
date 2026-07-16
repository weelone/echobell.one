import { buildLocalizedMeta } from "$lib/server/meta-builders";
import { getCopy } from "$lib/landing/app-store-connect-review-notifications";
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
      path: "/app-store-connect-review-notifications",
      lang,
      title: t.meta.title,
      description: t.meta.description,
      keywords: [...t.meta.keywords],
    }),
  };
};
