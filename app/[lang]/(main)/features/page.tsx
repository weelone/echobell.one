import Link from "next/link";
import {
  WebhookIcon,
  MailIcon,
  PhoneIcon,
  FoldersIcon,
  FileTextIcon,
  ScaleIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Language, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  featuresIndexI18n,
  webhooksI18n,
  emailTriggersI18n,
  callNotificationsI18n,
  channelsI18n,
  templatesI18n,
} from "@/lib/features-i18n";
import { FeatureJsonLd } from "@/components/JsonLd";
import { APP_STORE_LINK } from "@/constants";

const features = [
  {
    key: "webhooks" as const,
    href: "/features/webhooks",
    icon: WebhookIcon,
    color: "orange",
  },
  {
    key: "emailTriggers" as const,
    href: "/features/email-triggers",
    icon: MailIcon,
    color: "green",
  },
  {
    key: "callNotifications" as const,
    href: "/features/call-notifications",
    icon: PhoneIcon,
    color: "red",
  },
  {
    key: "channels" as const,
    href: "/features/channels",
    icon: FoldersIcon,
    color: "blue",
  },
  {
    key: "templates" as const,
    href: "/features/templates",
    icon: FileTextIcon,
    color: "purple",
  },
  {
    key: "comparisons" as const,
    href: "/features/comparisons",
    icon: ScaleIcon,
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
  },
  red: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-600 dark:text-red-400",
  },
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
};

const comparisonFeatureCardText: Record<
  Language,
  { meta: { title: string; description: string } }
> = {
  en: {
    meta: {
      title: "Competitor Comparisons",
      description:
        "Compare Echobell with PagerDuty, Opsgenie, Better Stack, Pushover, and IFTTT to choose the best-fit alerting workflow.",
    },
  },
  zh: {
    meta: {
      title: "竞品对比",
      description:
        "查看 Echobell 与 PagerDuty、Opsgenie、Better Stack、Pushover、IFTTT 的详细对比，快速完成选型。",
    },
  },
  es: {
    meta: {
      title: "Comparativas con Competidores",
      description:
        "Compara Echobell con PagerDuty, Opsgenie, Better Stack, Pushover e IFTTT para elegir el flujo de alertas adecuado.",
    },
  },
  fr: {
    meta: {
      title: "Comparaisons Concurrentielles",
      description:
        "Comparez Echobell avec PagerDuty, Opsgenie, Better Stack, Pushover et IFTTT pour choisir le bon flux d'alertes.",
    },
  },
  ja: {
    meta: {
      title: "競合比較",
      description:
        "Echobell と PagerDuty、Opsgenie、Better Stack、Pushover、IFTTT を比較し、最適なアラート運用を選べます。",
    },
  },
  de: {
    meta: {
      title: "Wettbewerbsvergleiche",
      description:
        "Vergleichen Sie Echobell mit PagerDuty, Opsgenie, Better Stack, Pushover und IFTTT, um den passenden Alert-Workflow zu finden.",
    },
  },
};

function getFeatureTranslation(
  key: (typeof features)[number]["key"],
  lang: Language
) {
  if (key === "comparisons") {
    return comparisonFeatureCardText[lang];
  }

  const translations = {
    webhooks: webhooksI18n,
    emailTriggers: emailTriggersI18n,
    callNotifications: callNotificationsI18n,
    channels: channelsI18n,
    templates: templatesI18n,
  };
  return translations[
    key as Exclude<(typeof features)[number]["key"], "comparisons">
  ][lang];
}

export default async function FeaturesIndexPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = featuresIndexI18n[lang];
  const canonical = new URL(localizeUrl("/features", lang), baseUrl).toString();

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.title}
        description={t.description}
        url={canonical}
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb lang={lang} />
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              {t.subtitle}
            </p>
            <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-500">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ key, href, icon: Icon, color }) => {
              const featureT = getFeatureTranslation(key, lang);
              const colors = colorClasses[color];
              return (
                <Link
                  key={key}
                  href={localizeUrl(href, lang)}
                  className="group relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}
                  >
                    <Icon className={`h-7 w-7 ${colors.text}`} />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold">
                    {featureT.meta.title}
                  </h2>
                  <p className="mt-3 flex-1 text-neutral-600 dark:text-neutral-400">
                    {featureT.meta.description}
                  </p>
                  <div
                    className={`mt-6 flex items-center text-sm font-semibold ${colors.text}`}
                  >
                    {t.learnMore}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Echobell Section */}
      <section className="bg-neutral-50/70 py-24 sm:py-32 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {lang === "en"
                ? "Why Choose Echobell?"
                : lang === "zh"
                  ? "为什么选择 Echobell？"
                  : lang === "es"
                    ? "¿Por qué Elegir Echobell?"
                    : lang === "fr"
                      ? "Pourquoi Choisir Echobell ?"
                      : lang === "ja"
                        ? "なぜ Echobell を選ぶのか？"
                        : "Warum Echobell Wählen?"}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/30">
                <ZapIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">
                {lang === "en"
                  ? "Instant Delivery"
                  : lang === "zh"
                    ? "即时送达"
                    : lang === "es"
                      ? "Entrega Instantánea"
                      : lang === "fr"
                        ? "Livraison Instantanée"
                        : lang === "ja"
                          ? "即座の配信"
                          : "Sofortige Zustellung"}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {lang === "en"
                  ? "Notifications arrive within seconds of triggering"
                  : lang === "zh"
                    ? "通知在触发后几秒内到达"
                    : lang === "es"
                      ? "Las notificaciones llegan en segundos"
                      : lang === "fr"
                        ? "Les notifications arrivent en quelques secondes"
                        : lang === "ja"
                          ? "トリガー後数秒で通知が届く"
                          : "Benachrichtigungen kommen innerhalb von Sekunden an"}
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30">
                <ShieldIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">
                {lang === "en"
                  ? "Privacy First"
                  : lang === "zh"
                    ? "隐私优先"
                    : lang === "es"
                      ? "Privacidad Primero"
                      : lang === "fr"
                        ? "Confidentialité d'Abord"
                        : lang === "ja"
                          ? "プライバシーファースト"
                          : "Datenschutz Zuerst"}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {lang === "en"
                  ? "Your notification data stays on your device"
                  : lang === "zh"
                    ? "您的通知数据保留在您的设备上"
                    : lang === "es"
                      ? "Tus datos de notificación permanecen en tu dispositivo"
                      : lang === "fr"
                        ? "Vos données de notification restent sur votre appareil"
                        : lang === "ja"
                          ? "通知データはデバイスに保存"
                          : "Ihre Benachrichtigungsdaten bleiben auf Ihrem Gerät"}
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">
                {lang === "en"
                  ? "Team Ready"
                  : lang === "zh"
                    ? "团队就绪"
                    : lang === "es"
                      ? "Listo para Equipos"
                      : lang === "fr"
                        ? "Prêt pour les Équipes"
                        : lang === "ja"
                          ? "チーム対応"
                          : "Team-Bereit"}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {lang === "en"
                  ? "Share channels with your team effortlessly"
                  : lang === "zh"
                    ? "轻松与团队共享频道"
                    : lang === "es"
                      ? "Comparte canales con tu equipo fácilmente"
                      : lang === "fr"
                        ? "Partagez des canaux avec votre équipe facilement"
                        : lang === "ja"
                          ? "チームとチャンネルを簡単に共有"
                          : "Teilen Sie Kanäle mühelos mit Ihrem Team"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-neutral-200 py-24 sm:py-32 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {lang === "en"
                ? "Ready to Get Started?"
                : lang === "zh"
                  ? "准备好开始了吗？"
                  : lang === "es"
                    ? "¿Listo para Empezar?"
                    : lang === "fr"
                      ? "Prêt à Commencer ?"
                      : lang === "ja"
                        ? "始める準備はできましたか？"
                        : "Bereit zum Starten?"}
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              {lang === "en"
                ? "Download Echobell and set up your first notification channel in minutes."
                : lang === "zh"
                  ? "下载 Echobell，几分钟内设置您的第一个通知频道。"
                  : lang === "es"
                    ? "Descarga Echobell y configura tu primer canal de notificación en minutos."
                    : lang === "fr"
                      ? "Téléchargez Echobell et configurez votre premier canal de notification en quelques minutes."
                      : lang === "ja"
                        ? "Echobell をダウンロードして、数分で最初の通知チャンネルを設定しましょう。"
                        : "Laden Sie Echobell herunter und richten Sie Ihren ersten Benachrichtigungskanal in Minuten ein."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={APP_STORE_LINK}
                target="_blank"
                className="rounded-full bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors"
              >
                {t.getStarted}
              </Link>
              <Link
                href={localizeUrl("/docs", lang)}
                className="rounded-full border-2 border-neutral-300 dark:border-neutral-700 px-8 py-3 text-sm font-semibold hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                {t.learnMore}
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
  const t = featuresIndexI18n[lang];
  const canonical = new URL(localizeUrl("/features", lang), baseUrl).toString();

  const ogImageParams = new URLSearchParams({
    title: t.title,
    description: t.subtitle,
    type: "default",
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
      canonical,
      languages: {
        "x-default": localizeUrl("/features", "en"),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/features", l)])
        ),
      },
    },
    openGraph: {
      url: canonical,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: t.title }],
    },
    twitter: {
      images: [{ url: ogImageUrl, alt: t.title }],
    },
  });
}
