<script lang="ts">
  // Comparison-style SEO landing page (Pushover / ntfy alternatives).
  // Visual-first: VS hero, tinted comparison table, compact bento cards.
  import { ArrowRight, CircleCheck } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import ComparisonHero from "$lib/components/landing/ComparisonHero.svelte";
  import ComparisonTable from "$lib/components/landing/ComparisonTable.svelte";
  import FAQSection from "$lib/components/FAQSection.svelte";
  import { featureJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";

  interface ComparisonCopy {
    meta: { title: string; description: string; keywords: string[] };
    breadcrumb: string;
    hero: { badge: string; title: string; description: string };
    summary: { title: string; body: string };
    cards: Array<{ title: string; description: string }>;
    tableTitle: string;
    tableDescription: string;
    tableRows: Array<{ dimension: string; echobell: string; competitor: string }>;
    chooseTitle: string;
    chooseItems: Array<{ title: string; description: string }>;
    faqTitle: string;
    faqDescription: string;
    faqs: Array<{ question: string; answer: string }>;
    relatedTitle: string;
    relatedLinks: Array<{ label: string; href: string }>;
    cta: { title: string; description: string; primary: string; secondary: string };
  }

  let {
    lang,
    path,
    copy: t,
    competitorName,
    dimensionLabel,
  }: {
    lang: Language;
    path: string;
    copy: ComparisonCopy;
    competitorName: string;
    dimensionLabel: string;
  } = $props();

  const canonical = $derived(toAbsoluteUrl(localizeUrl(path, lang)));
  const source = $derived(path.replace(/^\//, ""));
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
          label: t.breadcrumb,
          href: localizeUrl(path, lang),
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
    {competitorName}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink([source, "hero", lang])}
  />

  <!-- Comparison table -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.tableTitle}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.tableDescription}</p>
      </div>
      <div class="mx-auto mt-12 max-w-5xl">
        <ComparisonTable
          {dimensionLabel}
          {competitorName}
          rows={t.tableRows}
        />
      </div>
      <p
        class="mx-auto mt-8 max-w-3xl text-center text-base/7 opacity-60"
      >
        <span class="font-semibold text-orange-600 dark:text-orange-400"
          >{t.summary.title}:</span
        >
        {t.summary.body}
      </p>
    </div>
  </section>

  <!-- Why Echobell: compact benefit cards -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {#each t.cards as item (item.title)}
          <div class="relative flex">
            <div
              class="absolute inset-px rounded-3xl bg-white dark:bg-black"
            ></div>
            <div class="relative w-full rounded-3xl p-6">
              <CircleCheck
                class="h-6 w-6 text-orange-600 dark:text-orange-400"
              />
              <h3 class="mt-4 text-lg font-semibold tracking-tight opacity-90">
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

  <!-- Which tool for which team -->
  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.chooseTitle}
        </h2>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
        {#each t.chooseItems as item (item.title)}
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

  <FAQSection {lang} title={t.faqTitle} description={t.faqDescription} items={t.faqs} />

  <!-- CTA + related -->
  <section class="border-t border-neutral-200 py-20 dark:border-neutral-800">
    <div
      class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8"
    >
      <div>
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.cta.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.cta.description}</p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={getAppStoreLink([source, "cta", lang])}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-orange-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            {t.cta.primary}
          </a>
          <a
            href={getGooglePlayLink()}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
          >
            Google Play
          </a>
          <a
            href={localizeUrl("/docs", lang)}
            class="group flex items-center justify-center gap-1.5 rounded-full px-2 py-3 text-sm font-semibold opacity-90"
          >
            {t.cta.secondary}
            <ArrowRight
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      <div
        class="rounded-3xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
      >
        <h3 class="text-lg font-semibold tracking-tight opacity-90">
          {t.relatedTitle}
        </h3>
        <div class="mt-4 space-y-3">
          {#each t.relatedLinks as item (item.href)}
            <a
              href={localizeUrl(item.href, lang)}
              class="block rounded-xl bg-neutral-50 px-4 py-3 text-sm font-medium ring-1 ring-black/5 transition-colors hover:text-orange-600 dark:bg-neutral-900 dark:ring-white/10 dark:hover:text-orange-400"
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>
