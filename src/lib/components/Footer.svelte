<script lang="ts">
  import Logo from "./Logo.svelte";
  import NavLinks from "./NavLinks.svelte";
  import QRCode from "./QRCode.svelte";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { uiDictionary, type Language } from "$lib/i18n";

  let { lang }: { lang: Language } = $props();

  const t = $derived(uiDictionary[lang].footer);
  const footerLink = $derived(getAppStoreLink(["footer", "link", lang]));
  const footerQrLink = $derived(getAppStoreLink(["footer", "qr", lang]));
  const year = new Date().getFullYear();
</script>

<footer
  class="relative isolate overflow-hidden border-t border-neutral-200 p-6 lg:p-8 dark:border-neutral-800"
>
  <div class="mx-auto max-w-7xl">
    <div
      class="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:py-16"
    >
      <div>
        <div class="flex items-center opacity-90">
          <Logo class="h-10 w-10 flex-none text-orange-500" />
          <div class="ml-4">
            <p class="text-base font-semibold">Echobell</p>
            <p class="mt-1 text-sm opacity-60">{t.subtitle}</p>
          </div>
        </div>
        <div
          class="group relative mt-8 flex items-center self-stretch transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto"
        >
          <div class="relative flex h-24 w-24 flex-none items-center justify-center">
            <svg
              viewBox="0 0 96 96"
              fill="none"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full stroke-neutral-300 transition-colors group-hover:stroke-orange-500"
            >
              <path
                d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <QRCode value={footerQrLink} class="h-20 w-20" />
          </div>
          <div class="ml-8 lg:w-64">
            <p class="text-base font-semibold opacity-90">
              <a href={footerLink} target="_blank" rel="noopener noreferrer">
                {t.downloadFromAppStore}
              </a>
            </p>
            <p class="mt-1 text-sm font-semibold opacity-90">
              <a
                href={getGooglePlayLink()}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-orange-500"
              >
                Google Play
              </a>
            </p>
            <p class="mt-1 text-sm opacity-60">{t.scanQRCode}</p>
          </div>
        </div>
      </div>
      <nav class="grid w-full grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-12 lg:gap-16">
        {#each t.linkGroups as group (group.label)}
          <div class="flex flex-col">
            <h4 class="text-sm font-semibold opacity-90">{group.label}</h4>
            <ul class="mt-3 flex flex-col space-y-2.5">
              <NavLinks links={group.links} hoverBackground={false} />
            </ul>
          </div>
        {/each}
      </nav>
    </div>
    <div
      class="flex flex-col items-center border-t border-neutral-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6 dark:border-neutral-800"
    >
      <p class="mt-6 text-sm opacity-60 md:mt-0">echobell@weelone.com</p>
      <p class="mt-6 text-sm opacity-60 md:mt-0">
        &copy; Copyright {year}. All rights reserved.
      </p>
    </div>
  </div>
</footer>
