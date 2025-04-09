import { Language } from "./i18n";

export function displayDate(date: Date, lang: Language): string {
  return Intl.DateTimeFormat(lang, {
    dateStyle: "medium",
  }).format(date);
}
