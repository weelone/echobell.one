<script lang="ts">
  import {
    Volume2,
    Repeat,
    RefreshCw,
    BellRing,
    TriangleAlert,
  } from "@lucide/svelte";
  import type { Component } from "svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
  import FeatureSteps from "$lib/components/features/FeatureSteps.svelte";
  import FeatureGrid from "$lib/components/features/FeatureGrid.svelte";
  import FeatureCTA from "$lib/components/features/FeatureCTA.svelte";
  import RelatedFeatures from "$lib/components/features/RelatedFeatures.svelte";
  import { featureJsonLd, howToJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { callNotificationsI18n, relatedFeatures } from "$lib/features-i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(callNotificationsI18n[lang]);
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl("/features/call-notifications", lang))
  );

  const iconMap: Record<string, Component> = {
    "volume-2": Volume2,
    repeat: Repeat,
    "refresh-cw": RefreshCw,
    "bell-ring": BellRing,
  };

  const featureItems = $derived(
    t.features.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: iconMap[item.icon] ?? Volume2,
    }))
  );

  const incomingCallLabel: Record<Language, string> = {
    en: "Incoming Call",
    zh: "来电",
    es: "Llamada Entrante",
    fr: "Appel Entrant",
    ja: "着信",
    de: "Eingehender Anruf",
  };

  const phoneCaption: Record<Language, string> = {
    en: "Your phone rings with the notification content spoken aloud",
    zh: "您的手机会响起并朗读通知内容",
    es: "Tu teléfono suena con el contenido de la notificación en voz alta",
    fr: "Votre téléphone sonne avec le contenu de la notification lu à haute voix",
    ja: "通知内容を音声で読み上げながら電話が鳴ります",
    de: "Ihr Telefon klingelt mit dem vorgelesenen Benachrichtigungsinhalt",
  };
</script>

<div class="min-h-screen">
  <JsonLd
    data={featureJsonLd({
      name: t.meta.title,
      description: t.meta.description,
      url: canonical,
    })}
  />
  <JsonLd
    data={howToJsonLd({
      name: t.howItWorks.title,
      description: t.howItWorks.subtitle,
      steps: t.howItWorks.steps.map((step) => ({
        name: step.title,
        text: step.description,
      })),
      totalTime: "PT2M",
    })}
  />

  <div class="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
    <Breadcrumb {lang} />
  </div>

  <FeatureHero
    {lang}
    badge={t.hero.badge}
    title={t.hero.title}
    description={t.hero.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "call-notifications", "hero", lang])}
  />

  <!-- When to Use -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.whenToUse.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.whenToUse.subtitle}</p>
      </div>
      <div class="mx-auto max-w-3xl">
        <div class="space-y-4">
          {#each t.whenToUse.items as item (item.title)}
            <div
              class="flex items-start gap-4 rounded-xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black"
            >
              <div
                class={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  item.severity === "critical"
                    ? "bg-red-100 dark:bg-red-900/30"
                    : "bg-orange-100 dark:bg-orange-900/30"
                }`}
              >
                <TriangleAlert
                  class={`h-5 w-5 ${
                    item.severity === "critical"
                      ? "text-red-600"
                      : "text-orange-600"
                  }`}
                />
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <h3 class="font-semibold">{item.title}</h3>
                  <span
                    class={`rounded-full px-2 py-0.5 text-xs font-medium uppercase ${
                      item.severity === "critical"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p class="mt-1 text-sm opacity-60">{item.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <FeatureGrid
    title={t.features.title}
    subtitle={t.features.subtitle}
    features={featureItems}
    columns={2}
  />

  <section class="bg-neutral-50/70 dark:bg-neutral-900/40">
    <FeatureSteps
      {lang}
      title={t.howItWorks.title}
      subtitle={t.howItWorks.subtitle}
      steps={t.howItWorks.steps}
    />
  </section>

  <!-- Phone Animation Illustration -->
  <section class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <div class="relative mx-auto h-64 w-40">
          <div
            class="absolute inset-0 rounded-[2.5rem] border-4 border-neutral-300 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
          >
            <div
              class="mx-auto mt-4 h-1.5 w-16 rounded-full bg-neutral-200 dark:bg-neutral-700"
            ></div>
            <div class="mt-6 px-4 text-center">
              <div class="animate-pulse">
                <BellRing class="mx-auto h-12 w-12 text-red-500" />
                <p
                  class="mt-4 text-sm font-semibold text-neutral-900 dark:text-white"
                >
                  {incomingCallLabel[lang]}
                </p>
                <p class="mt-1 text-xs text-neutral-500">Echobell</p>
              </div>
            </div>
            <div
              class="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-neutral-200 dark:bg-neutral-700"
            ></div>
          </div>
        </div>
        <p class="mt-8 text-lg opacity-60">{phoneCaption[lang]}</p>
      </div>
    </div>
  </section>

  <FeatureCTA
    {lang}
    title={t.cta.title}
    description={t.cta.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "call-notifications", "cta", lang])}
  />

  <RelatedFeatures
    {lang}
    current="callNotifications"
    related={relatedFeatures.callNotifications}
  />
</div>
