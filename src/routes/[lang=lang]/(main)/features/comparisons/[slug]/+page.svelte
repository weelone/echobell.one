<script lang="ts">
  import { ArrowRight, CircleCheck } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
  import { faqJsonLd, featureJsonLd } from "$lib/jsonld";
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
      differenceTitle: string;
      quickTake: string;
      comparedAgainst: string;
      benchmarkHelper: string;
      dimension: string;
      continueReading: string;
    }
  > = {
    en: {
      breadcrumbFeaturesLabel: "Features",
      breadcrumbComparisonsLabel: "Comparisons",
      relatedTitle: "Other comparisons",
      differenceTitle: "Echobell advantage",
      quickTake: "Quick take",
      comparedAgainst: "Compared against",
      benchmarkHelper:
        "Benchmarked from real on-call workflows and alert outcomes.",
      dimension: "Dimension",
      continueReading: "Continue reading",
    },
    zh: {
      breadcrumbFeaturesLabel: "功能",
      breadcrumbComparisonsLabel: "竞品对比",
      relatedTitle: "其他竞品对比",
      differenceTitle: "Echobell 的核心优势",
      quickTake: "一句话结论",
      comparedAgainst: "对比对象",
      benchmarkHelper: "从实际值班流程与告警落地效率出发。",
      dimension: "维度",
      continueReading: "继续查看",
    },
    es: {
      breadcrumbFeaturesLabel: "Funciones",
      breadcrumbComparisonsLabel: "Comparativas",
      relatedTitle: "Otras comparativas",
      differenceTitle: "Ventaja de Echobell",
      quickTake: "Resumen rápido",
      comparedAgainst: "Comparado con",
      benchmarkHelper:
        "Evaluado a partir de flujos reales de guardia y resultados de alertas.",
      dimension: "Dimensión",
      continueReading: "Seguir leyendo",
    },
    fr: {
      breadcrumbFeaturesLabel: "Fonctionnalités",
      breadcrumbComparisonsLabel: "Comparaisons",
      relatedTitle: "Autres comparaisons",
      differenceTitle: "Atout d'Echobell",
      quickTake: "Résumé rapide",
      comparedAgainst: "Comparé à",
      benchmarkHelper:
        "Évalué à partir de véritables workflows d'astreinte et de résultats d'alerte.",
      dimension: "Critère",
      continueReading: "Continuer la lecture",
    },
    ja: {
      breadcrumbFeaturesLabel: "機能",
      breadcrumbComparisonsLabel: "比較",
      relatedTitle: "他の比較ページ",
      differenceTitle: "Echobell の強み",
      quickTake: "要点",
      comparedAgainst: "比較対象",
      benchmarkHelper:
        "実際のオンコール運用とアラート結果を基準に比較しています。",
      dimension: "項目",
      continueReading: "続きを読む",
    },
    de: {
      breadcrumbFeaturesLabel: "Funktionen",
      breadcrumbComparisonsLabel: "Vergleiche",
      relatedTitle: "Weitere Vergleiche",
      differenceTitle: "Echobell-Vorteil",
      quickTake: "Kurzfazit",
      comparedAgainst: "Verglichen mit",
      benchmarkHelper:
        "Bewertet anhand realer On-Call-Abläufe und tatsächlicher Alarm-Ergebnisse.",
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
  <JsonLd data={faqJsonLd(t.faq.items)} />

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

  <FeatureHero
    {lang}
    badge={t.hero.badge}
    title={t.hero.title}
    description={t.hero.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink(["features", "comparison", slug, "hero", lang])}
  />

  <section class="py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div
          class="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <p
            class="text-sm font-semibold tracking-wider text-orange-600 uppercase dark:text-orange-400"
          >
            {ui.quickTake}
          </p>
          <p class="mt-3 text-lg leading-relaxed font-medium">
            {t.quickSummary}
          </p>
          <p class="mt-4 opacity-60">{t.decisionHint}</p>
        </div>
        <div
          class="rounded-3xl border border-orange-200 bg-orange-50 p-8 dark:border-orange-800 dark:bg-orange-950/20"
        >
          <p
            class="text-sm font-semibold tracking-wider text-orange-600 uppercase dark:text-orange-400"
          >
            {ui.comparedAgainst}
          </p>
          <p class="mt-3 text-2xl font-bold">{t.competitorName}</p>
          <p class="mt-2 text-sm opacity-70">{ui.benchmarkHelper}</p>
        </div>
      </div>
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        {#each t.atAGlance as item (item.label)}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 class="font-semibold">{item.label}</h3>
            <div class="mt-4 space-y-3 text-sm">
              <div>
                <p class="font-medium text-orange-600 dark:text-orange-400">
                  Echobell
                </p>
                <p class="mt-1 opacity-60">{item.echobell}</p>
              </div>
              <div>
                <p class="font-medium text-neutral-700 dark:text-neutral-200">
                  {t.competitorName}
                </p>
                <p class="mt-1 opacity-60">{item.competitor}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.differences.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.differences.description}</p>
      </div>
      <div
        class="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div
          class="grid grid-cols-4 border-b border-neutral-200 text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:border-neutral-800 dark:text-neutral-400"
        >
          <div class="px-4 py-3">{ui.dimension}</div>
          <div class="px-4 py-3">Echobell</div>
          <div class="px-4 py-3">{t.competitorName}</div>
          <div class="px-4 py-3">{ui.differenceTitle}</div>
        </div>
        {#each t.differences.items as item (item.dimension)}
          <div
            class="grid grid-cols-1 gap-3 border-b border-neutral-200 px-4 py-4 last:border-b-0 md:grid-cols-4 dark:border-neutral-800"
          >
            <div class="text-sm font-semibold">{item.dimension}</div>
            <div class="text-sm opacity-60">{item.echobell}</div>
            <div class="text-sm opacity-60">{item.competitor}</div>
            <div class="flex items-start gap-2 text-sm opacity-80">
              <CircleCheck
                class="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600 dark:text-orange-400"
              />
              <span>{item.advantage}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.advantages.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.advantages.description}</p>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {#each t.advantages.items as item (item.title)}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 class="text-lg font-semibold">{item.title}</h3>
            <p class="mt-2 text-sm opacity-60">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.scenarios.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.scenarios.description}</p>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {#each t.scenarios.items as item (item.title)}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 class="text-lg font-semibold">{item.title}</h3>
            <p class="mt-2 text-sm opacity-60">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.migration.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.migration.description}</p>
      </div>
      <div class="mx-auto mt-12 max-w-4xl space-y-6">
        {#each t.migration.steps as step, index (step.title)}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white"
              >
                {index + 1}
              </div>
              <div>
                <h3 class="text-lg font-semibold">{step.title}</h3>
                <p class="mt-2 text-sm opacity-60">{step.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.faq.title}
        </h2>
      </div>
      <div class="mx-auto mt-12 max-w-4xl space-y-4">
        {#each t.faq.items as item (item.question)}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 class="text-lg font-semibold">{item.question}</h3>
            <p class="mt-2 text-sm opacity-60">{item.answer}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="border-t border-neutral-200 py-24 dark:border-neutral-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.cta.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.cta.description}</p>
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            class="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
          >
            {t.cta.secondary}
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="border-t border-neutral-200 py-16 dark:border-neutral-800">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h3 class="mb-6 text-lg font-semibold text-neutral-600 dark:text-neutral-400">
        {ui.relatedTitle}
      </h3>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each relatedCards as card (card.slug)}
          <a
            href={localizeUrl(`/features/comparisons/${card.slug}`, lang)}
            class="group rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <p
              class="text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400"
            >
              {card.competitorName}
            </p>
            <p class="mt-1 font-medium">{card.tagline}</p>
            <div
              class="mt-4 flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400"
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
