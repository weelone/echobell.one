<script lang="ts">
  import { ArrowRight } from "@lucide/svelte";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";
  import { getAppStoreLink } from "$lib/constants";
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";
  import AnimatedShinyText from "$lib/components/magicui/AnimatedShinyText.svelte";
  import Marquee from "$lib/components/magicui/Marquee.svelte";
  import Iphone15Pro from "$lib/components/magicui/Iphone15Pro.svelte";
  import NotificationList from "./NotificationList.svelte";
  import Cover from "$lib/components/Cover.svelte";

  let {
    lang,
    latestPost,
  }: {
    lang: Language;
    latestPost: { url: string; title: string } | undefined;
  } = $props();

  const t = $derived(uiDictionary[lang].hero);
  const appStoreLink = $derived(getAppStoreLink(["home", "hero", lang]));

  const integrations = [
    {
      name: "GitHub",
      docUrl: "/docs/developer/github",
      logo: "/images/logos/github.svg",
      small: true,
    },
    {
      name: "TradingView",
      docUrl: "/docs/trader/tradingview",
      logo: "/images/logos/tradingview.svg",
      small: false,
    },
    {
      name: "Grafana",
      docUrl: "/docs/developer/grafana",
      logo: "/images/logos/grafana.svg",
      small: false,
    },
    {
      name: "Upptime",
      docUrl: "/docs/developer/upptime",
      logo: "/images/logos/upptime.svg",
      small: false,
    },
  ];
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <div class="mx-auto max-w-7xl py-24">
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div class="text-center lg:text-left">
        {#if latestPost}
          <div class="mb-4 flex items-center justify-center lg:justify-start">
            <a
              class="group rounded-full border border-black/10 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-800"
              href={latestPost.url}
            >
              <AnimatedShinyText
                class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
              >
                <span class="line-clamp-1 text-sm lg:text-base">
                  ✨ {latestPost.title}
                </span>
                <ArrowRight
                  class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </AnimatedShinyText>
            </a>
          </div>
        {/if}
        <h1
          class="text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-6xl"
        >
          {#each t.title as segment, i (i)}
            {#if typeof segment === "string"}{segment}{:else}<Cover
                >{segment.cover}</Cover
              >{/if}
          {/each}
        </h1>
        <p class="mt-4 text-lg font-medium text-pretty opacity-60 sm:text-xl/8">
          {t.description}
        </p>
        <div
          class="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start"
        >
          <StoreDownloadLinks
            appStoreImage={t.appStoreImage}
            {appStoreLink}
            class="lg:justify-start"
          />
          <a
            href={localizeUrl("/docs", lang)}
            class="text-sm/6 font-semibold opacity-90"
          >
            {t.getStarted} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div
          class="@container relative max-h-[30rem] min-h-[30rem] w-full grow overflow-hidden"
        >
          <Iphone15Pro class="absolute top-10 w-full overflow-hidden px-2" />
          <NotificationList {lang} class="absolute top-30 left-10 right-10" />
        </div>
      </div>
    </div>

    <div class="mt-20 text-center">
      <h3 class="font-semibold opacity-60">{t.canBeIntegratedInto}</h3>
      <div
        class="relative mt-4 flex w-full flex-col items-center justify-center overflow-hidden"
      >
        <Marquee pauseOnHover class="[--duration:20s]">
          {#each integrations as integration (integration.name)}
            <a
              href={localizeUrl(integration.docUrl, lang)}
              title={`Integration with ${integration.name}`}
              class="mx-4 flex items-center self-center opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <img
                class={integration.small
                  ? "h-5 w-auto md:h-10 dark:invert"
                  : "h-6 w-auto md:h-12 dark:invert"}
                src={integration.logo}
                alt={`Logo of ${integration.name}`}
              />
            </a>
          {/each}
        </Marquee>
        <div
          class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-100 dark:from-neutral-900"
        ></div>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-100 dark:from-neutral-900"
        ></div>
      </div>
    </div>
  </div>
</div>
