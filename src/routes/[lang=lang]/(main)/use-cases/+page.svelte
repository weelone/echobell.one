<script lang="ts">
  import {
    Activity,
    ArrowRight,
    BellRing,
    CandlestickChart,
    CircleCheck,
    Code,
    House,
    LifeBuoy,
    Rocket,
    ServerCog,
  } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FAQSection from "$lib/components/FAQSection.svelte";
  import CTASection from "$lib/components/home/CTASection.svelte";
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";
  import AnimatedShinyText from "$lib/components/magicui/AnimatedShinyText.svelte";
  import { faqJsonLd, featureJsonLd, howToJsonLd } from "$lib/jsonld";
  import { toAbsoluteUrl } from "$lib/metadata";
  import { getAppStoreLink } from "$lib/constants";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";
  import { getCopy } from "$lib/landing/use-cases";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(getCopy(lang));
  const dict = $derived(uiDictionary[lang]);
  const canonical = $derived(toAbsoluteUrl(localizeUrl("/use-cases", lang)));

  const useCaseIcons = [
    BellRing,
    CandlestickChart,
    LifeBuoy,
    House,
    Rocket,
    Activity,
    Code,
    ServerCog,
  ];
</script>

<div class="min-h-screen bg-white dark:bg-black">
  <JsonLd
    data={featureJsonLd({
      name: t.meta.title,
      description: t.meta.description,
      url: canonical,
    })}
  />
  <JsonLd
    data={howToJsonLd({
      name: t.howTo.name,
      description: t.howTo.description,
      steps: t.howTo.steps,
      totalTime: "PT15M",
    })}
  />
  <JsonLd data={faqJsonLd(t.faq.items)} />

  <div class="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
    <Breadcrumb
      {lang}
      customItems={[
        {
          label: t.hero.badge,
          href: localizeUrl("/use-cases", lang),
          isCurrentPage: true,
        },
      ]}
    />
  </div>

  <section class="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-7xl py-16 text-center sm:py-24">
      <div class="mb-6 flex justify-center">
        <div
          class="group rounded-full border border-black/10 bg-white text-base shadow-sm ring-1 ring-black/5 transition-all ease-in dark:border-white/10 dark:bg-neutral-800"
        >
          <AnimatedShinyText
            class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          >
            <span class="text-sm font-medium tracking-wide">{t.hero.badge}</span>
          </AnimatedShinyText>
        </div>
      </div>
      <h1
        class="text-4xl font-bold tracking-tight text-balance opacity-90 sm:text-6xl lg:text-7xl"
      >
        {t.hero.title}
      </h1>
      <p
        class="mx-auto mt-8 max-w-2xl text-xl leading-relaxed font-medium text-pretty opacity-60"
      >
        {t.hero.subtitle}
      </p>
      <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-40">
        {t.hero.description}
      </p>
      <div class="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <StoreDownloadLinks
          appStoreImage={dict.hero.appStoreImage}
          appStoreLink={getAppStoreLink(["use-cases", "hero", lang])}
        />
        <a
          href={localizeUrl("/docs", lang)}
          class="group flex items-center gap-1.5 py-3 text-sm font-bold opacity-90"
        >
          {t.hero.secondary}
          <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>

  <section class="py-12 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="space-y-32">
        {#each t.useCases as useCase, index (useCase.id)}
          {@const Icon = useCaseIcons[index]}
          <div id={useCase.id} class="scroll-mt-24">
            <div class="grid items-start gap-12 lg:grid-cols-12">
              <!-- Sticky Info Column -->
              <div class="lg:sticky lg:top-24 lg:col-span-5">
                <div
                  class="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-xl shadow-orange-600/20 ring-1 ring-orange-600/50"
                >
                  <Icon class="h-8 w-8" />
                </div>
                <h2
                  class="text-3xl leading-tight font-bold tracking-tight opacity-90 sm:text-4xl lg:text-5xl"
                >
                  {useCase.title}
                </h2>
                <p class="mt-6 text-xl leading-relaxed opacity-60">
                  {useCase.summary}
                </p>

                <div
                  class="mt-12 ml-1 space-y-10 border-l-2 border-neutral-100 pl-8 dark:border-neutral-800"
                >
                  <div>
                    <h3
                      class="mb-3 text-xs font-bold tracking-[0.2em] text-orange-600/80 uppercase"
                    >
                      {useCase.problemLabel}
                    </h3>
                    <p class="text-base leading-relaxed opacity-70">
                      {useCase.problem}
                    </p>
                  </div>
                  <div>
                    <h3
                      class="mb-3 text-xs font-bold tracking-[0.2em] text-green-600 uppercase"
                    >
                      {useCase.resultLabel}
                    </h3>
                    <p class="text-base leading-relaxed font-medium opacity-80">
                      {useCase.result}
                    </p>
                  </div>
                </div>

                <div class="mt-12 flex flex-wrap gap-4">
                  {#each useCase.links as link (link.href)}
                    <a
                      href={link.href}
                      class="inline-flex items-center rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-bold ring-1 ring-black/5 transition-all hover:bg-orange-600 hover:text-white dark:bg-neutral-900 dark:ring-white/5"
                    >
                      {link.label}
                      <ArrowRight class="ml-2 h-4 w-4" />
                    </a>
                  {/each}
                </div>
              </div>

              <!-- Workflow Column -->
              <div class="lg:col-span-7">
                <div
                  class="relative flex flex-col gap-1 rounded-[3rem] bg-neutral-50 p-4 shadow-inner ring-1 ring-black/5 dark:bg-neutral-900/50 dark:ring-white/10"
                >
                  <div
                    class="rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-12 dark:bg-black dark:ring-white/5"
                  >
                    <h3 class="mb-10 flex items-center gap-3 text-xl font-bold opacity-90">
                      <span
                        class="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-600"
                      ></span>
                      {useCase.workflowLabel}
                    </h3>
                    <div class="relative">
                      <div
                        class="absolute left-6 top-0 w-px bg-neutral-100 dark:bg-neutral-800"
                        style="height: calc(100% - 2.5rem)"
                      ></div>
                      <div class="space-y-12">
                        {#each useCase.workflowSteps as step, sIndex (sIndex)}
                          <div class="relative flex gap-8">
                            <div
                              class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-neutral-100 bg-white text-lg font-bold text-orange-600 shadow-sm ring-4 ring-white dark:border-neutral-700 dark:bg-neutral-800 dark:ring-neutral-900"
                            >
                              {sIndex + 1}
                            </div>
                            <div class="flex-1 pt-2.5">
                              <p class="text-lg leading-relaxed font-medium opacity-80">
                                {step}
                              </p>
                            </div>
                          </div>
                        {/each}
                        <div class="relative flex gap-8">
                          <div
                            class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg shadow-orange-600/30 ring-4 ring-white dark:ring-neutral-900"
                          >
                            <CircleCheck class="h-6 w-6" />
                          </div>
                          <div class="flex-1 pt-3">
                            <p class="text-lg font-bold text-orange-600">
                              Done! System ready.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <div class="bg-neutral-50/50 py-12 dark:bg-neutral-900/20">
    <FAQSection {lang} title={t.faq.title} items={t.faq.items} />
  </div>

  <CTASection {lang} />
</div>
