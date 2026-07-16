/**
 * MDX -> HTML rendering. Replaces fumadocs-mdx/fumadocs-ui rendering with a
 * build-time pipeline: @mdx-js/mdx compiles the source, preact renders it to
 * a static HTML string, shiki highlights code blocks and a small rehype pass
 * assigns heading ids + collects the table of contents.
 *
 * Only ever runs during prerendering (Node) — never on the worker.
 * Deliberately written without JSX so no ambient JSX transform (React vs
 * preact) can produce foreign elements.
 */
import { compile, run } from "@mdx-js/mdx";
import * as jsxRuntime from "preact/jsx-runtime";
import { h, Fragment, type ComponentChildren } from "preact";
import { render as renderToString } from "preact-render-to-string";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import GithubSlugger from "github-slugger";
import { languages, type Language } from "$lib/i18n";

export interface TocItem {
  depth: number;
  title: string;
  id: string;
}

export interface RenderedMdx {
  html: string;
  toc: TocItem[];
}

// ---------------------------------------------------------------------------
// Localized links (port of LocalizedMdxLink)
// ---------------------------------------------------------------------------

const ROOT_SCOPED_PATH_PREFIXES = ["/api/", "/images/", "/_next/", "/raw/"];
const ROOT_SCOPED_EXACT_PATHS = [
  "/favicon.ico",
  "/icon.png",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/llms-full.txt",
  "/ai-index.json",
];

function hasLocalePrefix(pathname: string): boolean {
  return languages.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function localizeHref(href: string, lang: Language): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [pathname] = href.split(/[?#]/);
  if (!pathname || hasLocalePrefix(pathname)) return href;
  if (
    ROOT_SCOPED_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    ROOT_SCOPED_EXACT_PATHS.some((path) => path === pathname)
  ) {
    return href;
  }
  if (pathname === "/") return `/${lang}${href.slice(1)}`;
  return `/${lang}${href}`;
}

// ---------------------------------------------------------------------------
// Heading ids + table of contents (rehype)
// ---------------------------------------------------------------------------

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

function hastText(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(hastText).join("");
}

function rehypeHeadingIds(options: { collect: TocItem[] }) {
  return (tree: HastNode) => {
    const slugger = new GithubSlugger();
    const visit = (node: HastNode) => {
      if (node.tagName && /^h[1-6]$/.test(node.tagName)) {
        const depth = Number(node.tagName[1]);
        const title = hastText(node).trim();
        const id =
          (node.properties?.id as string | undefined) ?? slugger.slug(title);
        node.properties = { ...node.properties, id };
        options.collect.push({ depth, title, id });
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

// ---------------------------------------------------------------------------
// MDX components (ports of the fumadocs-ui components used by the content)
// ---------------------------------------------------------------------------

type Props = Record<string, unknown> & { children?: ComponentChildren };

const calloutStyles: Record<string, { border: string; icon: string }> = {
  info: { border: "border-blue-500/50", icon: "text-blue-500" },
  warn: { border: "border-amber-500/50", icon: "text-amber-500" },
  warning: { border: "border-amber-500/50", icon: "text-amber-500" },
  error: { border: "border-red-500/50", icon: "text-red-500" },
};

function calloutIcon(colorClass: string) {
  return h(
    "svg" as never,
    {
      class: `mt-0.5 size-5 shrink-0 ${colorClass}`,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    h("circle", { cx: "12", cy: "12", r: "10" }),
    h("path", { d: "M12 16v-4" }),
    h("path", { d: "M12 8h.01" })
  );
}

function Callout({ type = "info", title, children }: Props) {
  const style = calloutStyles[String(type)] ?? calloutStyles.info;
  return h(
    "div",
    {
      class: `mdx-callout not-prose my-6 flex gap-3 rounded-xl border ${style.border} bg-card p-4 text-sm shadow-sm`,
    },
    calloutIcon(style.icon),
    h(
      "div",
      { class: "min-w-0 flex-1 space-y-2 [&_p]:m-0 [&_p]:leading-relaxed" },
      title ? h("p", { class: "font-medium" }, title as string) : null,
      children
    )
  );
}

function createComponents(lang: Language) {
  return {
    a: ({ href, children, ...rest }: Props) =>
      h(
        "a",
        {
          href:
            typeof href === "string" ? localizeHref(href, lang) : undefined,
          ...rest,
        },
        children
      ),
    img: ({ src, alt, ...rest }: Props) =>
      h("img", {
        src: src as string,
        alt: (alt as string) ?? "",
        loading: "lazy",
        class: "rounded-xl",
        ...rest,
      }),
    table: ({ children }: Props) =>
      h("div", { class: "overflow-x-auto" }, h("table", {}, children)),
    Callout,
    Cards: ({ children }: Props) =>
      h(
        "div",
        { class: "mdx-cards not-prose my-6 grid gap-4 sm:grid-cols-2" },
        children
      ),
    Card: ({ title, href, children }: Props) => {
      const inner = [
        h("p", { class: "mb-1 font-medium text-foreground" }, title as string),
        children
          ? h(
              "div",
              { class: "text-sm text-muted-foreground [&_p]:m-0" },
              children
            )
          : null,
      ];
      const cls =
        "mdx-card block rounded-xl border bg-card p-4 shadow-sm transition-colors";
      return href
        ? h(
            "a",
            {
              href: localizeHref(href as string, lang),
              class: `${cls} hover:border-orange-500/50 hover:bg-accent/50`,
            },
            inner
          )
        : h("div", { class: cls }, inner);
    },
    Steps: ({ children }: Props) => h("div", { class: "mdx-steps" }, children),
    Step: ({ children }: Props) => h("div", { class: "mdx-step" }, children),
  };
}

// ---------------------------------------------------------------------------
// Pipeline
// ---------------------------------------------------------------------------

/** Strip MDX ESM imports of fumadocs-ui components; they are provided via the
 * components mapping instead. */
function stripFumadocsImports(source: string): string {
  return source.replace(
    /^import\s+\{[^}]*\}\s+from\s+["']fumadocs-ui\/[^"']+["'];?\s*$/gm,
    ""
  );
}

const renderCache = new Map<string, Promise<RenderedMdx>>();

export function renderMdx(
  source: string,
  options: { lang: Language; cacheKey?: string }
): Promise<RenderedMdx> {
  const cacheKey = options.cacheKey
    ? `${options.lang}:${options.cacheKey}`
    : undefined;
  if (cacheKey) {
    const cached = renderCache.get(cacheKey);
    if (cached) return cached;
  }

  const promise = (async (): Promise<RenderedMdx> => {
    const toc: TocItem[] = [];
    const compiled = await compile(stripFumadocsImports(source), {
      format: "mdx",
      outputFormat: "function-body",
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeHeadingIds, { collect: toc }],
        [
          rehypeShiki,
          {
            themes: { light: "github-light", dark: "github-dark" },
            defaultColor: false,
          },
        ],
      ],
    });

    const module = await run(String(compiled), {
      ...jsxRuntime,
      Fragment,
      baseUrl: import.meta.url,
    });

    const element = h(module.default, {
      components: createComponents(options.lang),
    });
    return { html: renderToString(element), toc };
  })();

  if (cacheKey) renderCache.set(cacheKey, promise);
  return promise;
}
