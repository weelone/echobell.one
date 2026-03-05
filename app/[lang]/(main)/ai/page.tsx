import Link from "next/link";
import type { Metadata } from "next";
import { Language, i18n, languages, localizeUrl } from "@/lib/i18n";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { getAiLatestBlogPosts, getAiPriorityDocs } from "@/lib/aiIndex";
import { displayDate } from "@/lib/date";

interface AiGuideCopy {
  title: string;
  description: string;
  entryPointsTitle: string;
  crawlOrderTitle: string;
  priorityDocsTitle: string;
  recentBlogPostsTitle: string;
  usageNotesTitle: string;
  entryPointLlmsDescription: string;
  entryPointLlmsFullDescription: string;
  entryPointAiIndexDescription: string;
  crawlSteps: [string, string, string, string];
  usageNotes: [string, string, string];
}

const aiGuideDictionary: Record<Language, AiGuideCopy> = {
  en: {
    title: "AI Reading Guide",
    description:
      "Machine-readable entry points and crawling guidance for AI agents that consume Echobell documentation and blog content.",
    entryPointsTitle: "Machine-Readable Entry Points",
    crawlOrderTitle: "Recommended Crawl Order",
    priorityDocsTitle: "Priority Documentation",
    recentBlogPostsTitle: "Recent Blog Posts",
    usageNotesTitle: "Usage Notes",
    entryPointLlmsDescription:
      "short index with high-priority links and crawl guidance.",
    entryPointLlmsFullDescription: "complete docs and blog URL index.",
    entryPointAiIndexDescription:
      "structured JSON manifest for agent workflows.",
    crawlSteps: [
      "Read `/llms.txt` first to discover canonical resources.",
      "Pull `/ai-index.json` for programmatic URL collection.",
      "Read prioritized docs pages before broad crawling.",
      "Use localized URLs if the user requests a specific language.",
    ],
    usageNotes: [
      "Canonical public content lives under `/docs` and `/blog` with language prefixes.",
      "Avoid tokenized subscription pages (`/subscription/*`) because they are user-specific.",
      "If language preference is unknown, default to English (`/en`).",
    ],
  },
  zh: {
    title: "AI 阅读指南",
    description:
      "面向 AI 代理的人类可读说明，提供机器可读入口与抓取建议，帮助消费 Echobell 文档和博客内容。",
    entryPointsTitle: "机器可读入口",
    crawlOrderTitle: "推荐抓取顺序",
    priorityDocsTitle: "优先文档",
    recentBlogPostsTitle: "最新博客",
    usageNotesTitle: "使用说明",
    entryPointLlmsDescription: "精简索引，包含高优先级链接与抓取建议。",
    entryPointLlmsFullDescription: "完整 docs 与 blog URL 索引。",
    entryPointAiIndexDescription: "适用于 Agent 工作流的结构化 JSON 清单。",
    crawlSteps: [
      "先读取 `/llms.txt`，获取规范入口。",
      "再读取 `/ai-index.json`，程序化收集 URL。",
      "优先阅读高价值 docs 页面，再进行全量抓取。",
      "若用户指定语言，优先使用对应语言的 URL。",
    ],
    usageNotes: [
      "公开内容主要位于带语言前缀的 `/docs` 与 `/blog`。",
      "避免抓取带 token 的订阅页面（`/subscription/*`），这些链接为用户私有。",
      "如果语言偏好未知，默认使用英文（`/en`）。",
    ],
  },
  es: {
    title: "Guia de Lectura para IA",
    description:
      "Guia legible para humanos con puntos de entrada legibles por maquinas y recomendaciones de rastreo para consumir la documentacion y el blog de Echobell.",
    entryPointsTitle: "Puntos de Entrada Legibles por Maquinas",
    crawlOrderTitle: "Orden de Rastreo Recomendado",
    priorityDocsTitle: "Documentacion Prioritaria",
    recentBlogPostsTitle: "Publicaciones Recientes del Blog",
    usageNotesTitle: "Notas de Uso",
    entryPointLlmsDescription:
      "indice breve con enlaces de alta prioridad y recomendaciones de rastreo.",
    entryPointLlmsFullDescription:
      "indice completo de URL de documentacion y blog.",
    entryPointAiIndexDescription:
      "manifiesto JSON estructurado para flujos de agentes.",
    crawlSteps: [
      "Lee primero `/llms.txt` para descubrir recursos canonicos.",
      "Usa `/ai-index.json` para recopilar URL de forma programatica.",
      "Lee primero la documentacion prioritaria antes del rastreo amplio.",
      "Usa URL localizadas si el usuario solicita un idioma especifico.",
    ],
    usageNotes: [
      "El contenido publico canonico vive en `/docs` y `/blog` con prefijos de idioma.",
      "Evita las paginas de suscripcion con token (`/subscription/*`) porque son especificas de cada usuario.",
      "Si no hay preferencia de idioma, usa ingles por defecto (`/en`).",
    ],
  },
  fr: {
    title: "Guide de Lecture IA",
    description:
      "Guide lisible par les humains avec des points d entree machine et des conseils de crawl pour consommer la documentation et le blog Echobell.",
    entryPointsTitle: "Points d Entree Lisibles par Machine",
    crawlOrderTitle: "Ordre de Crawl Recommande",
    priorityDocsTitle: "Documentation Prioritaire",
    recentBlogPostsTitle: "Articles de Blog Recents",
    usageNotesTitle: "Notes d Utilisation",
    entryPointLlmsDescription:
      "index court avec liens prioritaires et conseils de crawl.",
    entryPointLlmsFullDescription:
      "index complet des URL de documentation et de blog.",
    entryPointAiIndexDescription:
      "manifeste JSON structure pour les workflows d agents.",
    crawlSteps: [
      "Lisez d abord `/llms.txt` pour decouvrir les ressources canoniques.",
      "Recuperez `/ai-index.json` pour collecter les URL de facon programmatique.",
      "Lisez d abord les pages docs prioritaires avant un crawl large.",
      "Utilisez des URL localisees si l utilisateur demande une langue precise.",
    ],
    usageNotes: [
      "Le contenu public canonique se trouve sous `/docs` et `/blog` avec prefixes de langue.",
      "Evitez les pages d abonnement avec token (`/subscription/*`) car elles sont specifiques a chaque utilisateur.",
      "Si la langue est inconnue, utilisez l anglais par defaut (`/en`).",
    ],
  },
  ja: {
    title: "AI 読み取りガイド",
    description:
      "Echobell のドキュメントとブログを AI エージェントが利用しやすいように、機械可読な入口とクロール方針をまとめたページです。",
    entryPointsTitle: "機械可読エントリポイント",
    crawlOrderTitle: "推奨クロール順序",
    priorityDocsTitle: "優先ドキュメント",
    recentBlogPostsTitle: "最新ブログ記事",
    usageNotesTitle: "利用ノート",
    entryPointLlmsDescription:
      "優先度の高いリンクとクロール方針を含む短いインデックスです。",
    entryPointLlmsFullDescription:
      "docs と blog の URL を網羅した完全インデックスです。",
    entryPointAiIndexDescription:
      "エージェントのワークフロー向け構造化 JSON マニフェストです。",
    crawlSteps: [
      "まず `/llms.txt` を読み、正規の入口を確認します。",
      "次に `/ai-index.json` を取得し、URL をプログラムで収集します。",
      "広範囲のクロール前に、優先 docs ページを先に読みます。",
      "ユーザーが言語を指定した場合は、その言語の URL を優先します。",
    ],
    usageNotes: [
      "公開された正規コンテンツは、言語プレフィックス付きの `/docs` と `/blog` にあります。",
      "トークン付き購読ページ（`/subscription/*`）はユーザー固有のため利用を避けてください。",
      "言語指定がない場合は英語（`/en`）を既定として扱ってください。",
    ],
  },
  de: {
    title: "KI-Lesefuehrer",
    description:
      "Menschenlesbare Seite mit maschinenlesbaren Einstiegspunkten und Crawl-Hinweisen fuer KI-Agenten, die Echobell-Dokumentation und Blog-Inhalte nutzen.",
    entryPointsTitle: "Maschinenlesbare Einstiegspunkte",
    crawlOrderTitle: "Empfohlene Crawl-Reihenfolge",
    priorityDocsTitle: "Prioritaere Dokumentation",
    recentBlogPostsTitle: "Aktuelle Blogbeitraege",
    usageNotesTitle: "Nutzungshinweise",
    entryPointLlmsDescription:
      "kurzer Index mit priorisierten Links und Crawl-Hinweisen.",
    entryPointLlmsFullDescription:
      "vollstaendiger URL-Index fuer Dokumentation und Blog.",
    entryPointAiIndexDescription:
      "strukturiertes JSON-Manifest fuer Agent-Workflows.",
    crawlSteps: [
      "Zuerst `/llms.txt` lesen, um kanonische Ressourcen zu finden.",
      "Dann `/ai-index.json` fuer die programmatische URL-Sammlung nutzen.",
      "Prioritaere Docs-Seiten vor breitem Crawling lesen.",
      "Lokalisierte URLs verwenden, wenn der Nutzer eine bestimmte Sprache wuenscht.",
    ],
    usageNotes: [
      "Kanonische oeffentliche Inhalte liegen unter `/docs` und `/blog` mit Sprachpraefix.",
      "Tokenisierte Abo-Seiten (`/subscription/*`) vermeiden, da sie nutzerspezifisch sind.",
      "Wenn die Sprachpraeferenz unbekannt ist, standardmaessig Englisch (`/en`) verwenden.",
    ],
  },
};

function getAiGuideCopy(lang: Language): AiGuideCopy {
  return aiGuideDictionary[lang] ?? aiGuideDictionary.en;
}

function formatBlogDate(value: string, lang: Language): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return displayDate(date, lang);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const copy = getAiGuideCopy(lang);
  const canonical = localizeUrl("/ai", lang);

  return createMetadata({
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl("/ai", i18n.defaultLanguage as Language),
        ...Object.fromEntries(languages.map((l) => [l, localizeUrl("/ai", l)])),
      },
    },
    openGraph: {
      url: new URL(canonical, baseUrl).toString(),
    },
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const copy = getAiGuideCopy(lang);
  const priorityDocs = getAiPriorityDocs(lang);
  const recentBlogPosts = getAiLatestBlogPosts(lang, 6);

  return (
    <main className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">
            {copy.title}
          </h1>
          <p className="text-lg/8 opacity-70">{copy.description}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold opacity-90">{copy.entryPointsTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            <li>
              <Link className="underline" href="/llms.txt">
                /llms.txt
              </Link>
              {" - "}
              {copy.entryPointLlmsDescription}
            </li>
            <li>
              <Link className="underline" href="/llms-full.txt">
                /llms-full.txt
              </Link>
              {" - "}
              {copy.entryPointLlmsFullDescription}
            </li>
            <li>
              <Link className="underline" href="/ai-index.json">
                /ai-index.json
              </Link>
              {" - "}
              {copy.entryPointAiIndexDescription}
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold opacity-90">{copy.crawlOrderTitle}</h2>
          <ol className="list-decimal space-y-2 pl-6 opacity-80">
            {copy.crawlSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold opacity-90">{copy.priorityDocsTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            {priorityDocs.map((doc) => (
              <li key={doc.url}>
                <a className="underline" href={doc.url}>
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold opacity-90">
            {copy.recentBlogPostsTitle}
          </h2>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            {recentBlogPosts.map((post) => (
              <li key={post.url}>
                <a className="underline" href={post.url}>
                  {formatBlogDate(post.date, lang)} | {post.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold opacity-90">{copy.usageNotesTitle}</h2>
          <ul className="list-disc space-y-2 pl-6 opacity-80">
            {copy.usageNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
