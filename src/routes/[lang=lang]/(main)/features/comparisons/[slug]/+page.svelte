<script lang="ts">
  import { ArrowRight, CircleCheck } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import BrandMark from "$lib/components/landing/BrandMark.svelte";
  import ComparisonHero from "$lib/components/landing/ComparisonHero.svelte";
  import ComparisonTable from "$lib/components/landing/ComparisonTable.svelte";
  import FAQSection from "$lib/components/FAQSection.svelte";
  import { featureJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import {
    getComparisonPageData,
    getComparisonsIndexData,
    type CompetitorSlug,
  } from "$lib/competitor-comparisons";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const slug = $derived(data.slug as CompetitorSlug);
  const t = $derived(getComparisonPageData(slug, lang));
  const indexData = $derived(getComparisonsIndexData(lang));
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl(`/features/comparisons/${slug}`, lang))
  );
  const relatedCards = $derived(
    indexData.cards.filter((card) => card.slug !== slug)
  );

  const comparisonDetailUi: Record<
    Language,
    {
      breadcrumbFeaturesLabel: string;
      breadcrumbComparisonsLabel: string;
      relatedTitle: string;
      quickTake: string;
      dimension: string;
      continueReading: string;
    }
  > = {
    en: {
      breadcrumbFeaturesLabel: "Features",
      breadcrumbComparisonsLabel: "Comparisons",
      relatedTitle: "Other comparisons",
      quickTake: "Quick take",
      dimension: "Dimension",
      continueReading: "Continue reading",
    },
    zh: {
      breadcrumbFeaturesLabel: "功能",
      breadcrumbComparisonsLabel: "竞品对比",
      relatedTitle: "其他竞品对比",
      quickTake: "一句话结论",
      dimension: "维度",
      continueReading: "继续查看",
    },
    es: {
      breadcrumbFeaturesLabel: "Funciones",
      breadcrumbComparisonsLabel: "Comparativas",
      relatedTitle: "Otras comparativas",
      quickTake: "Resumen rápido",
      dimension: "Dimensión",
      continueReading: "Seguir leyendo",
    },
    fr: {
      breadcrumbFeaturesLabel: "Fonctionnalités",
      breadcrumbComparisonsLabel: "Comparaisons",
      relatedTitle: "Autres comparaisons",
      quickTake: "Résumé rapide",
      dimension: "Critère",
      continueReading: "Continuer la lecture",
    },
    ja: {
      breadcrumbFeaturesLabel: "機能",
      breadcrumbComparisonsLabel: "比較",
      relatedTitle: "他の比較ページ",
      quickTake: "要点",
      dimension: "項目",
      continueReading: "続きを読む",
    },
    de: {
      breadcrumbFeaturesLabel: "Funktionen",
      breadcrumbComparisonsLabel: "Vergleiche",
      relatedTitle: "Weitere Vergleiche",
      quickTake: "Kurzfazit",
      dimension: "Kriterium",
      continueReading: "Weiterlesen",
    },
  };

  const ui = $derived(comparisonDetailUi[lang]);
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
    <Breadcrumb
      {lang}
      customItems={[
        {
          label: ui.breadcrumbFeaturesLabel,
          href: localizeUrl("/features", lang),
        },
        {
          label: ui.breadcrumbComparisonsLabel,
          href: localizeUrl("/features/comparisons", lang),
        },
        {
          label: t.competitorName,
          href: localizeUrl(`/features/comparisons/${slug}`, lang),
          isCurrentPage: true,
        },
      ]}
    />
  </div>

  <ComparisonHero
    {lang}
    badge={t.hero.badge}
    title={t.hero.title}
    description={t.hero.description}
    competitorName={t.competitorName}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "comparison", slug, "hero", lang])}
  />

  <!-- Quick take -->
  <section class="pb-4">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-5xl rounded-3xl bg-white p-8 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
      >
        <p class="text-base/7 font-semibold text-orange-600">{ui.quickTake}</p>
        <p class="mt-3 text-lg/8 font-medium opacity-90">{t.quickSummary}</p>
        <p class="mt-2 text-base/7 opacity-60">{t.decisionHint}</p>
      </div>
    </div>
  </section>

  <!-- At a glance: visual mini cards -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {#each t.atAGlance as item (item.label)}
          <div
            class="rounded-3xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
          >
            <h3 class="text-sm font-semibold tracking-tight opacity-80">
              {item.label}
            </h3>
            <div
              class="mt-4 rounded-xl bg-orange-50/60 p-3.5 dark:bg-orange-950/20"
            >
              <div class="flex items-center gap-1.5">
                <Logo class="h-3.5 w-3.5 flex-none text-orange-500" />
                <span
                  class="text-xs font-semibold text-orange-600 dark:text-orange-400"
                >
                  Echobell
                </span>
              </div>
              <p class="mt-1.5 text-sm/6 opacity-80">{item.echobell}</p>
            </div>
            <div
              class="mt-2 rounded-xl bg-neutral-50 p-3.5 dark:bg-neutral-900/60"
            >
              <div class="flex items-center gap-1.5">
                <BrandMark
                  name={t.competitorName}
                  class="h-3.5 w-3.5 flex-none text-[8px]"
                />
                <span class="text-xs font-semibold opacity-50">
                  {t.competitorName}
                </span>
              </div>
              <p class="mt-1.5 text-sm/6 opacity-60">{item.competitor}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Differences table -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.differences.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.differences.description}</p>
      </div>
      <div class="mx-auto mt-12 max-w-6xl">
        <ComparisonTable
          dimensionLabel={ui.dimension}
          competitorName={t.competitorName}
          rows={t.differences.items}
        />
      </div>
    </div>
  </section>

  <!-- Advantages + scenarios -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.advantages.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.advantages.description}</p>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        {#each t.advantages.items as item (item.title)}
          <div
            class="rounded-3xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
          >
            <CircleCheck class="h-6 w-6 text-orange-600 dark:text-orange-400" />
            <h3 class="mt-4 text-lg font-semibold tracking-tight opacity-90">
              {item.title}
            </h3>
            <p class="mt-2 text-sm/6 opacity-60">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.scenarios.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.scenarios.description}</p>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
        {#each t.scenarios.items as item (item.title)}
          <div
            class="rounded-3xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
          >
            <h3 class="text-lg font-semibold tracking-tight opacity-90">
              {item.title}
            </h3>
            <p class="mt-2 text-sm/6 opacity-60">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Migration: timeline -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.migration.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.migration.description}</p>
      </div>
      <div class="mx-auto mt-12 max-w-3xl">
        <div class="relative">
          <div
            class="absolute top-2 bottom-2 left-5 w-px bg-neutral-200 dark:bg-neutral-800"
            aria-hidden="true"
          ></div>
          <div class="space-y-10">
            {#each t.migration.steps as step, index (step.title)}
              <div class="relative flex gap-5">
                <div
                  class="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-100 text-base font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                >
                  {index + 1}
                </div>
                <div class="flex-1 pt-1.5">
                  <h3 class="text-lg font-semibold tracking-tight opacity-90">
                    {step.title}
                  </h3>
                  <p class="mt-2 text-base/7 opacity-60">{step.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <FAQSection {lang} title={t.faq.title} items={t.faq.items} />

  <!-- CTA -->
  <section class="border-t border-neutral-200 py-20 dark:border-neutral-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.cta.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.cta.description}</p>
        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={getAppStoreLink(["features", "comparison", slug, "cta", lang])}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            {t.cta.primary}
          </a>
          <a
            href={getGooglePlayLink()}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
          >
            Google Play
          </a>
          <a
            href={localizeUrl("/docs", lang)}
            class="group flex items-center gap-1.5 text-sm font-semibold opacity-90"
          >
            {t.cta.secondary}
            <ArrowRight
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Related comparisons -->
  <section class="border-t border-neutral-200 py-16 dark:border-neutral-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h3 class="mb-6 text-lg font-semibold tracking-tight opacity-80">
        {ui.relatedTitle}
      </h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each relatedCards as card (card.slug)}
          <a
            href={localizeUrl(`/features/comparisons/${card.slug}`, lang)}
            class="group flex flex-col rounded-2xl bg-white p-5 ring-1 shadow-sm ring-black/5 transition-shadow hover:shadow-md dark:bg-black dark:ring-white/10"
          >
            <p
              class="text-xs font-semibold tracking-wide text-orange-600 uppercase dark:text-orange-400"
            >
              Echobell vs {card.competitorName}
            </p>
            <p class="mt-2 text-sm/6 font-medium opacity-80">{card.tagline}</p>
            <div
              class="mt-auto flex items-center pt-4 text-sm font-semibold text-orange-600 dark:text-orange-400"
            >
              {ui.continueReading}
              <ArrowRight
                class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
</div>
