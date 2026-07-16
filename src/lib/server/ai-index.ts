import { languages, localizeUrl, type Language } from "$lib/i18n";
import { toAbsoluteUrl } from "$lib/metadata";
import {
  getBlogPostsByDate,
  getBlogPosts,
  getDocsPage,
  getDocsPages,
  getRawMarkdownPath,
} from "./content";

export interface AiContentItem {
  kind: "docs" | "blog";
  lang: Language;
  title: string;
  description?: string;
  url: string;
  rawMarkdownUrl: string;
  lastModified?: string;
}

function normalizeText(value?: string): string | undefined {
  if (!value) return undefined;
  return value.replace(/\s+/g, " ").trim();
}

function toAbsoluteRawMarkdownUrl(path: string): string {
  return toAbsoluteUrl(getRawMarkdownPath(path));
}

function normalizeDate(value?: Date | string): string | undefined {
  if (!value) return undefined;
  return value instanceof Date ? value.toISOString() : value;
}

function sortItems(items: AiContentItem[]): AiContentItem[] {
  return [...items].sort((a, b) => {
    if (a.kind !== b.kind) return a.kind.localeCompare(b.kind);
    if (a.lang !== b.lang) return a.lang.localeCompare(b.lang);
    return a.url.localeCompare(b.url);
  });
}

function getDocsItems(lang: Language): AiContentItem[] {
  return getDocsPages(lang).map((page) => ({
    kind: "docs" as const,
    lang,
    title: normalizeText(page.data.title) ?? "Untitled",
    description: normalizeText(page.data.description),
    url: toAbsoluteUrl(page.url),
    rawMarkdownUrl: toAbsoluteRawMarkdownUrl(page.url),
    lastModified: normalizeDate(page.data.lastModified),
  }));
}

function getBlogItems(lang: Language): AiContentItem[] {
  return getBlogPosts(lang).map((post) => ({
    kind: "blog" as const,
    lang,
    title: normalizeText(post.data.title) ?? "Untitled",
    description: normalizeText(post.data.description),
    url: toAbsoluteUrl(post.url),
    rawMarkdownUrl: toAbsoluteRawMarkdownUrl(post.url),
    lastModified: normalizeDate(post.data.lastModified ?? post.data.date),
  }));
}

export function getAiContentItems(): AiContentItem[] {
  const items = languages.flatMap((lang) => [
    ...getDocsItems(lang),
    ...getBlogItems(lang),
  ]);
  return sortItems(items);
}

const priorityDocPaths = [
  "/docs",
  "/docs/what-is-echobell",
  "/docs/webhook",
  "/docs/direct",
  "/docs/email-trigger",
  "/docs/email-to-call",
  "/docs/notification",
  "/docs/features",
  "/docs/template",
  "/docs/developer",
  "/docs/developer/app-store-connect",
  "/docs/developer/github",
  "/docs/developer/grafana",
  "/docs/trader",
  "/docs/trader/tradingview",
  "/docs/support",
] as const;

export function getAiPriorityDocs(lang: Language = "en"): Array<{
  title: string;
  url: string;
  rawMarkdownUrl: string;
  description?: string;
}> {
  return priorityDocPaths.map((path) => {
    const slug =
      path === "/docs" ? undefined : path.replace("/docs/", "").split("/");
    const page = getDocsPage(slug, lang);

    if (!page) {
      const localizedPath = localizeUrl(path, lang);
      return {
        title:
          path === "/docs"
            ? "Documentation Home"
            : (slug?.join("/") ?? "Document"),
        url: toAbsoluteUrl(localizedPath),
        rawMarkdownUrl: toAbsoluteRawMarkdownUrl(localizedPath),
      };
    }

    return {
      title: normalizeText(page.data.title) ?? "Untitled",
      description: normalizeText(page.data.description),
      url: toAbsoluteUrl(page.url),
      rawMarkdownUrl: toAbsoluteRawMarkdownUrl(page.url),
    };
  });
}

export function getAiLatestBlogPosts(
  lang: Language = "en",
  limit = 8
): Array<{
  title: string;
  url: string;
  rawMarkdownUrl: string;
  date: string;
  description?: string;
}> {
  return getBlogPostsByDate(lang)
    .slice(0, limit)
    .map((post) => ({
      title: normalizeText(post.data.title) ?? "Untitled",
      url: toAbsoluteUrl(post.url),
      rawMarkdownUrl: toAbsoluteRawMarkdownUrl(post.url),
      date: normalizeDate(post.data.date) ?? "",
      description: normalizeText(post.data.description),
    }));
}

export function getLocalizedDocsRoots(): Array<{
  lang: Language;
  url: string;
  rawMarkdownUrl: string;
}> {
  return languages.map((lang) => ({
    lang,
    url: toAbsoluteUrl(localizeUrl("/docs", lang)),
    rawMarkdownUrl: toAbsoluteRawMarkdownUrl(localizeUrl("/docs", lang)),
  }));
}
