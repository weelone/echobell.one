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
import { Language } from "@/lib/i18n";

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
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
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const canonical = new URL(page.url, baseUrl).toString();

  // Build OG image URL using API route
  const ogImageParams = new URLSearchParams({
    title: page.data.title,
    description: page.data.description ?? "",
    type: "docs",
    lang: params.lang as Language,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      images: [{ url: ogImageUrl }],
    },
  });
}
