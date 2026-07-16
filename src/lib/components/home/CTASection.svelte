<script lang="ts">
  import { getAppStoreLink } from "$lib/constants";
  import { uiDictionary, type Language } from "$lib/i18n";
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";

  let { lang }: { lang: Language } = $props();

  const t = $derived(uiDictionary[lang].cta);
  const appStoreLink = $derived(getAppStoreLink(["home", "cta", lang]));
</script>

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="relative mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h2>
      <p class="mx-auto mt-6 max-w-xl text-lg/8 opacity-60">{t.description}</p>
      <StoreDownloadLinks
        appStoreImage={t.appStoreImage}
        {appStoreLink}
        class="mt-10"
      />
    </div>
  </div>
</div>
