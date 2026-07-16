<script lang="ts">
  import StoreDownloadLinks from "$lib/components/StoreDownloadLinks.svelte";
  import { getAppStoreLink } from "$lib/constants";

  const appStoreLink = getAppStoreLink("not-found");
</script>

<svelte:head>
  <title>Page not found | Echobell</title>
  <meta name="robots" content="noindex, nofollow, nocache" />
</svelte:head>

<div>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      aria-hidden="true"
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-orange-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:hidden"
      ></div>
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1
          class="text-5xl font-semibold tracking-tight text-balance opacity-90 sm:text-7xl"
        >
          Page not found
        </h1>
        <p class="mt-8 text-lg font-medium text-pretty opacity-60 sm:text-xl/8">
          Sorry, we couldn&apos;t find the page you were looking for. It might
          have been removed or is temporarily unavailable.
        </p>
        <div class="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <StoreDownloadLinks
            appStoreImage="/images/app-store.en.svg"
            {appStoreLink}
          />
          <a href="/en/docs" class="text-sm/6 font-semibold opacity-90">
            Docs <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:hidden"
      ></div>
    </div>
  </div>
</div>
