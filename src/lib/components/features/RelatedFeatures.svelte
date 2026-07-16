<script lang="ts">
  import {
    ArrowRight,
    Webhook,
    Mail,
    Phone,
    Folders,
    FileText,
  } from "@lucide/svelte";
  import type { Component } from "svelte";
  import { localizeUrl, type Language } from "$lib/i18n";
  import {
    webhooksI18n,
    emailTriggersI18n,
    callNotificationsI18n,
    channelsI18n,
    templatesI18n,
    type FeatureKey,
  } from "$lib/features-i18n";

  let {
    lang,
    current,
    related,
  }: {
    lang: Language;
    current: FeatureKey;
    related: readonly FeatureKey[];
  } = $props();

  const featureConfig: Record<
    FeatureKey,
    { href: string; icon: Component; getTitle: (lang: Language) => string }
  > = {
    webhooks: {
      href: "/features/webhooks",
      icon: Webhook,
      getTitle: (l) => webhooksI18n[l].meta.title,
    },
    emailTriggers: {
      href: "/features/email-triggers",
      icon: Mail,
      getTitle: (l) => emailTriggersI18n[l].meta.title,
    },
    callNotifications: {
      href: "/features/call-notifications",
      icon: Phone,
      getTitle: (l) => callNotificationsI18n[l].meta.title,
    },
    channels: {
      href: "/features/channels",
      icon: Folders,
      getTitle: (l) => channelsI18n[l].meta.title,
    },
    templates: {
      href: "/features/templates",
      icon: FileText,
      getTitle: (l) => templatesI18n[l].meta.title,
    },
  };

  const relatedLabels: Record<Language, string> = {
    en: "Related Features",
    zh: "相关功能",
    es: "Funciones Relacionadas",
    fr: "Fonctionnalités Associées",
    ja: "関連機能",
    de: "Verwandte Funktionen",
  };

  const items = $derived(related.filter((key) => key !== current));
</script>

<section class="border-t border-neutral-200 py-16 dark:border-neutral-800">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h3 class="mb-8 text-lg font-semibold text-neutral-600 dark:text-neutral-400">
      {relatedLabels[lang]}
    </h3>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each items as key (key)}
        {@const config = featureConfig[key]}
        {@const Icon = config.icon}
        <a
          href={localizeUrl(config.href, lang)}
          class="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-orange-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-orange-700"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800"
          >
            <Icon class="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          </div>
          <span class="flex-1 font-medium">{config.getTitle(lang)}</span>
          <ArrowRight
            class="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1"
          />
        </a>
      {/each}
    </div>
  </div>
</section>
