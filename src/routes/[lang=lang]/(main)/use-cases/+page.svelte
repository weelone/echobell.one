<script lang="ts">
  import {
    Activity,
    ArrowRight,
    BellRing,
    CandlestickChart,
    CircleCheck,
    Code,
    GitBranch,
    Globe,
    House,
    LifeBuoy,
    Mail,
    PhoneCall,
    Rocket,
    ServerCog,
    Smartphone,
    Users,
    Webhook,
  } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import JsonLd from "$lib/components/JsonLd.svelte";
  import FAQSection from "$lib/components/FAQSection.svelte";
  import CTASection from "$lib/components/home/CTASection.svelte";
  import FlowFigure, {
    type FlowNode,
  } from "$lib/components/landing/FlowFigure.svelte";
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";
  import { featureJsonLd, howToJsonLd } from "$lib/jsonld";
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

  // Per-use-case trigger → Echobell → device diagram (brand labels only;
  // icons are language independent).
  const flows: Record<string, { sources: FlowNode[]; outputs: FlowNode[] }> = {
    "incident-response": {
      sources: [{ icon: Activity, label: "Grafana" }, { icon: Webhook }],
      outputs: [{ icon: PhoneCall }, { icon: Smartphone }],
    },
    "trading-signals": {
      sources: [
        { icon: CandlestickChart, label: "TradingView" },
        { icon: Webhook },
      ],
      outputs: [{ icon: Smartphone }],
    },
    "support-escalation": {
      sources: [{ icon: Mail }],
      outputs: [{ icon: PhoneCall }, { icon: Users }],
    },
    "smart-home": {
      sources: [{ icon: House, label: "Home Assistant" }, { icon: Webhook }],
      outputs: [{ icon: PhoneCall }],
    },
    "cicd-monitoring": {
      sources: [{ icon: GitBranch, label: "GitHub" }, { icon: Webhook }],
      outputs: [{ icon: Smartphone }],
    },
    "uptime-monitoring": {
      sources: [{ icon: Globe }, { icon: Webhook }],
      outputs: [{ icon: PhoneCall }, { icon: Smartphone }],
    },
    "serverless-functions": {
      sources: [{ icon: Code }, { icon: Webhook }],
      outputs: [{ icon: Smartphone }],
    },
    "team-sync": {
      sources: [{ icon: Webhook }, { icon: Mail }],
      outputs: [{ icon: Users }, { icon: Smartphone }],
    },
  };
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
      name: t.howTo.name,
      description: t.howTo.description,
      steps: t.howTo.steps,
      totalTime: "PT15M",
    })}
  />

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

  <section class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
        >
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
        <div
          class="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <StoreDownloadLinks
            appStoreImage={dict.hero.appStoreImage}
            appStoreLink={getAppStoreLink(["use-cases", "hero", lang])}
          />
          <a
            href={localizeUrl("/docs", lang)}
            class="group flex items-center gap-1.5 py-3 text-sm font-semibold opacity-90"
          >
            {t.hero.secondary}
            <ArrowRight
              class="size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="space-y-24 sm:space-y-32">
        {#each t.useCases as useCase, index (useCase.id)}
          {@const Icon = useCaseIcons[index]}
          <article id={useCase.id} class="scroll-mt-24">
            <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div class="lg:sticky lg:top-24 lg:col-span-5">
                <div
                  class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 dark:bg-orange-950/40"
                >
                  <Icon class="h-7 w-7 text-orange-600 dark:text-orange-400" />
                </div>
                <h2
                  class="mt-6 text-3xl font-semibold tracking-tight text-balance opacity-90 sm:text-4xl"
                >
                  {useCase.title}
                </h2>
                <p class="mt-4 text-lg/8 opacity-60">
                  {useCase.summary}
                </p>

                <div class="mt-8">
                  <h3 class="text-base/7 font-semibold text-orange-600">
                    {useCase.problemLabel}
                  </h3>
                  <p class="mt-2 text-base/7 opacity-60">
                    {useCase.problem}
                  </p>
                </div>

                <div class="mt-8 flex flex-wrap gap-3">
                  {#each useCase.links as link (link.href)}
                    <a
                      href={link.href}
                      class="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium opacity-80 ring-1 shadow-sm ring-black/5 transition-colors hover:text-orange-600 hover:opacity-100 dark:bg-black dark:hover:text-orange-400"
                    >
                      {link.label}
                      <ArrowRight
                        class="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  {/each}
                </div>
              </div>

              <div class="relative lg:col-span-7">
                <div
                  class="absolute inset-px rounded-[2rem] bg-white dark:bg-black"
                ></div>
                <div class="relative p-8 sm:p-10">
                  {#if flows[useCase.id]}
                    <FlowFigure
                      sources={flows[useCase.id].sources}
                      outputs={flows[useCase.id].outputs}
                      class="mb-8 rounded-2xl bg-neutral-50/80 py-8 dark:bg-neutral-900/40"
                    />
                  {/if}
                  <h3 class="text-base/7 font-semibold text-orange-600">
                    {useCase.workflowLabel}
                  </h3>
                  <ol class="relative mt-8 space-y-8">
                    <div
                      class="absolute top-2 bottom-2 left-4 w-px bg-neutral-200 dark:bg-neutral-800"
                      aria-hidden="true"
                    ></div>
                    {#each useCase.workflowSteps as step, sIndex (sIndex)}
                      <li class="relative flex gap-5">
                        <div
                          class="z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700 ring-4 ring-white dark:bg-orange-900/80 dark:text-orange-300 dark:ring-black"
                        >
                          {sIndex + 1}
                        </div>
                        <p class="pt-1 text-base/7 opacity-80">{step}</p>
                      </li>
                    {/each}
                  </ol>
                  <div
                    class="mt-8 flex gap-4 rounded-2xl bg-orange-50 p-5 dark:bg-orange-950/30"
                  >
                    <CircleCheck
                      class="h-6 w-6 flex-none text-orange-600 dark:text-orange-400"
                    />
                    <div>
                      <p
                        class="text-sm font-semibold text-orange-600 dark:text-orange-400"
                      >
                        {useCase.resultLabel}
                      </p>
                      <p class="mt-1 text-sm/6 opacity-70">{useCase.result}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="pointer-events-none absolute inset-px rounded-[2rem] ring-1 shadow-sm ring-black/5 dark:ring-white/10"
                ></div>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <FAQSection {lang} title={t.faq.title} items={t.faq.items} />

  <CTASection {lang} />
</div>
