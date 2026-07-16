<script lang="ts">
  // Scenario-style SEO landing page (server-down / focus-mode / App Store
  // Connect). Sections are normalized by the route so one component renders
  // all three, styled to match the homepage.
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FeatureHero from "$lib/components/features/FeatureHero.svelte";
  import FAQSection from "$lib/components/FAQSection.svelte";
  import FlowFigure, {
    type FlowNode,
  } from "$lib/components/landing/FlowFigure.svelte";
  import { featureJsonLd, howToJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { localizeUrl, type Language } from "$lib/i18n";

  interface Card {
    title: string;
    description: string;
  }

  interface Section {
    title: string;
    description?: string;
    cards: Card[];
  }

  let {
    lang,
    path,
    meta,
    breadcrumb,
    hero,
    summary,
    flow,
    firstSection,
    steps,
    thirdSection,
    faqTitle,
    faqDescription,
    faqs,
    relatedTitle,
    relatedLinks,
    cta,
    howToTotalTime,
  }: {
    lang: Language;
    path: string;
    meta: { title: string; description: string };
    breadcrumb: string;
    hero: { badge: string; title: string; description: string };
    summary: { title: string; body: string };
    flow?: { sources: FlowNode[]; outputs: FlowNode[] };
    firstSection: Section;
    steps: Section;
    thirdSection: Section;
    faqTitle: string;
    faqDescription: string;
    faqs: Array<{ question: string; answer: string }>;
    relatedTitle: string;
    relatedLinks: Array<{ label: string; href: string }>;
    cta: { title: string; description: string; primary: string; secondary: string };
    howToTotalTime: string;
  } = $props();

  const canonical = $derived(toAbsoluteUrl(localizeUrl(path, lang)));
  const source = $derived(path.replace(/^\//, ""));
</script>

<div class="min-h-screen">
  <JsonLd
    data={featureJsonLd({
      name: meta.title,
      description: meta.description,
      url: canonical,
    })}
  />
  <JsonLd
    data={howToJsonLd({
      name: steps.title,
      description: steps.description ?? "",
      steps: steps.cards.map((step) => ({
        name: step.title,
        text: step.description,
      })),
      totalTime: howToTotalTime,
    })}
  />

  <div class="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
    <Breadcrumb
      {lang}
      customItems={[
        { label: breadcrumb, href: localizeUrl(path, lang), isCurrentPage: true },
      ]}
    />
  </div>

  <FeatureHero
    {lang}
    badge={hero.badge}
    title={hero.title}
    description={hero.description}
    primaryCta={cta.primary}
    secondaryCta={cta.secondary}
    appStoreLink={getAppStoreLink([source, "hero", lang])}
  />

  <section class="py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="rounded-3xl bg-white p-8 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
      >
        <div
          class={flow
            ? "grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]"
            : ""}
        >
          <div>
            <p class="text-base/7 font-semibold text-orange-600">
              {summary.title}
            </p>
            <p class="mt-3 max-w-4xl text-lg/8 opacity-70">
              {summary.body}
            </p>
          </div>
          {#if flow}
            <FlowFigure
              sources={flow.sources}
              outputs={flow.outputs}
              class="rounded-2xl bg-neutral-50/80 py-8 dark:bg-neutral-900/40"
            />
          {/if}
        </div>
      </div>
    </div>
  </section>

  <section class="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {firstSection.title}
        </h2>
        {#if firstSection.description}
          <p class="mt-4 text-lg opacity-60">{firstSection.description}</p>
        {/if}
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {#each firstSection.cards as item (item.title)}
          <div class="relative flex">
            <div class="absolute inset-px rounded-3xl bg-white dark:bg-neutral-900"></div>
            <div class="relative w-full rounded-3xl p-6">
              <h3 class="text-lg font-semibold tracking-tight opacity-90">
                {item.title}
              </h3>
              <p class="mt-3 text-sm/6 opacity-60">{item.description}</p>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5 dark:ring-white/10"
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
          {steps.title}
        </h2>
        {#if steps.description}
          <p class="mt-4 text-lg opacity-60">{steps.description}</p>
        {/if}
      </div>
      <div class="mx-auto mt-12 max-w-3xl">
        <div class="relative">
          <div
            class="absolute top-2 bottom-2 left-5 w-px bg-neutral-200 dark:bg-neutral-800"
            aria-hidden="true"
          ></div>
          <div class="space-y-10">
            {#each steps.cards as item, index (item.title)}
              <div class="relative flex gap-5">
                <div
                  class="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-100 text-base font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                >
                  {index + 1}
                </div>
                <div class="flex-1 pt-1.5">
                  <h3 class="text-lg font-semibold tracking-tight opacity-90">
                    {item.title}
                  </h3>
                  <p class="mt-2 text-base/7 opacity-60">{item.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-neutral-50/70 py-24 dark:bg-neutral-900/40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {thirdSection.title}
        </h2>
        {#if thirdSection.description}
          <p class="mt-4 text-lg opacity-60">{thirdSection.description}</p>
        {/if}
      </div>
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {#each thirdSection.cards as item (item.title)}
          <div
            class="rounded-3xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
          >
            <h3 class="text-lg font-semibold">{item.title}</h3>
            <p class="mt-3 text-sm opacity-60">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <FAQSection {lang} title={faqTitle} description={faqDescription} items={faqs} />

  <section class="border-t border-neutral-200 py-20 dark:border-neutral-800">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
      <div>
        <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
          {cta.title}
        </h2>
        <p class="mt-4 text-lg opacity-60">{cta.description}</p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={getAppStoreLink([source, "cta", lang])}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-orange-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            {cta.primary}
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
            {cta.secondary}
          </a>
        </div>
      </div>
      <div
        class="rounded-3xl bg-white p-6 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
      >
        <h3 class="text-lg font-semibold tracking-tight opacity-90">
          {relatedTitle}
        </h3>
        <div class="mt-4 space-y-3">
          {#each relatedLinks as item (item.href)}
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
