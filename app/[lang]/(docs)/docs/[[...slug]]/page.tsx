import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Language, languages } from "@/lib/i18n";

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const data = page.data;
  const MDXContent = data.body;

  return (
    <DocsPage toc={data.toc} full={data.full}>
      <DocsTitle>{data.title}</DocsTitle>
      <DocsDescription>{data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            // you can add other MDX components here
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const params = [];
  for (const lang of languages) {
    const pages = source.getPages(lang);
    for (const page of pages) {
      params.push({
        lang,
        slug: page.slugs,
      });
    }
  }
  return params;
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const canonical = new URL(page.url, baseUrl).toString();
  const slugPath = params.slug ? `/docs/${params.slug.join("/")}` : "/docs";

  const data = page.data;

  // Build OG image URL using API route
  const ogImageParams = new URLSearchParams({
    title: data.title ?? "",
    description: data.description ?? "",
    type: "docs",
    lang: params.lang as Language,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: data.title,
    description: data.description,
    alternates: {
      canonical,
      languages: {
        "x-default": `/en${slugPath}`,
        ...Object.fromEntries(languages.map((l) => [l, `/${l}${slugPath}`])),
      },
    },
    openGraph: {
      url: canonical,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      images: [{ url: ogImageUrl, alt: data.title }],
    },
  });
}
