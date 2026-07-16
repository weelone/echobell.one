<script lang="ts">
  import {
    Webhook,
    Mail,
    Phone,
    Folders,
    FileText,
    Scale,
    ArrowRight,
    Zap,
    Shield,
    Users,
  } from "@lucide/svelte";
  import type { Component } from "svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import { featureJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import {
    featuresIndexI18n,
    webhooksI18n,
    emailTriggersI18n,
    callNotificationsI18n,
    channelsI18n,
    templatesI18n,
  } from "$lib/features-i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(featuresIndexI18n[lang]);
  const canonical = $derived(toAbsoluteUrl(localizeUrl("/features", lang)));

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

  type FeatureCardKey =
    | "webhooks"
    | "emailTriggers"
    | "callNotifications"
    | "channels"
    | "templates"
    | "comparisons";

  const features: { key: FeatureCardKey; href: string; icon: Component }[] = [
    { key: "webhooks", href: "/features/webhooks", icon: Webhook },
    { key: "emailTriggers", href: "/features/email-triggers", icon: Mail },
    {
      key: "callNotifications",
      href: "/features/call-notifications",
      icon: Phone,
    },
    { key: "channels", href: "/features/channels", icon: Folders },
    { key: "templates", href: "/features/templates", icon: FileText },
    { key: "comparisons", href: "/features/comparisons", icon: Scale },
  ];

  function getFeatureTranslation(key: FeatureCardKey, l: Language) {
    if (key === "comparisons") return comparisonFeatureCardText[l];
    const translations = {
      webhooks: webhooksI18n,
      emailTriggers: emailTriggersI18n,
      callNotifications: callNotificationsI18n,
      channels: channelsI18n,
      templates: templatesI18n,
    };
    return translations[key][l];
  }

  const whyTitle: Record<Language, string> = {
    en: "Why Choose Echobell?",
    zh: "为什么选择 Echobell？",
    es: "¿Por qué Elegir Echobell?",
    fr: "Pourquoi Choisir Echobell ?",
    ja: "なぜ Echobell を選ぶのか？",
    de: "Warum Echobell Wählen?",
  };

  const whyItems: {
    icon: Component;
    title: Record<Language, string>;
    description: Record<Language, string>;
  }[] = [
    {
      icon: Zap,
      title: {
        en: "Instant Delivery",
        zh: "即时送达",
        es: "Entrega Instantánea",
        fr: "Livraison Instantanée",
        ja: "即座の配信",
        de: "Sofortige Zustellung",
      },
      description: {
        en: "Notifications arrive within seconds of triggering",
        zh: "通知在触发后几秒内到达",
        es: "Las notificaciones llegan en segundos",
        fr: "Les notifications arrivent en quelques secondes",
        ja: "トリガー後数秒で通知が届く",
        de: "Benachrichtigungen kommen innerhalb von Sekunden an",
      },
    },
    {
      icon: Shield,
      title: {
        en: "Privacy First",
        zh: "隐私优先",
        es: "Privacidad Primero",
        fr: "Confidentialité d'Abord",
        ja: "プライバシーファースト",
        de: "Datenschutz Zuerst",
      },
      description: {
        en: "Your notification data stays on your device",
        zh: "您的通知数据保留在您的设备上",
        es: "Tus datos de notificación permanecen en tu dispositivo",
        fr: "Vos données de notification restent sur votre appareil",
        ja: "通知データはデバイスに保存",
        de: "Ihre Benachrichtigungsdaten bleiben auf Ihrem Gerät",
      },
    },
    {
      icon: Users,
      title: {
        en: "Team Ready",
        zh: "团队就绪",
        es: "Listo para Equipos",
        fr: "Prêt pour les Équipes",
        ja: "チーム対応",
        de: "Team-Bereit",
      },
      description: {
        en: "Share channels with your team effortlessly",
        zh: "轻松与团队共享频道",
        es: "Comparte canales con tu equipo fácilmente",
        fr: "Partagez des canaux avec votre équipe facilement",
        ja: "チームとチャンネルを簡単に共有",
        de: "Teilen Sie Kanäle mühelos mit Ihrem Team",
      },
    },
  ];

  const ctaTitle: Record<Language, string> = {
    en: "Ready to Get Started?",
    zh: "准备好开始了吗？",
    es: "¿Listo para Empezar?",
    fr: "Prêt à Commencer ?",
    ja: "始める準備はできましたか？",
    de: "Bereit zum Starten?",
  };

  const ctaDescription: Record<Language, string> = {
    en: "Download Echobell and set up your first notification channel in minutes.",
    zh: "下载 Echobell，几分钟内设置您的第一个通知频道。",
    es: "Descarga Echobell y configura tu primer canal de notificación en minutos.",
    fr: "Téléchargez Echobell et configurez votre premier canal de notification en quelques minutes.",
    ja: "Echobell をダウンロードして、数分で最初の通知チャンネルを設定しましょう。",
    de: "Laden Sie Echobell herunter und richten Sie Ihren ersten Benachrichtigungskanal in Minuten ein.",
  };
</script>

<div class="min-h-screen">
  <JsonLd
    data={featureJsonLd({
      name: t.title,
      description: t.description,
      url: canonical,
    })}
  />

  <div class="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
    <Breadcrumb {lang} />
  </div>

  <!-- Hero -->
  <section class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1
          class="text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl lg:text-6xl"
        >
          {t.title}
        </h1>
        <p class="mt-6 text-xl opacity-60">{t.subtitle}</p>
        <p class="mt-4 text-lg opacity-50">{t.description}</p>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each features as { key, href, icon: Icon } (key)}
          {@const featureT = getFeatureTranslation(key, lang)}
          <div class="relative flex">
            <div
              class="absolute inset-px rounded-3xl bg-neutral-50 dark:bg-neutral-900/50"
            ></div>
            <a
              href={localizeUrl(href, lang)}
              class="group relative flex w-full flex-col overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1"
            >
              <div
                class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10"
              >
                <Icon class="h-7 w-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 class="mt-6 text-xl font-semibold tracking-tight opacity-90">
                {featureT.meta.title}
              </h2>
              <p class="mt-3 flex-1 text-sm/6 opacity-60">
                {featureT.meta.description}
              </p>
              <div
                class="mt-6 flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400"
              >
                {t.learnMore}
                <ArrowRight
                  class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
            <div
              class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5"
            ></div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Why Echobell -->
  <section class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {whyTitle[lang]}
        </h2>
      </div>
      <div class="grid gap-6 sm:grid-cols-3">
        {#each whyItems as item (item.title.en)}
          {@const Icon = item.icon}
          <div class="relative flex">
            <div
              class="absolute inset-px rounded-3xl bg-neutral-50 dark:bg-neutral-900/50"
            ></div>
            <div class="relative w-full rounded-3xl p-8 text-center">
              <div
                class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10"
              >
                <Icon class="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 class="mt-6 text-lg font-semibold tracking-tight opacity-90">
                {item.title[lang]}
              </h3>
              <p class="mt-2 text-sm/6 opacity-60">{item.description[lang]}</p>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5"
            ></div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="border-t border-neutral-200 py-24 sm:py-32 dark:border-neutral-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {ctaTitle[lang]}
        </h2>
        <p class="mt-6 text-lg opacity-60">{ctaDescription[lang]}</p>
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={getAppStoreLink(["features", "index", "cta", lang])}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-500"
          >
            {t.getStarted}
          </a>
          <a
            href={getGooglePlayLink()}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border-2 border-neutral-300 px-8 py-3 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
          >
            Google Play
          </a>
          <a
            href={localizeUrl("/docs", lang)}
            class="rounded-full border-2 border-neutral-300 px-8 py-3 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
          >
            {t.learnMore}
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
