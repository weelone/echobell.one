import type { ParamMatcher } from "@sveltejs/kit";
import { languages, type Language } from "$lib/i18n";

export const match: ParamMatcher = (param): param is Language => {
  return languages.includes(param as Language);
};
