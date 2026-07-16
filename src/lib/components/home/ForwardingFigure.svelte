<script lang="ts">
  import { Globe, Mail, PhoneCall, Smartphone } from "@lucide/svelte";
  import AnimatedBeam from "$lib/components/magicui/AnimatedBeam.svelte";
  import Logo from "$lib/components/Logo.svelte";

  let container: HTMLElement | undefined = $state();
  let div1: HTMLElement | undefined = $state();
  let div2: HTMLElement | undefined = $state();
  let div3: HTMLElement | undefined = $state();
  let div4: HTMLElement | undefined = $state();
  let div5: HTMLElement | undefined = $state();

  const circle =
    "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 dark:bg-black";
</script>

<div
  class="relative flex h-full w-full items-center justify-center overflow-hidden py-4"
  bind:this={container}
>
  <div class="flex size-full max-w-lg items-stretch justify-between">
    <div class="flex flex-col items-center justify-between gap-4">
      <div bind:this={div1} class={circle}>
        <Globe class="h-5 w-5" />
      </div>
      <div bind:this={div2} class={circle}>
        <Mail class="h-5 w-5" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div bind:this={div3} class="{circle} size-16">
        <Logo class="mt-2 h-7 w-7 text-orange-500" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-between gap-4">
      <div bind:this={div4} class={circle}>
        <PhoneCall class="h-5 w-5" />
      </div>
      <div bind:this={div5} class={circle}>
        <Smartphone class="h-5 w-5" />
      </div>
    </div>
  </div>

  <AnimatedBeam
    {container}
    from={div1}
    to={div3}
    gradientStartColor="oklch(70.4% 0.191 22.216)"
    gradientStopColor="oklch(64.6% 0.222 41.116)"
    duration={6}
  />
  <AnimatedBeam
    {container}
    from={div2}
    to={div3}
    gradientStartColor="oklch(70.4% 0.191 22.216)"
    gradientStopColor="oklch(64.6% 0.222 41.116)"
    duration={6}
    delay={3}
  />
  <AnimatedBeam
    {container}
    from={div3}
    to={div4}
    curvature={40}
    gradientStartColor="oklch(70.4% 0.191 22.216)"
    gradientStopColor="oklch(64.6% 0.222 41.116)"
    duration={3}
  />
  <AnimatedBeam
    {container}
    from={div3}
    to={div5}
    curvature={-40}
    gradientStartColor="oklch(70.4% 0.191 22.216)"
    gradientStopColor="oklch(64.6% 0.222 41.116)"
    duration={3}
  />
</div>
