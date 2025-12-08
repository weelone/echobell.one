import {
  ServerIcon,
  ShoppingCartIcon,
  CpuIcon,
  SmartphoneIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Language, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  FeatureHero,
  FeatureSteps,
  FeatureCTA,
  CodeBlock,
  RelatedFeatures,
} from "@/components/features";
import { webhooksI18n, relatedFeatures } from "@/lib/features-i18n";
import { FeatureJsonLd, HowToJsonLd } from "@/components/JsonLd";

export default async function WebhooksPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = webhooksI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/webhooks", lang),
    baseUrl
  ).toString();

  const getCode = `curl "https://hook.echobell.one/t/YOUR_TOKEN?server=web-01&status=down"`;
  const postCode = `curl -X POST "https://hook.echobell.one/t/YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"server": "web-01", "cpu": 85, "status": "warning"}'`;

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />
      <HowToJsonLd
        name={t.howItWorks.title}
        description={t.howItWorks.subtitle}
        steps={t.howItWorks.steps.map((step) => ({
          name: step.title,
          text: step.description,
        }))}
        totalTime="PT5M"
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
        accentColor="orange"
      />

      {/* How It Works */}
      <FeatureSteps
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
        accentColor="orange"
      />

      {/* Code Examples */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.codeExamples.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.codeExamples.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
            <CodeBlock
              title={t.codeExamples.getRequest}
              code={getCode}
              language="bash"
            />
            <CodeBlock
              title={t.codeExamples.postRequest}
              code={postCode}
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* Variables */}
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
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4">
              {t.variables.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4"
                >
                  <code className="flex-shrink-0 rounded-lg bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 text-sm font-mono text-orange-700 dark:text-orange-400">
                    {item.variable}
                  </code>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.useCases.title}
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {t.useCases.items.map((item, index) => {
              const icons = [ServerIcon, CpuIcon, ShoppingCartIcon, SmartphoneIcon];
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
        accentColor="orange"
      />

      {/* Related Features */}
      <RelatedFeatures
        lang={lang}
        current="webhooks"
        related={relatedFeatures.webhooks}
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
  const t = webhooksI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/webhooks", lang),
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
        "x-default": localizeUrl("/features/webhooks", "en"),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/features/webhooks", l)])
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
