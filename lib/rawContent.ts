import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { Language } from "@/lib/i18n";

type ContentKind = "docs" | "blog";

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
        !part.includes(path.sep)
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

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
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

  const contentRoot = path.join(process.cwd(), "content", kind);

  for (const relativePath of getRelativePathCandidates(slug, lang)) {
    const filePath = path.join(contentRoot, relativePath);

    if (!(await fileExists(filePath))) continue;

    return {
      content: await readFile(filePath, "utf8"),
      filePath,
    };
  }

  return undefined;
}
