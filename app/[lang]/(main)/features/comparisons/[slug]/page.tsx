import Link from "next/link";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FeatureHero } from "@/components/features";
import { FAQJsonLd, FeatureJsonLd } from "@/components/JsonLd";
import { Language, languages, localizeUrl } from "@/lib/i18n";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { APP_STORE_LINK } from "@/constants";
import {
  competitorSlugs,
  getComparisonPageData,
  getComparisonsIndexData,
  isCompetitorSlug,
} from "@/lib/competitor-comparisons";

const accentColorMap = {
  pagerduty: "orange",
  opsgenie: "blue",
  "better-stack": "green",
  pushover: "purple",
  ifttt: "red",
} as const;

type AccentColor = (typeof accentColorMap)[keyof typeof accentColorMap];

const accentToneMap: Record<
  AccentColor,
  {
    text: string;
    softBg: string;
    softBorder: string;
    solidBadge: string;
    solidButton: string;
  }
> = {
  orange: {
    text: "text-orange-600 dark:text-orange-400",
    softBg: "bg-orange-50 dark:bg-orange-950/20",
    softBorder: "border-orange-200 dark:border-orange-800",
    solidBadge: "bg-orange-600",
    solidButton: "bg-orange-600 hover:bg-orange-500",
  },
  blue: {
    text: "text-blue-600 dark:text-blue-400",
    softBg: "bg-blue-50 dark:bg-blue-950/20",
    softBorder: "border-blue-200 dark:border-blue-800",
    solidBadge: "bg-blue-600",
    solidButton: "bg-blue-600 hover:bg-blue-500",
  },
  green: {
    text: "text-green-600 dark:text-green-400",
    softBg: "bg-green-50 dark:bg-green-950/20",
    softBorder: "border-green-200 dark:border-green-800",
    solidBadge: "bg-green-600",
    solidButton: "bg-green-600 hover:bg-green-500",
  },
  purple: {
    text: "text-purple-600 dark:text-purple-400",
    softBg: "bg-purple-50 dark:bg-purple-950/20",
    softBorder: "border-purple-200 dark:border-purple-800",
    solidBadge: "bg-purple-600",
    solidButton: "bg-purple-600 hover:bg-purple-500",
  },
  red: {
    text: "text-red-600 dark:text-red-400",
    softBg: "bg-red-50 dark:bg-red-950/20",
    softBorder: "border-red-200 dark:border-red-800",
    solidBadge: "bg-red-600",
    solidButton: "bg-red-600 hover:bg-red-500",
  },
};

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ lang: Language; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isCompetitorSlug(slug)) {
    notFound();
  }

  const t = getComparisonPageData(slug, lang);
  const indexData = getComparisonsIndexData(lang);
  const accentColor = accentColorMap[slug];
  const accentTone = accentToneMap[accentColor];
  const canonical = new URL(
    localizeUrl(`/features/comparisons/${slug}`, lang),
    baseUrl
  ).toString();

  const breadcrumbFeaturesLabel = lang === "zh" ? "功能" : "Features";
  const breadcrumbComparisonsLabel = lang === "zh" ? "竞品对比" : "Comparisons";
  const relatedTitle = lang === "zh" ? "其他竞品对比" : "Other comparisons";
  const differenceTitle =
    lang === "zh" ? "Echobell 的核心优势" : "Echobell advantage";

  const relatedCards = indexData.cards.filter((card) => card.slug !== slug);

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />
      <FAQJsonLd faqs={t.faq.items} />

      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb
          lang={lang}
          customItems={[
            {
              label: breadcrumbFeaturesLabel,
              href: localizeUrl("/features", lang),
            },
            {
              label: breadcrumbComparisonsLabel,
              href: localizeUrl("/features/comparisons", lang),
            },
            {
              label: t.competitorName,
              href: localizeUrl(`/features/comparisons/${slug}`, lang),
              isCurrentPage: true,
            },
          ]}
        />
      </div>

      <FeatureHero
        lang={lang}
        badge={t.hero.badge}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={t.cta.primary}
        secondaryCta={t.cta.secondary}
        accentColor={accentColor}
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
              <p
                className={`text-sm font-semibold uppercase tracking-wider ${accentTone.text}`}
              >
                {lang === "zh" ? "一句话结论" : "Quick take"}
              </p>
              <p className="mt-3 text-lg font-medium leading-relaxed">
                {t.quickSummary}
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                {t.decisionHint}
              </p>
            </div>
            <div
              className={`rounded-2xl border p-8 ${accentTone.softBorder} ${accentTone.softBg}`}
            >
              <p className={`text-sm font-semibold uppercase tracking-wider ${accentTone.text}`}>
                {lang === "zh" ? "对比对象" : "Compared against"}
              </p>
              <p className="mt-3 text-2xl font-bold">{t.competitorName}</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {lang === "zh"
                  ? "从实际值班流程与告警落地效率出发。"
                  : "Benchmarked from real on-call workflows and alert outcomes."}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.atAGlance.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="font-semibold">{item.label}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className={`font-medium ${accentTone.text}`}>Echobell</p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      {item.echobell}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-700 dark:text-neutral-200">
                      {t.competitorName}
                    </p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      {item.competitor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.differences.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.differences.description}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <div className="grid grid-cols-4 border-b border-neutral-200 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
              <div className="px-4 py-3">{lang === "zh" ? "维度" : "Dimension"}</div>
              <div className="px-4 py-3">Echobell</div>
              <div className="px-4 py-3">{t.competitorName}</div>
              <div className="px-4 py-3">{differenceTitle}</div>
            </div>
            {t.differences.items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-3 border-b border-neutral-200 px-4 py-4 last:border-b-0 md:grid-cols-4 dark:border-neutral-800"
              >
                <div className="text-sm font-semibold">{item.dimension}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.echobell}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.competitor}
                </div>
                <div className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2Icon
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 ${accentTone.text}`}
                  />
                  <span>{item.advantage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.advantages.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.advantages.description}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {t.advantages.items.map((item, index) => (
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

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.scenarios.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.scenarios.description}
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {t.scenarios.items.map((item, index) => (
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.migration.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.migration.description}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {t.migration.steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white ${accentTone.solidBadge}`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.faq.title}
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {t.faq.items.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.answer}
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
                className={`rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors ${accentTone.solidButton}`}
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

      <section className="border-t border-neutral-200 py-16 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="mb-6 text-lg font-semibold text-neutral-600 dark:text-neutral-400">
            {relatedTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCards.map((card) => (
              <Link
                key={card.slug}
                href={localizeUrl(`/features/comparisons/${card.slug}`, lang)}
                className="group rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {card.competitorName}
                </p>
                <p className="mt-1 font-medium">{card.tagline}</p>
                <div
                  className={`mt-4 flex items-center text-sm font-semibold ${accentTone.text}`}
                >
                  {lang === "zh" ? "继续查看" : "Continue reading"}
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    competitorSlugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isCompetitorSlug(slug)) {
    return {};
  }

  const t = getComparisonPageData(slug, lang);
  const canonical = new URL(
    localizeUrl(`/features/comparisons/${slug}`, lang),
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
        "x-default": localizeUrl(`/features/comparisons/${slug}`, "en"),
        ...Object.fromEntries(
          languages.map((l) => [
            l,
            localizeUrl(`/features/comparisons/${slug}`, l),
          ])
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
