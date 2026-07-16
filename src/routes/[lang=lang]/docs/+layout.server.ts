import { getDocsTree } from "$lib/server/content";
import type { Language } from "$lib/i18n";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ params }) => {
  const lang = params.lang as Language;
  return {
    lang,
    tree: getDocsTree(lang),
  };
};
