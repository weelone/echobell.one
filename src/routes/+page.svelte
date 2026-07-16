<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import HomePage from "$lib/components/home/HomePage.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div>
  <Nav lang="en" />
  <HomePage lang="en" latestPost={data.latestPost} />
  <Footer lang="en" />
</div>
