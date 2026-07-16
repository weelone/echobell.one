<script lang="ts">
  import { ArrowRight } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
  import FeatureCTA from "$lib/components/features/FeatureCTA.svelte";
  import RelatedFeatures from "$lib/components/features/RelatedFeatures.svelte";
  import { featureJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { templatesI18n, relatedFeatures } from "$lib/features-i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(templatesI18n[lang]);
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl("/features/templates", lang))
  );

  const templatesPageUi: Record<
    Language,
    {
      result: string;
      exampleCondition: string;
      incomingData: string;
      template: string;
      notification: string;
    }
  > = {
    en: {
      result: "Result",
      exampleCondition: "Example Condition",
      incomingData: "Incoming Data",
      template: "Template",
      notification: "Notification",
    },
    zh: {
      result: "结果",
      exampleCondition: "示例条件",
      incomingData: "传入数据",
      template: "模板",
      notification: "通知",
    },
    es: {
      result: "Resultado",
      exampleCondition: "Condición de ejemplo",
      incomingData: "Datos entrantes",
      template: "Plantilla",
      notification: "Notificación",
    },
    fr: {
      result: "Résultat",
      exampleCondition: "Condition d'exemple",
      incomingData: "Données entrantes",
      template: "Modèle",
      notification: "Notification",
    },
    ja: {
      result: "結果",
      exampleCondition: "条件の例",
      incomingData: "入力データ",
      template: "テンプレート",
      notification: "通知",
    },
    de: {
      result: "Ergebnis",
      exampleCondition: "Beispielbedingung",
      incomingData: "Eingehende Daten",
      template: "Vorlage",
      notification: "Benachrichtigung",
    },
  };

  const ui = $derived(templatesPageUi[lang]);

  const incomingJson = `{
  "server": "web-01",
  "cpu": 92,
  "status": "critical"
}`;
</script>

<div class="min-h-screen">
  <JsonLd
    data={featureJsonLd({
      name: t.meta.title,
      description: t.meta.description,
      url: canonical,
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
    appStoreLink={getAppStoreLink(["features", "templates", "hero", lang])}
  />

  <!-- Template Examples -->
  <section class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.variables.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.variables.description}</p>
      </div>
      <div class="mx-auto max-w-4xl space-y-8">
        {#each t.variables.examples as example (example.template)}
          <div
            class="overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div class="border-b border-neutral-200 p-6 dark:border-neutral-800">
              <p class="mb-2 text-sm text-neutral-500">{t.variables.subtitle}</p>
              <code
                class="block font-mono text-lg text-orange-600 dark:text-orange-400"
              >
                {example.template}
              </code>
            </div>
            <div
              class="flex items-center gap-4 bg-neutral-50 p-6 dark:bg-neutral-800/50"
            >
              <ArrowRight class="h-5 w-5 flex-shrink-0 text-neutral-400" />
              <div>
                <p class="mb-1 text-sm text-neutral-500">{ui.result}</p>
                <p class="font-medium">{example.result}</p>
                <p class="mt-2 text-sm text-neutral-500">
                  {example.description}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Expressions -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.expressions.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.expressions.subtitle}</p>
      </div>
      <div class="mx-auto max-w-3xl">
        <div class="grid gap-4 sm:grid-cols-2">
          {#each t.expressions.items as item (item.expression)}
            <div
              class="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <code
                class="mb-2 block font-mono text-sm text-orange-600 dark:text-orange-400"
              >
                {item.expression}
              </code>
              <p class="text-sm opacity-60">{item.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Conditions -->
  <section class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.conditions.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.conditions.description}</p>
      </div>
      <div class="mx-auto max-w-2xl">
        <div
          class="rounded-3xl border-2 border-orange-200 bg-white p-8 text-center dark:border-orange-800 dark:bg-neutral-900"
        >
          <p class="mb-4 text-sm text-neutral-500">{ui.exampleCondition}</p>
          <code
            class="mb-6 block font-mono text-xl text-orange-600 dark:text-orange-400"
          >
            {t.conditions.example.condition}
          </code>
          <p class="opacity-60">{t.conditions.example.explanation}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Workflow Visualization -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="flex flex-col items-center justify-center gap-6 md:flex-row">
          <div
            class="w-full rounded-xl border border-neutral-200 bg-white p-6 md:w-auto dark:border-neutral-800 dark:bg-neutral-900"
          >
            <p class="mb-2 text-xs tracking-wider text-neutral-500 uppercase">
              {ui.incomingData}
            </p>
            <pre
              class="font-mono text-sm text-neutral-700 dark:text-neutral-300">{incomingJson}</pre>
          </div>

          <div class="flex items-center">
            <ArrowRight class="h-8 w-8 rotate-90 text-orange-500 md:rotate-0" />
          </div>

          <div
            class="w-full rounded-xl border-2 border-orange-300 bg-orange-50 p-6 md:w-auto dark:border-orange-700 dark:bg-orange-900/20"
          >
            <p
              class="mb-2 text-xs tracking-wider text-orange-600 uppercase dark:text-orange-400"
            >
              {ui.template}
            </p>
            <code class="font-mono text-sm text-orange-700 dark:text-orange-300">
              {"{{server}}: {{status}} ({{cpu}}%)"}
            </code>
          </div>

          <div class="flex items-center">
            <ArrowRight class="h-8 w-8 rotate-90 text-orange-500 md:rotate-0" />
          </div>

          <div
            class="w-full rounded-xl border border-green-200 bg-green-50 p-6 md:w-auto dark:border-green-800 dark:bg-green-900/20"
          >
            <p
              class="mb-2 text-xs tracking-wider text-green-600 uppercase dark:text-green-400"
            >
              {ui.notification}
            </p>
            <p class="text-sm font-semibold text-green-700 dark:text-green-300">
              web-01: critical (92%)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <FeatureCTA
    {lang}
    title={t.cta.title}
    description={t.cta.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "templates", "cta", lang])}
  />

  <RelatedFeatures {lang} current="templates" related={relatedFeatures.templates} />
</div>
