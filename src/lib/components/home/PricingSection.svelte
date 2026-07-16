<script lang="ts">
  import { Check } from "@lucide/svelte";
  import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
  import { uiDictionary, type Language } from "$lib/i18n";
  import BorderBeam from "$lib/components/magicui/BorderBeam.svelte";

  let { lang }: { lang: Language } = $props();

  const t = $derived(uiDictionary[lang].pricing);
  const tiers = $derived([t.monthly, t.annual]);

  function classNames(...classes: (string | false)[]) {
    return classes.filter(Boolean).join(" ");
  }
</script>

<div id="pricing" class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold text-orange-600">{t.title}</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        {t.subtitle}
      </p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg opacity-60">
      {t.callout}
    </p>
    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
    >
      {#each tiers as tier, i (tier.id)}
        <div
          class={classNames(
            tier.featured
              ? "relative bg-neutral-800 shadow-2xl"
              : "bg-white/60 sm:mx-8 lg:mx-0 dark:bg-black/50",
            !tier.featured &&
              (i === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none"),
            "rounded-3xl p-8 ring-1 ring-neutral-900/10 sm:p-10"
          )}
        >
          <h3
            id={tier.id}
            class={classNames(
              tier.featured ? "text-orange-400" : "text-orange-600",
              "text-base/7 font-semibold"
            )}
          >
            {tier.name}
          </h3>
          <p class="mt-4 flex items-baseline gap-x-2">
            <span
              class={classNames(
                tier.featured ? "text-white" : "opacity-90",
                "text-5xl font-semibold tracking-tight"
              )}
            >
              {tier.price}<span
                class="ml-2 text-sm leading-6 font-semibold tracking-tight text-neutral-400"
                >{t.currency}</span
              >
            </span>
            <span
              class={classNames(
                tier.featured ? "text-neutral-400" : "opacity-50",
                "text-base"
              )}
            >
              {t.period}
            </span>
          </p>
          <p
            class={classNames(
              tier.featured ? "text-neutral-300" : "opacity-60",
              "mt-6 text-base/7"
            )}
          >
            {tier.description}
          </p>
          <ul
            role="list"
            class={classNames(
              tier.featured ? "text-neutral-300" : "opacity-60",
              "mt-8 space-y-3 text-sm/6 sm:mt-10"
            )}
          >
            {#each tier.features as feature (feature)}
              <li class="flex gap-x-3">
                <Check
                  aria-hidden="true"
                  class={classNames(
                    tier.featured ? "text-orange-400" : "text-orange-600",
                    "h-6 w-5 flex-none"
                  )}
                />
                {feature}
              </li>
            {/each}
          </ul>
          <a
            href={getAppStoreLink(["home", "pricing", tier.id, lang])}
            target="_blank"
            aria-describedby={tier.id}
            class={classNames(
              tier.featured
                ? "bg-orange-500 text-white shadow-xs hover:bg-orange-400 focus-visible:outline-orange-500"
                : "text-orange-600 ring-1 ring-orange-500/30 ring-inset hover:ring-orange-500/50 focus-visible:outline-orange-600",
              "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
            )}
          >
            {t.startTrial}
          </a>
          <a
            href={getGooglePlayLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby={tier.id}
            class={classNames(
              tier.featured
                ? "text-white ring-1 ring-white/20 ring-inset hover:bg-white/10 focus-visible:outline-white"
                : "text-neutral-700 ring-1 ring-neutral-900/10 ring-inset hover:ring-neutral-900/20 focus-visible:outline-neutral-600 dark:text-neutral-200 dark:ring-white/10 dark:hover:ring-white/20",
              "mt-3 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
            )}
          >
            Google Play
          </a>
          {#if tier.featured}
            <BorderBeam
              duration={10}
              size={500}
              class="from-transparent via-orange-600 to-transparent"
            />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
