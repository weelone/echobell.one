<script lang="ts">
  import {
    ArrowRight,
    BellRing,
    CandlestickChart,
    LifeBuoy,
    ServerCog,
  } from "@lucide/svelte";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";

  let { lang }: { lang: Language } = $props();

  const icons = [BellRing, CandlestickChart, LifeBuoy, ServerCog];

  const popularLinksByLang: Record<
    Language,
    { label: string; href: string }[]
  > = {
    zh: [
      { label: "Pushover 替代方案", href: "/pushover-alternative" },
      { label: "ntfy 替代方案", href: "/ntfy-alternative" },
      { label: "专注模式告警", href: "/focus-mode-alerts" },
      {
        label: "App Store Connect 通知",
        href: "/app-store-connect-review-notifications",
      },
    ],
    es: [
      { label: "Alternativa a Pushover", href: "/pushover-alternative" },
      { label: "Alternativa a ntfy", href: "/ntfy-alternative" },
      { label: "Alertas con Focus Mode", href: "/focus-mode-alerts" },
      {
        label: "Notificaciones de App Store Connect",
        href: "/app-store-connect-review-notifications",
      },
    ],
    fr: [
      { label: "Alternative à Pushover", href: "/pushover-alternative" },
      { label: "Alternative à ntfy", href: "/ntfy-alternative" },
      { label: "Alertes Focus Mode", href: "/focus-mode-alerts" },
      {
        label: "Notifications App Store Connect",
        href: "/app-store-connect-review-notifications",
      },
    ],
    ja: [
      { label: "Pushover の代替", href: "/pushover-alternative" },
      { label: "ntfy の代替", href: "/ntfy-alternative" },
      { label: "集中モード通知", href: "/focus-mode-alerts" },
      {
        label: "App Store Connect 通知",
        href: "/app-store-connect-review-notifications",
      },
    ],
    de: [
      { label: "Pushover-Alternative", href: "/pushover-alternative" },
      { label: "ntfy-Alternative", href: "/ntfy-alternative" },
      { label: "Fokusmodus-Alarme", href: "/focus-mode-alerts" },
      {
        label: "App Store Connect Benachrichtigungen",
        href: "/app-store-connect-review-notifications",
      },
    ],
    en: [
      { label: "Pushover alternative", href: "/pushover-alternative" },
      { label: "ntfy alternative", href: "/ntfy-alternative" },
      { label: "Focus Mode alerts", href: "/focus-mode-alerts" },
      {
        label: "App Store Connect notifications",
        href: "/app-store-connect-review-notifications",
      },
    ],
  };

  const popularPagesLabel: Record<Language, string> = {
    zh: "热门页面",
    es: "Paginas populares",
    fr: "Pages populaires",
    ja: "人気ページ",
    de: "Beliebte Seiten",
    en: "Popular Pages",
  };

  const t = $derived(uiDictionary[lang].useCases);
  const popularLinks = $derived(popularLinksByLang[lang] ?? []);
</script>

<section class="py-24 sm:py-32">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-orange-600">
      {t.eyebrow}
    </h2>
    <p
      class="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl"
    >
      {t.title}
    </p>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg/8 opacity-60">
      {t.description}
    </p>

    <div class="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
      {#each t.items as card, index (card.href)}
        {@const Icon = icons[index]}
        <div class="group relative">
          <div
            class="absolute inset-px rounded-[2rem] bg-white dark:bg-black"
          ></div>
          <a
            href={localizeUrl(card.href, lang)}
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem+1px)] p-8"
          >
            <div
              class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-950/40"
            >
              <Icon class="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 class="mt-6 text-lg font-medium tracking-tight opacity-90">
              {card.title}
            </h3>
            <p class="mt-2 text-sm/6 opacity-60">{card.description}</p>
            <div
              class="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-orange-600 dark:text-orange-400"
            >
              {t.learnMore}
              <ArrowRight
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </div>
          </a>
          <div
            class="pointer-events-none absolute inset-px rounded-[2rem] ring-1 shadow-sm ring-black/5 transition-shadow group-hover:shadow-md"
          ></div>
        </div>
      {/each}
    </div>

    <div class="mt-12 flex justify-center">
      <a
        href={localizeUrl("/use-cases", lang)}
        class="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
      >
        {t.exploreAll}
        <ArrowRight
          class="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>

    {#if popularLinks.length > 0}
      <div class="mx-auto mt-16 max-w-4xl text-center">
        <p class="text-base/7 font-semibold text-orange-600">
          {popularPagesLabel[lang]}
        </p>
        <div class="mt-4 flex flex-wrap justify-center gap-3">
          {#each popularLinks as item (item.href)}
            <a
              href={localizeUrl(item.href, lang)}
              class="rounded-full bg-white px-4 py-2 text-sm font-medium opacity-80 ring-1 shadow-sm ring-black/5 transition-colors hover:text-orange-600 hover:opacity-100 dark:bg-black dark:hover:text-orange-400"
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>
