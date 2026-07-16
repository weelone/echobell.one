<script lang="ts">
  import { cn } from "$lib/utils";

  let {
    class: className = "",
    container,
    from,
    to,
    curvature = 0,
    reverse = false,
    duration = 6,
    delay = 0,
    pathColor = "gray",
    pathWidth = 2,
    pathOpacity = 0.2,
    gradientStartColor = "#ffaa40",
    gradientStopColor = "#9c40ff",
  }: {
    class?: string;
    container: HTMLElement | undefined;
    from: HTMLElement | undefined;
    to: HTMLElement | undefined;
    curvature?: number;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    pathColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    gradientStartColor?: string;
    gradientStopColor?: string;
  } = $props();

  const id = `beam-${Math.random().toString(36).slice(2, 9)}`;
  let pathD = $state("");
  let width = $state(0);
  let height = $state(0);

  function updatePath() {
    if (!container || !from || !to) return;
    const containerRect = container.getBoundingClientRect();
    const rectA = from.getBoundingClientRect();
    const rectB = to.getBoundingClientRect();

    width = containerRect.width;
    height = containerRect.height;

    const startX = rectA.left - containerRect.left + rectA.width / 2;
    const startY = rectA.top - containerRect.top + rectA.height / 2;
    const endX = rectB.left - containerRect.left + rectB.width / 2;
    const endY = rectB.top - containerRect.top + rectB.height / 2;

    const controlY = startY - curvature;
    pathD = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
  }

  // `container`/`from`/`to` are bind:this refs assigned after this component
  // mounts, so track them in an effect instead of reading them once in onMount.
  $effect(() => {
    if (!container || !from || !to) return;
    const resizeObserver = new ResizeObserver(() => updatePath());
    resizeObserver.observe(container);
    updatePath();
    return () => resizeObserver.disconnect();
  });

  const x1Values = $derived(reverse ? "90%;-10%" : "10%;110%");
  const x2Values = $derived(reverse ? "100%;0%" : "0%;100%");
</script>

<svg
  fill="none"
  {width}
  {height}
  xmlns="http://www.w3.org/2000/svg"
  class={cn(
    "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
    className
  )}
  viewBox={`0 0 ${width} ${height}`}
>
  <path
    d={pathD}
    stroke={pathColor}
    stroke-width={pathWidth}
    stroke-opacity={pathOpacity}
    stroke-linecap="round"
  />
  <path
    d={pathD}
    stroke-width={pathWidth}
    stroke={`url(#${id})`}
    stroke-opacity="1"
    stroke-linecap="round"
  />
  <defs>
    <linearGradient {id} gradientUnits="userSpaceOnUse" x1="0%" x2="0%" y1="0%" y2="0%">
      <animate
        attributeName="x1"
        values={x1Values}
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.16 1 0.3 1"
      />
      <animate
        attributeName="x2"
        values={x2Values}
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        calcMode="spline"
        keyTimes="0;1"
        keySplines="0.16 1 0.3 1"
      />
      <stop stop-color={gradientStartColor} stop-opacity="0"></stop>
      <stop stop-color={gradientStartColor}></stop>
      <stop offset="32.5%" stop-color={gradientStopColor}></stop>
      <stop offset="100%" stop-color={gradientStopColor} stop-opacity="0"></stop>
    </linearGradient>
  </defs>
</svg>
