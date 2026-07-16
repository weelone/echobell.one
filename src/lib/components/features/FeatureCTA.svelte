<script lang="ts">
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";

  let {
    lang,
    title,
    description,
    primaryCta,
    secondaryCta,
    appStoreLink,
  }: {
    lang: Language;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    appStoreLink: string;
  } = $props();

  const appStoreImage = $derived(uiDictionary[lang].cta.appStoreImage);
</script>

<section
  class="bg-gradient-to-br from-orange-50 to-amber-50 py-24 sm:py-32 dark:from-orange-950/30 dark:to-amber-950/30"
>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
        {title}
      </h2>
      <p class="mt-6 text-lg opacity-60">{description}</p>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <StoreDownloadLinks
          {appStoreImage}
          {appStoreLink}
          appStoreAlt={primaryCta}
        />
        <a
          href={localizeUrl("/docs", lang)}
          class="rounded-full border-2 border-orange-200 px-6 py-2.5 text-sm font-semibold transition-colors hover:border-orange-300 dark:border-orange-800 dark:hover:border-orange-700"
        >
          {secondaryCta}
        </a>
      </div>
    </div>
  </div>
</section>
