import { buildLocalizedMeta } from "$lib/server/meta-builders";
import { featuresIndexI18n } from "$lib/features-i18n";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const t = featuresIndexI18n[lang];
  return {
    lang,
    meta: buildLocalizedMeta({
      path: "/features",
      lang,
      title: t.title,
      description: t.description,
      ogImageDescription: t.subtitle,
    }),
  };
};
