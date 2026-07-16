<script lang="ts">
  import { CircleCheck } from "@lucide/svelte";

  let {
    title,
    subtitle,
    steps,
  }: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  } = $props();
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
          class="absolute left-6 top-0 w-0.5 bg-orange-200 dark:bg-orange-800"
          style="height: calc(100% - 3rem)"
        ></div>
        <div class="space-y-12">
          {#each steps as step, index (index)}
            <div class="relative flex gap-6">
              <div
                class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white shadow-lg"
              >
                {index + 1}
              </div>
              <div class="flex-1 pt-2">
                <h3 class="text-xl font-semibold">{step.title}</h3>
                <p class="mt-2 opacity-60">{step.description}</p>
              </div>
            </div>
          {/each}
          <div class="relative flex gap-6">
            <div
              class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg"
            >
              <CircleCheck class="h-6 w-6" />
            </div>
            <div class="flex-1 pt-3">
              <p class="text-lg font-medium opacity-60">Done!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
