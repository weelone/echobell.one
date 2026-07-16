<script lang="ts">
  import { Server, ShoppingCart, Cpu, Smartphone } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
  import FeatureSteps from "$lib/components/features/FeatureSteps.svelte";
  import FeatureCTA from "$lib/components/features/FeatureCTA.svelte";
  import CodeBlock from "$lib/components/features/CodeBlock.svelte";
  import RelatedFeatures from "$lib/components/features/RelatedFeatures.svelte";
  import { featureJsonLd, howToJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { webhooksI18n, relatedFeatures } from "$lib/features-i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(webhooksI18n[lang]);
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl("/features/webhooks", lang))
  );

  const getCode = `curl "https://hook.echobell.one/t/<channel-token>?server=web-01&status=down"`;
  const postCode = `curl -X POST "https://hook.echobell.one/t/<channel-token>" \\
  -H "Content-Type: application/json" \\
  -d '{"server": "web-01", "cpu": 85, "status": "warning"}'`;

  const useCaseIcons = [Server, Cpu, ShoppingCart, Smartphone];
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
    appStoreLink={getAppStoreLink(["features", "webhooks", "hero", lang])}
  />

  <FeatureSteps
    title={t.howItWorks.title}
    subtitle={t.howItWorks.subtitle}
    steps={t.howItWorks.steps}
  />

  <!-- Code Examples -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.codeExamples.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.codeExamples.subtitle}</p>
      </div>
      <div class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        <CodeBlock title={t.codeExamples.getRequest} code={getCode} language="bash" />
        <CodeBlock title={t.codeExamples.postRequest} code={postCode} language="bash" />
      </div>
    </div>
  </section>

  <!-- Variables -->
  <section class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.variables.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.variables.description}</p>
      </div>
      <div class="mx-auto max-w-3xl">
        <div class="grid gap-4">
          {#each t.variables.items as item (item.variable)}
            <div
              class="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <code
                class="flex-shrink-0 rounded-lg bg-orange-100 px-3 py-1.5 font-mono text-sm text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
              >
                {item.variable}
              </code>
              <span class="opacity-60">{item.description}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Use Cases -->
  <section class="bg-neutral-50 py-24 sm:py-32 dark:bg-neutral-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.useCases.title}
        </h2>
      </div>
      <div class="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {#each t.useCases.items as item, index (item.title)}
          {@const Icon = useCaseIcons[index % useCaseIcons.length]}
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

  <FeatureCTA
    {lang}
    title={t.cta.title}
    description={t.cta.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "webhooks", "cta", lang])}
  />

  <RelatedFeatures {lang} current="webhooks" related={relatedFeatures.webhooks} />
</div>
