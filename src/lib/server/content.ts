/**
 * Content source layer. Replaces fumadocs-mdx collections: loads raw MDX from
 * `content/`, validates frontmatter, resolves localized variants and builds
 * the docs navigation tree from `meta.json` files.
 *
 * Server-only and used exclusively by prerendered routes — everything here
 * runs at build time.
 */
import { z } from "zod";
import YAML from "yaml";
import gitDates from "virtual:git-dates";
import { languages, i18n, localizeUrl, type Language } from "$lib/i18n";

const docsRaw = import.meta.glob("/content/docs/**/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const blogRaw = import.meta.glob("/content/blog/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const legalRaw = import.meta.glob("/content/legal/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const docsMetaFiles = import.meta.glob("/content/docs/**/meta*.json", {
  import: "default",
  eager: true,
}) as Record<string, DocsMetaFile>;

interface DocsMetaFile {
  title?: string;
  root?: boolean;
  pages: string[];
}

const docsFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  sidebarTitle: z.string().optional(),
  icon: z.string().optional(),
  full: z.boolean().optional(),
});

const blogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  author: z.string().optional(),
  authorAvatarLink: z.string().optional(),
  authorLink: z.string().optional(),
  date: z.coerce.date(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  lastModified: z.coerce.date().optional(),
});

export type DocsFrontmatter = z.infer<typeof docsFrontmatterSchema>;
export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export interface DocsPage {
  kind: "docs";
  slugs: string[];
  lang: Language;
  url: string;
  data: DocsFrontmatter & { lastModified?: string };
  body: string;
  file: string;
}

export interface BlogPost {
  kind: "blog";
  slugs: string[];
  lang: Language;
  url: string;
  data: BlogFrontmatter & { lastModified?: Date };
  body: string;
  file: string;
}

export function parseFrontmatter(raw: string): {
  frontmatter: Record<string, unknown>;
  body: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { frontmatter: {}, body: raw };
  return {
    frontmatter: (YAML.parse(match[1]) as Record<string, unknown>) ?? {},
    body: raw.slice(match[0].length),
  };
}

function localeSuffix(lang: Language): string {
  return lang === i18n.defaultLanguage ? "" : `.${lang}`;
}

/** "/content/docs/developer/github.zh.mdx" -> { base: "developer/github", lang: "zh" } */
function splitLocalizedPath(
  path: string,
  prefix: string
): { base: string; lang: Language } {
  const relative = path.slice(prefix.length).replace(/\.mdx$/, "");
  const match = /\.([a-z]{2})$/.exec(relative);
  if (match && languages.includes(match[1] as Language)) {
    return { base: relative.slice(0, -3), lang: match[1] as Language };
  }
  return { base: relative, lang: i18n.defaultLanguage };
}

function gitLastModified(file: string): string | undefined {
  return (gitDates as Record<string, string>)[file];
}

// ---------------------------------------------------------------------------
// Docs
// ---------------------------------------------------------------------------

/** base slug path (e.g. "developer/github") -> per-language raw file */
const docsByBase = new Map<string, Partial<Record<Language, string>>>();
for (const path of Object.keys(docsRaw)) {
  const { base, lang } = splitLocalizedPath(path, "/content/docs/");
  const entry = docsByBase.get(base) ?? {};
  entry[lang] = path;
  docsByBase.set(base, entry);
}

function docsBaseToSlugs(base: string): string[] {
  if (base === "index") return [];
  const parts = base.split("/");
  if (parts[parts.length - 1] === "index") parts.pop();
  return parts;
}

function docsSlugsToBase(slugs: string[]): string | undefined {
  const candidates =
    slugs.length === 0
      ? ["index"]
      : [slugs.join("/"), `${slugs.join("/")}/index`];
  return candidates.find((c) => docsByBase.has(c));
}

const docsPageCache = new Map<string, DocsPage | null>();

export function getDocsPage(
  slugs: string[] | undefined,
  lang: Language
): DocsPage | undefined {
  const normalizedSlugs = slugs ?? [];
  const cacheKey = `${lang}:${normalizedSlugs.join("/")}`;
  const cached = docsPageCache.get(cacheKey);
  if (cached !== undefined) return cached ?? undefined;

  const base = docsSlugsToBase(normalizedSlugs);
  const variants = base ? docsByBase.get(base) : undefined;
  // Fall back to the default language file when no translation exists.
  const file = variants?.[lang] ?? variants?.[i18n.defaultLanguage];
  if (!base || !file) {
    docsPageCache.set(cacheKey, null);
    return undefined;
  }

  const { frontmatter, body } = parseFrontmatter(docsRaw[file]);
  const data = docsFrontmatterSchema.parse(frontmatter);
  const page: DocsPage = {
    kind: "docs",
    slugs: normalizedSlugs,
    lang,
    url: localizeUrl(
      normalizedSlugs.length ? `/docs/${normalizedSlugs.join("/")}` : "/docs",
      lang
    ),
    data: { ...data, lastModified: gitLastModified(file.slice(1)) },
    body,
    file: file.slice(1),
  };
  docsPageCache.set(cacheKey, page);
  return page;
}

export function getDocsPages(lang: Language): DocsPage[] {
  const pages: DocsPage[] = [];
  for (const base of docsByBase.keys()) {
    const slugs = docsBaseToSlugs(base);
    // `foo/index` and `foo` collapse to the same slugs; avoid duplicates.
    if (base.endsWith("/index") && docsByBase.has(base.slice(0, -6))) continue;
    const page = getDocsPage(slugs, lang);
    if (page) pages.push(page);
  }
  return pages.sort((a, b) => a.url.localeCompare(b.url));
}

// ---------------------------------------------------------------------------
// Docs navigation tree (from meta.json)
// ---------------------------------------------------------------------------

export type DocsTreeNode =
  | { type: "separator"; name: string }
  | { type: "page"; name: string; url: string; slugs: string[] }
  | {
      type: "folder";
      name: string;
      index?: { url: string; slugs: string[] };
      children: DocsTreeNode[];
    };

function getMetaFile(dir: string, lang: Language): DocsMetaFile | undefined {
  return (
    docsMetaFiles[`/content/docs/${dir}meta${localeSuffix(lang)}.json`] ??
    docsMetaFiles[`/content/docs/${dir}meta.json`]
  );
}

function isFolder(base: string): boolean {
  return (
    !docsByBase.has(base) ||
    [...docsByBase.keys()].some((k) => k.startsWith(`${base}/`))
  );
}

function buildTreeLevel(dir: string, lang: Language): DocsTreeNode[] {
  const meta = getMetaFile(dir, lang);
  if (!meta) return [];

  const nodes: DocsTreeNode[] = [];
  for (const item of meta.pages) {
    const separator = /^---(.+)---$/.exec(item);
    if (separator) {
      nodes.push({ type: "separator", name: separator[1] });
      continue;
    }

    const base = `${dir}${item}`;
    if (item !== "index" && isFolder(base)) {
      const childMeta = getMetaFile(`${base}/`, lang);
      const indexPage = getDocsPage(docsBaseToSlugs(`${base}/index`), lang);
      const children = buildTreeLevel(`${base}/`, lang).filter(
        (node) => !(node.type === "page" && node.slugs.join("/") === base)
      );
      nodes.push({
        type: "folder",
        name: childMeta?.title ?? indexPage?.data.sidebarTitle ?? item,
        index: indexPage
          ? { url: indexPage.url, slugs: indexPage.slugs }
          : undefined,
        children,
      });
      continue;
    }

    const page = getDocsPage(docsBaseToSlugs(base), lang);
    if (page) {
      nodes.push({
        type: "page",
        name: page.data.sidebarTitle ?? page.data.title,
        url: page.url,
        slugs: page.slugs,
      });
    }
  }
  return nodes;
}

const docsTreeCache = new Map<Language, DocsTreeNode[]>();

export function getDocsTree(lang: Language): DocsTreeNode[] {
  let tree = docsTreeCache.get(lang);
  if (!tree) {
    tree = buildTreeLevel("", lang);
    docsTreeCache.set(lang, tree);
  }
  return tree;
}

/** Pages in sidebar order, used for previous/next navigation. */
export function getDocsSequence(
  lang: Language
): { name: string; url: string; slugs: string[] }[] {
  const sequence: { name: string; url: string; slugs: string[] }[] = [];
  const walk = (nodes: DocsTreeNode[]) => {
    for (const node of nodes) {
      if (node.type === "page") {
        sequence.push({ name: node.name, url: node.url, slugs: node.slugs });
      } else if (node.type === "folder") {
        if (node.index) {
          sequence.push({
            name: node.name,
            url: node.index.url,
            slugs: node.index.slugs,
          });
        }
        walk(node.children);
      }
    }
  };
  walk(getDocsTree(lang));
  return sequence;
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

const blogByBase = new Map<string, Partial<Record<Language, string>>>();
for (const path of Object.keys(blogRaw)) {
  const { base, lang } = splitLocalizedPath(path, "/content/blog/");
  const entry = blogByBase.get(base) ?? {};
  entry[lang] = path;
  blogByBase.set(base, entry);
}

const blogPageCache = new Map<string, BlogPost | null>();

export function getBlogPost(
  slug: string,
  lang: Language
): BlogPost | undefined {
  const cacheKey = `${lang}:${slug}`;
  const cached = blogPageCache.get(cacheKey);
  if (cached !== undefined) return cached ?? undefined;

  const variants = blogByBase.get(slug);
  const file = variants?.[lang] ?? variants?.[i18n.defaultLanguage];
  if (!file) {
    blogPageCache.set(cacheKey, null);
    return undefined;
  }

  const { frontmatter, body } = parseFrontmatter(blogRaw[file]);
  const data = blogFrontmatterSchema.parse(frontmatter);
  const lastModifiedGit = gitLastModified(file.slice(1));
  const post: BlogPost = {
    kind: "blog",
    slugs: [slug],
    lang,
    url: localizeUrl(`/blog/${slug}`, lang),
    data: {
      ...data,
      lastModified:
        data.lastModified ??
        (lastModifiedGit ? new Date(lastModifiedGit) : undefined),
    },
    body,
    file: file.slice(1),
  };
  blogPageCache.set(cacheKey, post);
  return post;
}

export function getBlogPosts(lang: Language): BlogPost[] {
  return [...blogByBase.keys()]
    .map((slug) => getBlogPost(slug, lang))
    .filter((post): post is BlogPost => post !== undefined)
    .sort((a, b) => a.url.localeCompare(b.url));
}

export function getBlogPostsByDate(lang: Language): BlogPost[] {
  return getBlogPosts(lang).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

// ---------------------------------------------------------------------------
// Legal pages (privacy / terms)
// ---------------------------------------------------------------------------

export function getLegalContent(
  kind: "privacy" | "terms",
  lang: Language
): string | undefined {
  return (
    legalRaw[`/content/legal/${kind}.${lang}.mdx`] ??
    legalRaw[`/content/legal/${kind}.en.mdx`]
  );
}

// ---------------------------------------------------------------------------
// Raw markdown for /raw/... routes
// ---------------------------------------------------------------------------

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

export function getRawMarkdownPath(pagePath: string): string {
  const normalized = pagePath.endsWith("/") ? pagePath.slice(0, -1) : pagePath;
  return `/raw${normalized}`;
}

export function readRawContentFile(
  kind: "docs" | "blog",
  lang: Language,
  slug?: string[]
): { content: string; filePath: string } | undefined {
  if (!isSafeSlug(slug)) return undefined;

  const files = kind === "docs" ? docsRaw : blogRaw;
  const suffix = lang === "en" ? "" : `.${lang}`;
  const basePath = slug && slug.length > 0 ? slug.join("/") : "index";
  const candidates =
    !slug || slug.length === 0
      ? [`index${suffix}.mdx`]
      : [`${basePath}${suffix}.mdx`, `${basePath}/index${suffix}.mdx`];

  for (const relativePath of candidates) {
    const content = files[`/content/${kind}/${relativePath}`];
    if (content === undefined) continue;
    return { content, filePath: `content/${kind}/${relativePath}` };
  }
  return undefined;
}
