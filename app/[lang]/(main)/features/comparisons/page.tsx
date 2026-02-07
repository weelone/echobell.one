import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon, ScaleIcon } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FeatureJsonLd } from "@/components/JsonLd";
import { Language, languages, localizeUrl } from "@/lib/i18n";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { getComparisonsIndexData } from "@/lib/competitor-comparisons";
import { APP_STORE_LINK } from "@/constants";

export default async function ComparisonsIndexPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getComparisonsIndexData(lang);
  const canonical = new URL(
    localizeUrl("/features/comparisons", lang),
    baseUrl
  ).toString();

  const breadcrumbFeaturesLabel = lang === "zh" ? "功能" : "Features";
  const breadcrumbCurrentLabel = lang === "zh" ? "竞品对比" : "Comparisons";

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: breadcrumbFeaturesLabel,
              href: localizeUrl("/features", lang),
            },
            {
              label: breadcrumbCurrentLabel,
              href: localizeUrl("/features/comparisons", lang),
              isCurrentPage: true,
            },
          ]}
        />
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
              <ScaleIcon className="mr-1.5 h-4 w-4" />
              {t.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              {t.hero.subtitle}
            </p>
            <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-500">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.cardsTitle}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.cardsDescription}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.cards.map((card) => (
                <Link
                  key={card.slug}
                  href={localizeUrl(`/features/comparisons/${card.slug}`, lang)}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {card.competitorName}
                  </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug">
                  {card.tagline}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {card.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {card.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600 dark:text-orange-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {lang === "zh" ? "查看完整对比" : "View full comparison"}
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.methodology.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.methodology.description}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {t.methodology.items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-24 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.cta.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={APP_STORE_LINK}
                target="_blank"
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                {t.cta.primary}
              </Link>
              <Link
                href={localizeUrl("/docs", lang)}
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getComparisonsIndexData(lang);
  const canonical = new URL(
    localizeUrl("/features/comparisons", lang),
    baseUrl
  ).toString();

  const ogImageParams = new URLSearchParams({
    title: t.meta.title,
    description: t.meta.description,
    type: "default",
    lang,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl("/features/comparisons", "en"),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/features/comparisons", l)])
        ),
      },
    },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      images: [{ url: ogImageUrl, alt: t.meta.title }],
    },
  });
}
