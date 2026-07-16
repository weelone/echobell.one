<script lang="ts">
  import { uiDictionary, type Language } from "$lib/i18n";
  import Iphone15Pro from "$lib/components/magicui/Iphone15Pro.svelte";
  import Globe from "$lib/components/magicui/Globe.svelte";
  import NotificationList from "./NotificationList.svelte";
  import ForwardingFigure from "./ForwardingFigure.svelte";
  import PrivacyFigure from "./PrivacyFigure.svelte";

  let { lang }: { lang: Language } = $props();

  const t = $derived(uiDictionary[lang].features);
</script>

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-center text-base/7 font-semibold text-orange-600">
      {t.title}
    </h2>
    <p
      class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl"
    >
      {t.subtitle}
    </p>
    <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
      <div class="relative lg:row-span-2">
        <div
          class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] dark:bg-black"
        ></div>
        <div
          class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
        >
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p
              class="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center"
            >
              {t.multipleNotifications.title}
            </p>
            <p class="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
              {t.multipleNotifications.description}
            </p>
          </div>
          <div
            class="@container relative max-h-[30rem] min-h-[30rem] w-full grow overflow-hidden max-lg:mx-auto max-lg:max-w-sm"
          >
            <Iphone15Pro class="absolute top-10 w-full overflow-hidden px-2" />
            <NotificationList {lang} class="absolute top-30 left-10 right-10" />
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"
        ></div>
      </div>
      <div class="relative max-lg:row-start-1">
        <div
          class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] dark:bg-black"
        ></div>
        <div
          class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
        >
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p
              class="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center"
            >
              {t.flexibleChannels.title}
            </p>
            <p class="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
              {t.flexibleChannels.description}
            </p>
          </div>
          <div
            class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"
          >
            <ForwardingFigure />
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"
        ></div>
      </div>
      <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div class="absolute inset-px rounded-lg bg-white dark:bg-black"></div>
        <div
          class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]"
        >
          <div class="px-8 pt-8 sm:px-10 sm:pt-10">
            <p
              class="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center"
            >
              {t.privacy.title}
            </p>
            <p class="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
              {t.privacy.description}
            </p>
          </div>
          <div
            class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"
          >
            <PrivacyFigure />
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"
        ></div>
      </div>
      <div class="relative lg:row-span-2">
        <div
          class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] dark:bg-black"
        ></div>
        <div
          class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
        >
          <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
            <p
              class="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center"
            >
              {t.multipleTriggers.title}
            </p>
            <p class="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
              {t.multipleTriggers.description}
            </p>
          </div>
          <div
            class="relative mt-auto flex min-h-[20rem] w-full grow flex-col justify-end"
          >
            <Globe class="lg:mt-auto" />
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
        ></div>
      </div>
    </div>
  </div>
</div>
