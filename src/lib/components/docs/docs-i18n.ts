import type { Language } from "$lib/i18n";

export const docsUi: Record<
  Language,
  {
    toc: string;
    nextPage: string;
    previousPage: string;
    onThisPage: string;
  }
> = {
  en: {
    toc: "Table of Contents",
    nextPage: "Next Page",
    previousPage: "Previous Page",
    onThisPage: "On this page",
  },
  zh: {
    toc: "目录",
    nextPage: "下一页",
    previousPage: "上一页",
    onThisPage: "本页内容",
  },
  es: {
    toc: "Índice",
    nextPage: "Siguiente página",
    previousPage: "Página anterior",
    onThisPage: "En esta página",
  },
  fr: {
    toc: "Table des matières",
    nextPage: "Page suivante",
    previousPage: "Page précédente",
    onThisPage: "Sur cette page",
  },
  ja: {
    toc: "目次",
    nextPage: "次のページ",
    previousPage: "前のページ",
    onThisPage: "このページの内容",
  },
  de: {
    toc: "Inhaltsverzeichnis",
    nextPage: "Nächste Seite",
    previousPage: "Vorherige Seite",
    onThisPage: "Auf dieser Seite",
  },
};
