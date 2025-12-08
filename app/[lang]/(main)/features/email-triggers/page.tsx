import {
  ServerIcon,
  HeadphonesIcon,
  ShoppingCartIcon,
  MailIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Language, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  FeatureHero,
  FeatureSteps,
  FeatureCTA,
  RelatedFeatures,
} from "@/components/features";
import { emailTriggersI18n, relatedFeatures } from "@/lib/features-i18n";
import { FeatureJsonLd, HowToJsonLd } from "@/components/JsonLd";

const iconMap: Record<string, typeof ServerIcon> = {
  server: ServerIcon,
  headphones: HeadphonesIcon,
  "shopping-cart": ShoppingCartIcon,
  mail: MailIcon,
};

export default async function EmailTriggersPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = emailTriggersI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/email-triggers", lang),
    baseUrl
  ).toString();

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
        totalTime="PT3M"
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
        accentColor="green"
      />

      {/* How It Works */}
      <FeatureSteps
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        steps={t.howItWorks.steps}
        accentColor="green"
      />

      {/* Email Variables */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.variables.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.variables.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {t.variables.items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
                >
                  <code className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1.5 text-sm font-mono text-green-700 dark:text-green-400">
                    {item.variable}
                  </code>
                  <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.useCases.title}
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {t.useCases.items.map((item, index) => {
              const Icon = iconMap[item.icon] || MailIcon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                      <Icon className="h-6 w-6 text-green-600" />
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

      {/* Email Example */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {lang === "en"
                ? "Simple as Sending an Email"
                : lang === "zh"
                  ? "简单如发送邮件"
                  : lang === "es"
                    ? "Simple como Enviar un Email"
                    : lang === "fr"
                      ? "Simple comme Envoyer un Email"
                      : lang === "ja"
                        ? "メールを送るだけ"
                        : "So Einfach wie eine E-Mail"}
            </h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xl">
              {/* Email header */}
              <div className="border-b border-neutral-200 dark:border-neutral-800 p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="font-medium text-neutral-500">To:</span>
                    <span className="text-green-600 dark:text-green-400">
                      channel-abc123@trigger.echobell.one
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-neutral-500">Subject:</span>
                    <span>Server Alert: High CPU Usage</span>
                  </div>
                </div>
              </div>
              {/* Email body */}
              <div className="p-6">
                <p className="text-neutral-600 dark:text-neutral-400">
                  CPU usage on web-01 has exceeded 90%. Please investigate
                  immediately.
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-neutral-500">
              {lang === "en"
                ? "↓ Instantly becomes a notification ↓"
                : lang === "zh"
                  ? "↓ 立即变成通知 ↓"
                  : lang === "es"
                    ? "↓ Se convierte en notificación al instante ↓"
                    : lang === "fr"
                      ? "↓ Devient instantanément une notification ↓"
                      : lang === "ja"
                        ? "↓ 即座に通知になります ↓"
                        : "↓ Wird sofort zur Benachrichtigung ↓"}
            </p>
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
        accentColor="green"
      />

      {/* Related Features */}
      <RelatedFeatures
        lang={lang}
        current="emailTriggers"
        related={relatedFeatures.emailTriggers}
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
  const t = emailTriggersI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/email-triggers", lang),
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
        "x-default": localizeUrl("/features/email-triggers", "en"),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/features/email-triggers", l)])
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
