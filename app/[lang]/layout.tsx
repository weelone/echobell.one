import "fumadocs-ui/style.css";
import type { ReactNode } from "react";

import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { Translations } from "fumadocs-ui/contexts/i18n";
import { Language, uiDictionary, localizeUrl, languages } from "@/lib/i18n";
import { Metadata } from "next";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const lang = (await params).lang;
  if (!languages.includes(lang)) notFound();
  const t = uiDictionary[lang].metadata;

  // Build OG image URL using API route
  const title =
    typeof t.defaultTitle === "string"
      ? t.defaultTitle.replace(/\s*\|\s*Echobell.*$/, "")
      : "Instant Webhook & Email Alerts";
  const ogImageParams = new URLSearchParams({
    title: title,
    description: typeof t.description === "string" ? t.description : "",
    type: "default",
    lang: lang,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: {
      template: t.titleTemplate,
      default: t.defaultTitle,
    },
    description: t.description,
    metadataBase: baseUrl,
    keywords: t.keywords,
    alternates: {
      canonical: localizeUrl("/", lang),
      languages: {
        "x-default": "/en",
        en: "/en",
        zh: "/zh",
        es: "/es",
        fr: "/fr",
        ja: "/ja",
        de: "/de",
      },
    },
    openGraph: {
      locale: lang,
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      images: [{ url: ogImageUrl }],
    },
  });
}

const zh: Partial<Translations> = {
  search: "搜索",
  searchNoResult: "没有找到结果",
  toc: "目录",
  tocNoHeadings: "没有目录",
  lastUpdate: "最后更新",
  chooseLanguage: "选择语言",
  nextPage: "下一页",
  previousPage: "上一页",
  chooseTheme: "选择主题",
  editOnGithub: "在GitHub上编辑",
};

const es: Partial<Translations> = {
  search: "Buscar",
  searchNoResult: "No se encontraron resultados",
  toc: "Índice",
  tocNoHeadings: "No hay encabezados",
  lastUpdate: "Última actualización",
  chooseLanguage: "Elegir idioma",
  nextPage: "Siguiente página",
  previousPage: "Página anterior",
  chooseTheme: "Elegir tema",
  editOnGithub: "Editar en GitHub",
};

const fr: Partial<Translations> = {
  search: "Rechercher",
  searchNoResult: "Aucun résultat trouvé",
  toc: "Table des matières",
  tocNoHeadings: "Pas de titres",
  lastUpdate: "Dernière mise à jour",
  chooseLanguage: "Choisir la langue",
  nextPage: "Page suivante",
  previousPage: "Page précédente",
  chooseTheme: "Choisir le thème",
  editOnGithub: "Éditer sur GitHub",
};

const ja: Partial<Translations> = {
  search: "検索",
  searchNoResult: "結果が見つかりません",
  toc: "目次",
  tocNoHeadings: "見出しがありません",
  lastUpdate: "最終更新日",
  chooseLanguage: "言語を選択",
  nextPage: "次のページ",
  previousPage: "前のページ",
  chooseTheme: "テーマを選択",
  editOnGithub: "GitHubで編集",
};

const de: Partial<Translations> = {
  search: "Suchen",
  searchNoResult: "Keine Ergebnisse gefunden",
  toc: "Inhaltsverzeichnis",
  tocNoHeadings: "Keine Überschriften",
  lastUpdate: "Letzte Aktualisierung",
  chooseLanguage: "Sprache wählen",
  nextPage: "Nächste Seite",
  previousPage: "Vorherige Seite",
  chooseTheme: "Thema wählen",
  editOnGithub: "Auf GitHub bearbeiten",
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "中文",
    locale: "zh",
  },
  {
    name: "日本語",
    locale: "ja",
  },
  {
    name: "Español",
    locale: "es",
  },
  {
    name: "Français",
    locale: "fr",
  },
  {
    name: "Deutsch",
    locale: "de",
  },
];

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;
  if (!languages.includes(lang as Language)) notFound();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className="bg-neutral-100 dark:bg-neutral-900"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Site-wide structured data */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { zh, es, fr, ja, de }[lang],
          }}
          search={{ enabled: false }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
