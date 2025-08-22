import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Language, uiDictionary, localizeUrl } from "@/lib/i18n";
import { displayDate } from "@/lib/date";
import { createBlogMetadata, baseUrl } from "@/lib/metadata";
import { ArticleJsonLd } from "@/components/JsonLd";
import { Breadcrumb, BreadcrumbJsonLd } from "@/components/Breadcrumb";
import { languages } from "@/lib/i18n";

export default async function Page(props: {
  params: Promise<{ lang: Language; slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug], params.lang);
  const t = uiDictionary[params.lang].blog;

  if (!page) notFound();

  const Mdx = page.data.body;
  const toc = page.data.toc;
  const canonical = new URL(
    localizeUrl(`/blog/${params.slug}`, params.lang),
    baseUrl
  ).toString();

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb lang={params.lang} />
        <BreadcrumbJsonLd lang={params.lang} />
        {/* Structured data for the article */}
        <ArticleJsonLd
          title={page.data.title}
          description={page.data.description ?? page.data.title}
          datePublished={new Date(
            page.data.date ?? page.file.name
          ).toISOString()}
          dateModified={new Date(
            page.data.lastModified ?? page.data.date ?? page.file.name
          ).toISOString()}
          authorName={page.data.author}
          url={canonical}
          imageUrl={(page.data as Partial<{ image?: string }>).image}
        />
        <div className="container px-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">
            {page.data.title}
          </h2>
          <p className="mt-2 text-lg/8 opacity-60">{page.data.description}</p>
        </div>
        <article className="container flex flex-col px-0 py-8 lg:flex-row">
          <div className="prose min-w-0 flex-1 lg:pr-8">
            <InlineTOC className="mb-8" items={toc} />
            <Mdx
              components={{
                ...defaultMdxComponents,
                File,
                Files,
                Folder,
                Tabs,
                Tab,
              }}
            />
          </div>
          <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
            <div>
              <p className="mb-1 text-fd-muted-foreground">{t.writtenBy}</p>
              <p className="font-medium">{page.data.author}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-fd-muted-foreground">{t.at}</p>
              <p className="font-medium">
                {displayDate(
                  new Date(page.data.date ?? page.file.name),
                  params.lang
                )}
              </p>
            </div>
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

  const canonical = new URL(
    localizeUrl(`/blog/${params.slug}`, params.lang),
    baseUrl
  ).toString();

  const publishedTime = new Date(
    page.data.date ?? page.file.name
  ).toISOString();
  const modifiedTime = new Date(
    (page.data as Partial<{ lastModified?: string | Date }>).lastModified ??
      page.data.date ??
      page.file.name
  ).toISOString();
  const image = (page.data as Partial<{ image?: string }>).image;
  const tags = (page.data as Partial<{ tags?: string[] }>).tags;

  const base = createBlogMetadata({
    title: page.data.title,
    description: page.data.description ?? page.data.title,
    publishedTime,
    modifiedTime,
    authors: [page.data.author],
    tags,
    image,
    url: canonical,
  });

  return {
    ...base,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        languages.map((l) => [l, localizeUrl(`/blog/${params.slug}`, l)])
      ),
    },
  };
}
