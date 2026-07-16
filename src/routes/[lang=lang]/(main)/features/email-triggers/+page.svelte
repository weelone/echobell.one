<script lang="ts">
  import { Server, Headphones, ShoppingCart, Mail } from "@lucide/svelte";
  import type { Component } from "svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
  import FeatureSteps from "$lib/components/features/FeatureSteps.svelte";
  import FeatureCTA from "$lib/components/features/FeatureCTA.svelte";
  import RelatedFeatures from "$lib/components/features/RelatedFeatures.svelte";
  import { featureJsonLd, howToJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { emailTriggersI18n, relatedFeatures } from "$lib/features-i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(emailTriggersI18n[lang]);
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl("/features/email-triggers", lang))
  );

  const iconMap: Record<string, Component> = {
    server: Server,
    headphones: Headphones,
    "shopping-cart": ShoppingCart,
    mail: Mail,
  };

  const exampleTitle: Record<Language, string> = {
    en: "Simple as Sending an Email",
    zh: "简单如发送邮件",
    es: "Simple como Enviar un Email",
    fr: "Simple comme Envoyer un Email",
    ja: "メールを送るだけ",
    de: "So Einfach wie eine E-Mail",
  };

  const exampleFootnote: Record<Language, string> = {
    en: "↓ Instantly becomes a notification ↓",
    zh: "↓ 立即变成通知 ↓",
    es: "↓ Se convierte en notificación al instante ↓",
    fr: "↓ Devient instantanément une notification ↓",
    ja: "↓ 即座に通知になります ↓",
    de: "↓ Wird sofort zur Benachrichtigung ↓",
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
      totalTime: "PT3M",
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
    appStoreLink={getAppStoreLink(["features", "email-triggers", "hero", lang])}
  />

  <FeatureSteps
    title={t.howItWorks.title}
    subtitle={t.howItWorks.subtitle}
    steps={t.howItWorks.steps}
  />

  <!-- Email Variables -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.variables.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.variables.subtitle}</p>
      </div>
      <div class="mx-auto max-w-3xl">
        <div class="grid gap-4 sm:grid-cols-2">
          {#each t.variables.items as item (item.variable)}
            <div
              class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <code
                class="inline-block rounded-lg bg-orange-100 px-3 py-1.5 font-mono text-sm text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
              >
                {item.variable}
              </code>
              <p class="mt-3 opacity-60">{item.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Use Cases -->
  <section class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.useCases.title}
        </h2>
      </div>
      <div class="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {#each t.useCases.items as item (item.title)}
          {@const Icon = iconMap[item.icon] ?? Mail}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-900/30"
              >
                <Icon class="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 class="font-semibold">{item.title}</h3>
                <p class="mt-1 text-sm opacity-60">{item.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Email Example -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {exampleTitle[lang]}
        </h2>
      </div>
      <div class="mx-auto max-w-2xl">
        <div
          class="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div class="border-b border-neutral-200 p-4 dark:border-neutral-800">
            <div class="space-y-2 text-sm">
              <div class="flex gap-2">
                <span class="font-medium text-neutral-500">To:</span>
                <span class="text-orange-600 dark:text-orange-400">
                  channel-abc123@trigger.echobell.one
                </span>
              </div>
              <div class="flex gap-2">
                <span class="font-medium text-neutral-500">Subject:</span>
                <span>Server Alert: High CPU Usage</span>
              </div>
            </div>
          </div>
          <div class="p-6">
            <p class="opacity-60">
              CPU usage on web-01 has exceeded 90%. Please investigate
              immediately.
            </p>
          </div>
        </div>
        <p class="mt-6 text-center text-neutral-500">
          {exampleFootnote[lang]}
        </p>
      </div>
    </div>
  </section>

  <FeatureCTA
    {lang}
    title={t.cta.title}
    description={t.cta.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "email-triggers", "cta", lang])}
  />

  <RelatedFeatures
    {lang}
    current="emailTriggers"
    related={relatedFeatures.emailTriggers}
  />
</div>
