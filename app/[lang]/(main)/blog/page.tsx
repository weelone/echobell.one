import Link from "next/link";
import { blog } from "@/lib/source";
import {
  Language,
  uiDictionary,
  languages,
  localizeUrl,
  i18n,
} from "@/lib/i18n";
import { displayDate } from "@/lib/date";
import { Metadata } from "next";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { Breadcrumb, BreadcrumbJsonLd } from "@/components/Breadcrumb";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang].blog;

  const posts = [...blog.getPages(lang)].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb lang={lang} />
        <BreadcrumbJsonLd lang={lang} />
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-2 text-lg/8 opacity-60">{t.description}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-neutral-600/20 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.url}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={displayDate(post.data.date, lang)}
                  className="opacity-60"
                >
                  {displayDate(post.data.date, lang)}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold opacity-90 group-hover:opacity-60">
                  <Link href={post.url}>
                    <span className="absolute inset-0" />
                    {post.data.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 opacity-60">
                  {post.data.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`${post.data.author} avatar`}
                  src={post.data.authorAvatarLink}
                  className="size-10 rounded-full bg-neutral-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold opacity-90">
                    <a href={post.data.authorLink}>
                      <span className="absolute inset-0" />
                      {post.data.author}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const lang = (await params).lang;
  const t = uiDictionary[lang].blog;

  // Build OG image URL using API route
  const ogImageParams = new URLSearchParams({
    title: t.title,
    description: t.description,
    type: "blog",
    lang: lang,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: t.title,
    description: t.description,
    alternates: {
      canonical: localizeUrl("/blog", lang),
      types: {
        "application/rss+xml": localizeUrl("/blog/rss.xml", lang),
        "application/atom+xml": localizeUrl("/blog/atom.xml", lang),
      },
      languages: {
        "x-default": localizeUrl("/blog", i18n.defaultLanguage as Language),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/blog", l)])
        ),
      },
    },
    openGraph: {
      url: new URL(localizeUrl("/blog", lang), baseUrl).toString(),
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      images: [{ url: ogImageUrl }],
    },
  });
}
