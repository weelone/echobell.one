import { Language } from "@/lib/i18n";
import rawContentFiles from "@/lib/rawContent.generated.json";

type ContentKind = "docs" | "blog";
type RawContentManifest = Record<ContentKind, Record<string, string>>;

const rawContentManifest = rawContentFiles as RawContentManifest;

function getLocaleSuffix(lang: Language): string {
  return lang === "en" ? "" : `.${lang}`;
}

function isSafeSlug(slug?: string[]): boolean {
  return (
    slug === undefined ||
    slug.every(
      (part) =>
        part.length > 0 &&
        !part.includes("..") &&
        !part.includes("/") &&
        !part.includes("\\") &&
        !part.includes(":")
    )
  );
}

function getRelativePathCandidates(
  slug: string[] | undefined,
  lang: Language
): string[] {
  const basePath = slug && slug.length > 0 ? slug.join("/") : "index";
  const localeSuffix = getLocaleSuffix(lang);

  if (!slug || slug.length === 0) {
    return [`index${localeSuffix}.mdx`];
  }

  return [`${basePath}${localeSuffix}.mdx`, `${basePath}/index${localeSuffix}.mdx`];
}

export function getRawMarkdownPath(pagePath: string): string {
  const normalized = pagePath.endsWith("/") ? pagePath.slice(0, -1) : pagePath;
  return `/raw${normalized}`;
}

export async function readRawContentFile(
  kind: ContentKind,
  lang: Language,
  slug?: string[]
): Promise<{ content: string; filePath: string } | undefined> {
  if (!isSafeSlug(slug)) return undefined;

  const files = rawContentManifest[kind];

  for (const relativePath of getRelativePathCandidates(slug, lang)) {
    const content = files[relativePath];
    if (content === undefined) continue;

    return {
      content,
      filePath: `content/${kind}/${relativePath}`,
    };
  }

  return undefined;
}
