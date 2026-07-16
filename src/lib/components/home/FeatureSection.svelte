<script lang="ts">
  import { AtSign, Globe, PhoneIncoming, Users } from "@lucide/svelte";
  import { localizeUrl, uiDictionary, type Language } from "$lib/i18n";

  let { lang }: { lang: Language } = $props();

  const t = $derived(uiDictionary[lang].features);
  const featureIcons = [PhoneIncoming, Globe, AtSign, Users];
  const featureLinks = [
    "/features/call-notifications",
    "/features/webhooks",
    "/features/email-triggers",
    "/features/channels",
  ];
</script>

<div class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-7xl">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
    >
      <div class="lg:pt-4 lg:pr-8">
        <div class="lg:max-w-lg">
          <h2 class="text-base/7 font-semibold text-orange-600">{t.title}</h2>
          <p
            class="mt-2 text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl"
          >
            {t.subtitle}
          </p>
          <p class="mt-6 text-lg/8 opacity-60">{t.description}</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
            {#each t.items as feature, index (feature.name)}
              {@const Icon = featureIcons[index]}
              <a
                href={localizeUrl(featureLinks[index], lang)}
                class="group relative -mx-3 block rounded-lg px-3 py-2 pl-9 transition-colors hover:bg-orange-50 dark:hover:bg-orange-950/20"
              >
                <dt
                  class="inline font-semibold opacity-90 transition-colors group-hover:text-orange-600"
                >
                  <Icon
                    aria-hidden="true"
                    class="absolute top-3 left-0 size-5 text-orange-600"
                  />
                  {feature.name}
                </dt>
                <dd class="inline opacity-60">{feature.description}</dd>
              </a>
            {/each}
          </dl>
        </div>
      </div>
      <div
        class="relative h-fit w-[32rem] max-w-none overflow-hidden rounded-xl p-0 shadow-xl ring-1 ring-neutral-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 dark:brightness-85"
      >
        <img
          alt="Product screenshot"
          src="/images/screenshots.webp"
          width="4104"
          height="2868"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</div>
