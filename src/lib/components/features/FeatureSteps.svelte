<script lang="ts">
  import { CircleCheck } from "@lucide/svelte";
  import type { Language } from "$lib/i18n";

  let {
    lang = "en",
    title,
    subtitle,
    steps,
  }: {
    lang?: Language;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  } = $props();

  const doneLabels: Record<Language, string> = {
    en: "Done!",
    zh: "完成！",
    es: "¡Listo!",
    fr: "Terminé !",
    ja: "完了！",
    de: "Fertig!",
  };
</script>

<section class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-semibold tracking-tight opacity-90 sm:text-4xl">
        {title}
      </h2>
      <p class="mt-4 text-lg opacity-60">{subtitle}</p>
    </div>
    <div class="mx-auto mt-16 max-w-3xl">
      <div class="relative">
        <div
          class="absolute top-2 bottom-2 left-5 w-px bg-neutral-200 dark:bg-neutral-800"
          aria-hidden="true"
        ></div>
        <div class="space-y-10">
          {#each steps as step, index (index)}
            <div class="relative flex gap-5">
              <div
                class="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-100 text-base font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300"
              >
                {index + 1}
              </div>
              <div class="flex-1 pt-1.5">
                <h3 class="text-lg font-semibold tracking-tight opacity-90">
                  {step.title}
                </h3>
                <p class="mt-2 text-base/7 opacity-60">{step.description}</p>
              </div>
            </div>
          {/each}
          <div class="relative flex gap-5">
            <div
              class="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-orange-600 text-white shadow-sm"
            >
              <CircleCheck class="h-5 w-5" />
            </div>
            <p class="flex-1 pt-2 text-lg font-semibold text-orange-600 dark:text-orange-400">
              {doneLabels[lang] ?? doneLabels.en}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
