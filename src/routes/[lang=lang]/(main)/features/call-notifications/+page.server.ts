import { buildLocalizedMeta } from "$lib/server/meta-builders";
import { callNotificationsI18n } from "$lib/features-i18n";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const t = callNotificationsI18n[lang];
  return {
    lang,
    meta: buildLocalizedMeta({
      path: "/features/call-notifications",
      lang,
      title: t.meta.title,
      description: t.meta.description,
      keywords: [...t.meta.keywords],
    }),
  };
};
