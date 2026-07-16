<script lang="ts">
  // Hero for comparison pages: badge, title, description, an "Echobell VS X"
  // visual, and the standard CTA row. Matches the homepage design language.
  import { ArrowRight } from "@lucide/svelte";
  import Logo from "$lib/components/Logo.svelte";
  import BrandMark from "$lib/components/landing/BrandMark.svelte";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { getGooglePlayLink } from "$lib/constants";

  let {
    lang,
    badge,
    title,
    description,
    competitorName,
    primaryCta,
    secondaryCta,
    appStoreLink,
  }: {
    lang: Language;
    badge: string;
    title: string;
    description: string;
    competitorName: string;
    primaryCta: string;
    secondaryCta: string;
    appStoreLink: string;
  } = $props();
</script>

<section class="relative isolate overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <span
        class="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
      >
        {badge}
      </span>
      <h1
        class="mt-6 text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl lg:text-6xl"
      >
        {title}
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg/8 text-pretty opacity-60">
        {description}
      </p>

      <div class="mx-auto mt-10 flex max-w-md items-center justify-center gap-4">
        <div
          class="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-white px-4 py-5 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
        >
          <span class="flex h-8 w-8 items-center justify-center">
            <Logo class="h-8 w-8 text-orange-500" />
          </span>
          <span class="text-sm font-semibold opacity-90">Echobell</span>
        </div>
        <div
          class="flex size-10 flex-none items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white shadow-sm"
        >
          VS
        </div>
        <div
          class="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-white px-4 py-5 ring-1 shadow-sm ring-black/5 dark:bg-black dark:ring-white/10"
        >
          <BrandMark name={competitorName} class="h-8 w-8 text-base" />
          <span class="line-clamp-1 text-sm font-semibold opacity-70">
            {competitorName}
          </span>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <a
          href={appStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-500"
        >
          {primaryCta}
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
          {secondaryCta}
          <ArrowRight
            class="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  </div>
</section>
