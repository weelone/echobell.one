<script lang="ts">
  import { siGoogleplay } from "simple-icons";
  import { getGooglePlayLink } from "$lib/constants";
  import { cn } from "$lib/utils";

  let {
    appStoreImage,
    appStoreLink,
    appStoreAlt = "App Store",
    class: className = "",
  }: {
    appStoreImage: string;
    appStoreLink: string;
    appStoreAlt?: string;
    class?: string;
  } = $props();
</script>

<div class={cn("flex flex-wrap items-center justify-center gap-3", className)}>
  <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
    <img src={appStoreImage} alt={appStoreAlt} class="h-12 w-auto" />
  </a>
  <a
    href={getGooglePlayLink()}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex h-12 items-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800 dark:border-neutral-200 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
  >
    <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={siGoogleplay.path} />
    </svg>
    Google Play
  </a>
</div>
