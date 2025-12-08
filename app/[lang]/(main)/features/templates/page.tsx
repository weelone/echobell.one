import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import { Language, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  FeatureHero,
  FeatureCTA,
  RelatedFeatures,
} from "@/components/features";
import { templatesI18n, relatedFeatures } from "@/lib/features-i18n";
import { FeatureJsonLd } from "@/components/JsonLd";

export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = templatesI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/templates", lang),
    baseUrl
  ).toString();

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb lang={lang} />
      </div>

      {/* Hero */}
      <FeatureHero
        lang={lang}
        badge={t.hero.badge}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={t.cta.primary}
        secondaryCta={t.cta.secondary}
        accentColor="purple"
      />

      {/* Template Examples */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.variables.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.variables.description}
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-8">
            {t.variables.examples.map((example, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden"
              >
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                  <p className="text-sm text-neutral-500 mb-2">
                    {t.variables.subtitle}
                  </p>
                  <code className="block text-lg font-mono text-purple-600 dark:text-purple-400">
                    {example.template}
                  </code>
                </div>
                <div className="p-6 bg-neutral-50 dark:bg-neutral-800/50 flex items-center gap-4">
                  <ArrowRightIcon className="h-5 w-5 text-neutral-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">
                      {lang === "en"
                        ? "Result"
                        : lang === "zh"
                          ? "结果"
                          : lang === "es"
                            ? "Resultado"
                            : lang === "fr"
                              ? "Résultat"
                              : lang === "ja"
                                ? "結果"
                                : "Ergebnis"}
                    </p>
                    <p className="font-medium">{example.result}</p>
                    <p className="text-sm text-neutral-500 mt-2">
                      {example.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expressions */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.expressions.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.expressions.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {t.expressions.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4"
                >
                  <code className="block text-sm font-mono text-purple-600 dark:text-purple-400 mb-2">
                    {item.expression}
                  </code>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.conditions.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.conditions.description}
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-neutral-900 p-8 text-center">
              <p className="text-sm text-neutral-500 mb-4">
                {lang === "en"
                  ? "Example Condition"
                  : lang === "zh"
                    ? "示例条件"
                    : lang === "es"
                      ? "Condición de Ejemplo"
                      : lang === "fr"
                        ? "Exemple de Condition"
                        : lang === "ja"
                          ? "条件の例"
                          : "Beispielbedingung"}
              </p>
              <code className="block text-xl font-mono text-purple-600 dark:text-purple-400 mb-6">
                {t.conditions.example.condition}
              </code>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t.conditions.example.explanation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Webhook data */}
              <div className="w-full md:w-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
                <p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">
                  {lang === "en"
                    ? "Incoming Data"
                    : lang === "zh"
                      ? "传入数据"
                      : "Datos Entrantes"}
                </p>
                <pre className="text-sm font-mono text-neutral-700 dark:text-neutral-300">
                  {`{
  "server": "web-01",
  "cpu": 92,
  "status": "critical"
}`}
                </pre>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRightIcon className="h-8 w-8 text-purple-500 rotate-90 md:rotate-0" />
              </div>

              {/* Template */}
              <div className="w-full md:w-auto rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20 p-6">
                <p className="text-xs text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wider">
                  {lang === "en"
                    ? "Template"
                    : lang === "zh"
                      ? "模板"
                      : "Plantilla"}
                </p>
                <code className="text-sm font-mono text-purple-700 dark:text-purple-300">
                  {"{{server}}: {{status}} ({{cpu}}%)"}
                </code>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ArrowRightIcon className="h-8 w-8 text-purple-500 rotate-90 md:rotate-0" />
              </div>

              {/* Result */}
              <div className="w-full md:w-auto rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-6">
                <p className="text-xs text-green-600 dark:text-green-400 mb-2 uppercase tracking-wider">
                  {lang === "en"
                    ? "Notification"
                    : lang === "zh"
                      ? "通知"
                      : "Notificación"}
                </p>
                <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                  web-01: critical (92%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FeatureCTA
        lang={lang}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={t.cta.primary}
        secondaryCta={t.cta.secondary}
        accentColor="purple"
      />

      {/* Related Features */}
      <RelatedFeatures
        lang={lang}
        current="templates"
        related={relatedFeatures.templates}
      />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = templatesI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/templates", lang),
    baseUrl
  ).toString();

  const ogImageParams = new URLSearchParams({
    title: t.meta.title,
    description: t.meta.description,
    type: "default",
    lang: lang,
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
        "x-default": localizeUrl("/features/templates", "en"),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/features/templates", l)])
        ),
      },
    },
    openGraph: {
      url: canonical,
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: t.meta.title },
      ],
    },
    twitter: {
      images: [{ url: ogImageUrl, alt: t.meta.title }],
    },
  });
}
