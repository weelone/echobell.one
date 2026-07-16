<script lang="ts">
  // Comparison-style SEO landing page (Pushover / ntfy alternatives).
  // Styled to match the homepage: orange accents + rounded-3xl cards.
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
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

  <FeatureHero
    {lang}
    badge={t.hero.badge}
    title={t.hero.title}
    description={t.hero.description}
    primaryCta={t.cta.primary}
    secondaryCta={t.cta.secondary}
    appStoreLink={getAppStoreLink([source, "hero", lang])}
  />

  <section class="py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <p
          class="text-sm font-semibold tracking-wide text-orange-600 uppercase dark:text-orange-400"
        >
          {t.summary.title}
        </p>
        <p class="mt-3 max-w-4xl text-lg text-neutral-700 dark:text-neutral-300">
          {t.summary.body}
        </p>
      </div>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        {#each t.cards as item (item.title)}
          <div class="relative flex">
            <div
              class="absolute inset-px rounded-3xl bg-neutral-50 dark:bg-neutral-900/50"
            ></div>
            <div class="relative w-full rounded-3xl p-6">
              <h2 class="text-lg font-semibold tracking-tight opacity-90">
                {item.title}
              </h2>
              <p class="mt-3 text-sm/6 opacity-60">{item.description}</p>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5"
            ></div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.tableTitle}
        </h2>
        <p class="mt-4 text-lg opacity-60">{t.tableDescription}</p>
      </div>
      <div
        class="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div
          class="grid grid-cols-3 border-b border-neutral-200 text-sm font-semibold dark:border-neutral-800"
        >
          <div class="px-4 py-4">{dimensionLabel}</div>
          <div class="px-4 py-4">Echobell</div>
          <div class="px-4 py-4">{competitorName}</div>
        </div>
        {#each t.tableRows as row (row.dimension)}
          <div
            class="grid grid-cols-1 gap-3 border-b border-neutral-200 px-4 py-4 last:border-b-0 md:grid-cols-3 dark:border-neutral-800"
          >
            <div class="font-medium">{row.dimension}</div>
            <div class="text-sm opacity-60">{row.echobell}</div>
            <div class="text-sm opacity-60">{row.competitor}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {t.chooseTitle}
        </h2>
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {#each t.chooseItems as item (item.title)}
          <div
            class="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h3 class="text-lg font-semibold">{item.title}</h3>
            <p class="mt-3 text-sm opacity-60">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <FAQSection {lang} title={t.faqTitle} description={t.faqDescription} items={t.faqs} />

  <section class="border-t border-neutral-200 py-20 dark:border-neutral-800">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
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
            class="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-600"
          >
            {t.cta.secondary}
          </a>
        </div>
      </div>
      <div
        class="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 class="text-lg font-semibold">{t.relatedTitle}</h3>
        <div class="mt-4 space-y-3">
          {#each t.relatedLinks as item (item.href)}
            <a
              href={localizeUrl(item.href, lang)}
              class="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-orange-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-orange-700"
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>
