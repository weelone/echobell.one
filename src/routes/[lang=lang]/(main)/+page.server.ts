import { getBlogPostsByDate } from "$lib/server/content";
import { buildHomeMeta } from "$lib/server/meta-builders";
import { languages, type Language } from "$lib/i18n";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const entries: EntryGenerator = () =>
  languages.map((lang) => ({ lang }));

export const load: PageServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  const latest = getBlogPostsByDate(lang)[0];
  return {
    lang,
    meta: buildHomeMeta(lang),
    latestPost: latest
      ? { url: latest.url, title: latest.data.title }
      : undefined,
  };
};
