<script lang="ts">
  import HomePage from "$lib/components/home/HomePage.svelte";
  import type { Language } from "$lib/i18n";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<HomePage lang={data.lang as Language} latestPost={data.latestPost} />
