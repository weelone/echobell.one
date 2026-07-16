<script lang="ts">
  import { onMount } from "svelte";
  import createGlobe from "cobe";
  import { Spring } from "svelte/motion";
  import { cn } from "$lib/utils";

  const MOVEMENT_DAMPING = 1400;

  let { class: className = "" }: { class?: string } = $props();

  let canvas: HTMLCanvasElement | undefined = $state();
  let phi = 0;
  let pointerInteracting: number | null = null;
  const r = new Spring(0, { stiffness: 0.04, damping: 0.4 });

  function updatePointerInteraction(value: number | null) {
    pointerInteracting = value;
    if (canvas) {
      canvas.style.cursor = value !== null ? "grabbing" : "grab";
    }
  }

  function updateMovement(clientX: number) {
    if (pointerInteracting !== null) {
      const delta = clientX - pointerInteracting;
      r.target = r.current + delta / MOVEMENT_DAMPING;
    }
  }

  onMount(() => {
    if (!canvas) return;
    let width = canvas.offsetWidth;
    const onResize = () => {
      if (canvas) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      width: width * 2,
      height: width * 2,
      onRender: (state: Record<string, number>) => {
        if (pointerInteracting === null) phi += 0.005;
        state.phi = phi + r.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    } as Parameters<typeof createGlobe>[1]);

    const opacityTimeoutId = window.setTimeout(() => {
      if (canvas) canvas.style.opacity = "1";
    }, 0);

    return () => {
      window.clearTimeout(opacityTimeoutId);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  });
</script>

<div class={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
  <canvas
    class="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
    bind:this={canvas}
    onpointerdown={(e) => updatePointerInteraction(e.clientX)}
    onpointerup={() => updatePointerInteraction(null)}
    onpointerout={() => updatePointerInteraction(null)}
    onmousemove={(e) => updateMovement(e.clientX)}
    ontouchmove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
  ></canvas>
</div>
