import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Language, localizeUrl, i18n } from "@/lib/i18n";
import { displayDate } from "@/lib/date";
import { createBlogMetadata, baseUrl } from "@/lib/metadata";
import { ArticleJsonLd } from "@/components/JsonLd";
import { Breadcrumb, BreadcrumbJsonLd } from "@/components/Breadcrumb";
import { languages } from "@/lib/i18n";
import { LocalizedMdxLink } from "@/components/LocalizedMdxLink";
import { getRawMarkdownPath } from "@/lib/rawContent";

export async function generateStaticParams() {
  const params = [];
  for (const lang of languages) {
    const pages = blog.getPages(lang);
    for (const page of pages) {
      params.push({
        lang,
        slug: page.slugs[0],
      });
    }
  }
  return params;
}

export default async function Page(props: {
  params: Promise<{ lang: Language; slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug], params.lang);

  if (!page) notFound();

  const data = page.data;
  const Mdx = data.body;
  const toc = data.toc;
  const canonical = new URL(
    localizeUrl(`/blog/${params.slug}`, params.lang),
    baseUrl
  ).toString();

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumb lang={params.lang} />
        <BreadcrumbJsonLd lang={params.lang} />
        {/* Structured data for the article */}
        <ArticleJsonLd
          title={data.title}
          description={data.description ?? data.title}
          datePublished={new Date(data.date).toISOString()}
          dateModified={new Date(data.lastModified ?? data.date).toISOString()}
          authorName={data.author ?? ""}
          url={canonical}
          imageUrl={data.image}
        />
        <div>
          <time
            dateTime={new Date(data.date).toISOString()}
            className="text-sm opacity-60"
          >
            {displayDate(new Date(data.date), params.lang)}
          </time>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">
            {data.title}
          </h2>
          <p className="mt-2 text-lg/8 opacity-60">{data.description}</p>
        </div>
        <article className="py-8">
          <div className="prose">
            <InlineTOC className="mb-8" items={toc} />
            <Mdx
              components={{
                ...defaultMdxComponents,
                a: (props) => <LocalizedMdxLink {...props} lang={params.lang} />,
                File,
                Files,
                Folder,
                Tabs,
                Tab,
              }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ lang: Language; slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug], params.lang);

  if (!page) notFound();

  const data = page.data;

  const canonical = new URL(
    localizeUrl(`/blog/${params.slug}`, params.lang),
    baseUrl
  ).toString();
  const rawMarkdownUrl = new URL(getRawMarkdownPath(page.url), baseUrl).toString();

  const publishedTime = new Date(data.date).toISOString();
  const modifiedTime = new Date(data.lastModified ?? data.date).toISOString();
  const image = data.image;
  const tags = data.tags;

  // Build OG image URL using API route
  const ogImageParams = new URLSearchParams({
    title: data.title,
    description: data.description ?? "",
    type: "blog",
    lang: params.lang,
  });
  const ogImageUrl =
    image || new URL(`/api/og?${ogImageParams.toString()}`, baseUrl).toString();

  const base = createBlogMetadata({
    title: data.title,
    description: data.description ?? data.title,
    publishedTime,
    modifiedTime,
    authors: data.author ? [data.author] : [],
    tags,
    image: ogImageUrl,
    url: canonical,
  });

  return {
    ...base,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl(
          `/blog/${params.slug}`,
          i18n.defaultLanguage as Language
        ),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl(`/blog/${params.slug}`, l)])
        ),
      },
      types: {
        "text/markdown": rawMarkdownUrl,
      },
    },
  };
}
