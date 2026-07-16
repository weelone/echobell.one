<script lang="ts">
  // Styled to match the homepage hero: orange accents, semibold titles,
  // rounded-full CTAs.
  import { ArrowRight } from "@lucide/svelte";
  import { localizeUrl, type Language } from "$lib/i18n";
  import { getGooglePlayLink } from "$lib/constants";

  let {
    lang,
    badge,
    title,
    description,
    primaryCta,
    secondaryCta,
    appStoreLink,
  }: {
    lang: Language;
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    appStoreLink: string;
  } = $props();
</script>

<section class="relative isolate overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
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
      <p class="mt-6 text-lg leading-8 opacity-60">
        {description}
      </p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          class="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-600"
        >
          Google Play
        </a>
        <a
          href={localizeUrl("/docs", lang)}
          class="group flex items-center text-sm font-semibold text-neutral-900 dark:text-neutral-100"
        >
          {secondaryCta}
          <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </div>
</section>
