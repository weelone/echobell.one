<script lang="ts">
  import {
    Palette,
    StickyNote,
    Funnel,
    Link,
    Code,
    ExternalLink,
    Zap,
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
  import { channelsI18n, relatedFeatures } from "$lib/features-i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(channelsI18n[lang]);
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl("/features/channels", lang))
  );

  const organizationIconMap: Record<string, Component> = {
    palette: Palette,
    "sticky-note": StickyNote,
    filter: Funnel,
    link: Link,
  };

  const advancedIconMap: Record<string, Component> = {
    code: Code,
    "external-link": ExternalLink,
    zap: Zap,
  };

  const channelPreviewCopy: Record<
    Language,
    {
      title: string;
      description: string;
      webhookLabel: string;
      emailLabel: string;
      notificationTypeLabel: string;
      phoneCall: string;
    }
  > = {
    en: {
      title: "Production Alerts",
      description: "Critical server notifications",
      webhookLabel: "Webhook URL:",
      emailLabel: "Email:",
      notificationTypeLabel: "Notification type:",
      phoneCall: "Phone Call",
    },
    zh: {
      title: "生产告警",
      description: "关键服务器通知",
      webhookLabel: "Webhook URL：",
      emailLabel: "邮件：",
      notificationTypeLabel: "通知类型：",
      phoneCall: "电话通知",
    },
    es: {
      title: "Alertas de producción",
      description: "Notificaciones críticas del servidor",
      webhookLabel: "URL del webhook:",
      emailLabel: "Correo:",
      notificationTypeLabel: "Tipo de notificación:",
      phoneCall: "Llamada",
    },
    fr: {
      title: "Alertes de production",
      description: "Notifications critiques du serveur",
      webhookLabel: "URL du webhook :",
      emailLabel: "E-mail :",
      notificationTypeLabel: "Type de notification :",
      phoneCall: "Appel",
    },
    ja: {
      title: "本番アラート",
      description: "重要なサーバー通知",
      webhookLabel: "Webhook URL:",
      emailLabel: "メール:",
      notificationTypeLabel: "通知タイプ:",
      phoneCall: "電話通知",
    },
    de: {
      title: "Produktionsalarme",
      description: "Kritische Server-Benachrichtigungen",
      webhookLabel: "Webhook-URL:",
      emailLabel: "E-Mail:",
      notificationTypeLabel: "Benachrichtigungstyp:",
      phoneCall: "Anruf",
    },
  };

  const preview = $derived(channelPreviewCopy[lang]);

  const organizationFeatures = $derived(
    t.organization.features.map((item) => ({
      title: item.title,
      description: item.description,
      icon: organizationIconMap[item.icon] ?? Palette,
    }))
  );

  const advancedFeatures = $derived(
    t.advanced.items.map((item) => ({
      title: item.title,
      description: item.description,
      icon: advancedIconMap[item.icon] ?? Code,
    }))
  );
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
      name: t.sharing.title,
      description: t.sharing.subtitle,
      steps: t.sharing.steps.map((step) => ({
        name: step.title,
        text: step.description,
      })),
      totalTime: "PT5M",
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
    appStoreLink={getAppStoreLink(["features", "channels", "hero", lang])}
  />

  <FeatureGrid
    title={t.organization.title}
    subtitle={t.organization.subtitle}
    features={organizationFeatures}
    columns={2}
  />

  <!-- Channel Preview -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <div
          class="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div class="mb-6 flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
              <span class="text-xl text-white">🔔</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold">{preview.title}</h3>
              <p class="text-sm text-neutral-500">{preview.description}</p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm">
              <span class="text-neutral-500">{preview.webhookLabel}</span>
              <code
                class="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs dark:bg-neutral-800"
              >
                https://hook.echobell.one/t/abc...
              </code>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-neutral-500">{preview.emailLabel}</span>
              <code
                class="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs dark:bg-neutral-800"
              >
                production-abc@trigger.echobell.one
              </code>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-neutral-500">{preview.notificationTypeLabel}</span>
              <span
                class="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400"
              >
                {preview.phoneCall}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <FeatureSteps
    title={t.sharing.title}
    subtitle={t.sharing.subtitle}
    steps={t.sharing.steps}
  />

  <section class="bg-neutral-50 dark:bg-neutral-900/50">
    <FeatureGrid
      title={t.advanced.title}
      subtitle={t.advanced.subtitle}
      features={advancedFeatures}
      columns={3}
    />
  </section>

  <FeatureCTA
    {lang}
    title={t.cta.title}
    description={t.cta.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "channels", "cta", lang])}
  />

  <RelatedFeatures {lang} current="channels" related={relatedFeatures.channels} />
</div>
