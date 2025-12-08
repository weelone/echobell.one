import {
  Volume2Icon,
  RepeatIcon,
  RefreshCwIcon,
  BellRingIcon,
  AlertTriangleIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Language, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  FeatureHero,
  FeatureSteps,
  FeatureCTA,
  FeatureGrid,
  RelatedFeatures,
} from "@/components/features";
import { callNotificationsI18n, relatedFeatures } from "@/lib/features-i18n";
import { FeatureJsonLd, HowToJsonLd } from "@/components/JsonLd";

const iconMap: Record<string, typeof Volume2Icon> = {
  "volume-2": Volume2Icon,
  repeat: RepeatIcon,
  "refresh-cw": RefreshCwIcon,
  "bell-ring": BellRingIcon,
};

export default async function CallNotificationsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = callNotificationsI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/call-notifications", lang),
    baseUrl
  ).toString();

  const featureItems = t.features.items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: iconMap[item.icon] || Volume2Icon,
  }));

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
        totalTime="PT2M"
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
        accentColor="red"
      />

      {/* When to Use */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.whenToUse.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {t.whenToUse.subtitle}
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {t.whenToUse.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      item.severity === "critical"
                        ? "bg-red-100 dark:bg-red-900/30"
                        : "bg-orange-100 dark:bg-orange-900/30"
                    }`}
                  >
                    <AlertTriangleIcon
                      className={`h-5 w-5 ${
                        item.severity === "critical"
                          ? "text-red-600"
                          : "text-orange-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium uppercase ${
                          item.severity === "critical"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        }`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <FeatureGrid
        title={t.features.title}
        subtitle={t.features.subtitle}
        features={featureItems}
        columns={2}
        accentColor="red"
      />

      {/* How It Works */}
      <section className="bg-neutral-50 dark:bg-neutral-900/50">
        <FeatureSteps
          title={t.howItWorks.title}
          subtitle={t.howItWorks.subtitle}
          steps={t.howItWorks.steps}
          accentColor="red"
        />
      </section>

      {/* Phone Animation Illustration */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative mx-auto h-64 w-40">
              {/* Phone shape */}
              <div className="absolute inset-0 rounded-[2.5rem] border-4 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-xl">
                {/* Speaker */}
                <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                {/* Screen content */}
                <div className="mt-6 px-4 text-center">
                  <div className="animate-pulse">
                    <BellRingIcon className="mx-auto h-12 w-12 text-red-500" />
                    <p className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">
                      {lang === "en"
                        ? "Incoming Call"
                        : lang === "zh"
                          ? "来电"
                          : lang === "es"
                            ? "Llamada Entrante"
                            : lang === "fr"
                              ? "Appel Entrant"
                              : lang === "ja"
                                ? "着信"
                                : "Eingehender Anruf"}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">Echobell</p>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
              </div>
            </div>
            <p className="mt-8 text-lg text-neutral-600 dark:text-neutral-400">
              {lang === "en"
                ? "Your phone rings with the notification content spoken aloud"
                : lang === "zh"
                  ? "您的手机会响起并朗读通知内容"
                  : lang === "es"
                    ? "Tu teléfono suena con el contenido de la notificación en voz alta"
                    : lang === "fr"
                      ? "Votre téléphone sonne avec le contenu de la notification lu à haute voix"
                      : lang === "ja"
                        ? "通知内容を音声で読み上げながら電話が鳴ります"
                        : "Ihr Telefon klingelt mit dem vorgelesenen Benachrichtigungsinhalt"}
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
        accentColor="red"
      />

      {/* Related Features */}
      <RelatedFeatures
        lang={lang}
        current="callNotifications"
        related={relatedFeatures.callNotifications}
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
  const t = callNotificationsI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/call-notifications", lang),
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
        "x-default": localizeUrl("/features/call-notifications", "en"),
        ...Object.fromEntries(
          languages.map((l) => [
            l,
            localizeUrl("/features/call-notifications", l),
          ])
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
