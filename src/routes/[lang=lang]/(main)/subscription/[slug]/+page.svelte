<script lang="ts">
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";
  import { getAppStoreLink } from "$lib/constants";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const lang = $derived(data.lang as Language);
  const t = $derived(uiDictionary[lang].subscription);
  const appStoreLink = $derived(getAppStoreLink(["subscription", "page", lang]));
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <Breadcrumb {lang} />
  <div class="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52">
    {#if data.channel}
      <div
        class="flex flex-col rounded-lg border bg-white p-4 sm:p-8 dark:bg-neutral-900"
      >
        <h1
          class="flex gap-2 text-2xl font-semibold tracking-tight text-balance opacity-90"
        >
          <span
            style={`background-color: ${data.channel.color}; width: 6px; margin: 6px 0; border-radius: 6px;`}
          ></span>
          {data.channel.name}
          <span class="opacity-60">#{data.channel.id}</span>
        </h1>
        <p class="mt-2 font-medium text-pretty">{data.channel.titleTemplate}</p>
        <p class="font-medium text-pretty opacity-60">
          {data.channel.bodyTemplate}
        </p>
        {#if data.channel.note}
          <div class="mt-4 flex font-medium text-pretty opacity-60">
            <div class="mr-2 w-1 rounded-full bg-foreground"></div>
            <p>{data.channel.note}</p>
          </div>
        {/if}
      </div>
      <a
        class="mt-4 block w-full rounded-lg bg-orange-500 py-2 text-center text-white"
        href={`echobell://subscribe/${data.token}`}
      >
        {t.subscribe}
      </a>
    {:else}
      <div class="mb-20 text-center text-4xl">{t.channelNotFound}</div>
    {/if}

    <p class="mt-5">{t.subscriptionTips}</p>
    <p class="mt-2">{t.downloadTips}</p>
    <div class="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
      <StoreDownloadLinks appStoreImage={t.appStoreImage} {appStoreLink} />
      <a
        href={localizeUrl("/docs", lang)}
        class="text-sm/6 font-semibold opacity-90"
      >
        {t.learnMore} <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</div>
