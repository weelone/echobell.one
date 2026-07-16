<script lang="ts">
  import { Lock, User } from "@lucide/svelte";
  import AnimatedBeam from "$lib/components/magicui/AnimatedBeam.svelte";

  let container: HTMLElement | undefined = $state();
  let div1: HTMLElement | undefined = $state();
  let div2: HTMLElement | undefined = $state();

  const circle =
    "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 dark:bg-black";
</script>

<div
  class="relative flex h-full w-full items-center justify-center overflow-hidden py-4"
  bind:this={container}
>
  <div class="flex size-full max-w-lg items-center justify-between">
    <div bind:this={div1} class={circle}>
      <User class="h-5 w-5" />
    </div>
    <div bind:this={div2} class={circle}>
      <Lock class="h-5 w-5" />
    </div>
  </div>

  <AnimatedBeam
    {container}
    from={div1}
    to={div2}
    gradientStartColor="oklch(70.4% 0.191 22.216)"
    gradientStopColor="oklch(64.6% 0.222 41.116)"
    curvature={50}
    duration={4}
  />
  <AnimatedBeam
    {container}
    from={div2}
    to={div1}
    gradientStartColor="oklch(70.4% 0.191 22.216)"
    gradientStopColor="oklch(64.6% 0.222 41.116)"
    curvature={-50}
    reverse
    duration={4}
  />
</div>
