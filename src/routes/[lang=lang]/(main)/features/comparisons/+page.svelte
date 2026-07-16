<script lang="ts">
  import { ArrowRight, CircleCheck, Scale } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import BrandMark from "$lib/components/landing/BrandMark.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import { featureJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { getComparisonsIndexData } from "$lib/competitor-comparisons";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(getComparisonsIndexData(lang));
  const canonical = $derived(
    toAbsoluteUrl(localizeUrl("/features/comparisons", lang))
  );

  const comparisonsPageUi: Record<
    Language,
    {
      breadcrumbFeaturesLabel: string;
      breadcrumbCurrentLabel: string;
      viewFullComparison: string;
    }
  > = {
    en: {
      breadcrumbFeaturesLabel: "Features",
      breadcrumbCurrentLabel: "Comparisons",
      viewFullComparison: "View full comparison",
    },
    zh: {
      breadcrumbFeaturesLabel: "功能",
      breadcrumbCurrentLabel: "竞品对比",
      viewFullComparison: "查看完整对比",
    },
    es: {
      breadcrumbFeaturesLabel: "Funciones",
      breadcrumbCurrentLabel: "Comparativas",
      viewFullComparison: "Ver comparativa completa",
    },
    fr: {
      breadcrumbFeaturesLabel: "Fonctionnalités",
      breadcrumbCurrentLabel: "Comparaisons",
      viewFullComparison: "Voir la comparaison complète",
    },
    ja: {
      breadcrumbFeaturesLabel: "機能",
      breadcrumbCurrentLabel: "比較",
      viewFullComparison: "比較の全文を見る",
    },
    de: {
      breadcrumbFeaturesLabel: "Funktionen",
      breadcrumbCurrentLabel: "Vergleiche",
      viewFullComparison: "Vollständigen Vergleich ansehen",
    },
  };

  const ui = $derived(comparisonsPageUi[lang]);
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
          label: ui.breadcrumbCurrentLabel,
          href: localizeUrl("/features/comparisons", lang),
          isCurrentPage: true,
        },
      ]}
    />
  </div>

  <section class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
        >
          <Scale class="mr-1.5 h-4 w-4" />
          {t.hero.badge}
        </span>
        <h1
          class="mt-6 text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl lg:text-6xl"
        >
          {t.hero.title}
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg/8 text-pretty opacity-60">
          {t.hero.subtitle}
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.cardsTitle}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.cardsDescription}</p>
      </div>
      <div class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {#each t.cards as card (card.slug)}
          <div class="group relative flex">
            <div
              class="absolute inset-px rounded-3xl bg-white dark:bg-black"
            ></div>
            <a
              href={localizeUrl(`/features/comparisons/${card.slug}`, lang)}
              class="relative flex w-full flex-col overflow-hidden rounded-3xl p-8"
            >
              <div class="flex items-center gap-3">
                <span
                  class="flex size-9 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950/40"
                >
                  <Logo class="h-4.5 w-4.5 text-orange-500" />
                </span>
                <span
                  class="text-[10px] font-bold tracking-wider opacity-40 uppercase"
                >
                  vs
                </span>
                <BrandMark name={card.competitorName} class="size-9 text-sm" />
              </div>
              <h3
                class="mt-4 text-xl leading-snug font-semibold tracking-tight opacity-90"
              >
                Echobell vs {card.competitorName}
              </h3>
              <p class="mt-2 text-sm/6 opacity-60">{card.tagline}</p>
              <ul class="mt-5 space-y-2 text-sm opacity-70">
                {#each card.highlights as highlight (highlight)}
                  <li class="flex items-start gap-2">
                    <CircleCheck
                      class="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600 dark:text-orange-400"
                    />
                    <span>{highlight}</span>
                  </li>
                {/each}
              </ul>
              <div
                class="mt-auto flex items-center pt-6 text-sm font-semibold text-orange-600 dark:text-orange-400"
              >
                {ui.viewFullComparison}
                <ArrowRight
                  class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
            <div
              class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5 transition-shadow group-hover:shadow-md dark:ring-white/10"
            ></div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.methodology.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.methodology.description}</p>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
        {#each t.methodology.items as item (item.title)}
          <div class="relative flex">
            <div
              class="absolute inset-px rounded-3xl bg-white dark:bg-black"
            ></div>
            <div class="relative w-full rounded-3xl p-6">
              <h3 class="text-lg font-semibold tracking-tight opacity-90">
                {item.title}
              </h3>
              <p class="mt-2 text-sm/6 opacity-60">{item.description}</p>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5 dark:ring-white/10"
            ></div>
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
            href={getAppStoreLink(["features", "comparisons", "cta", lang])}
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
</div>
