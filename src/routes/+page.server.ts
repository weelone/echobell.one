import { getBlogPostsByDate } from "$lib/server/content";
import { buildHomeMeta } from "$lib/server/meta-builders";
import type { PageServerLoad } from "./$types";

// The bare homepage serves the default-language content at `/` without a
// redirect (parity with the previous middleware rewrite), while keeping the
// canonical URL at /en.
export const load: PageServerLoad = () => {
  const latest = getBlogPostsByDate("en")[0];
  return {
    meta: buildHomeMeta("en"),
    latestPost: latest
      ? { url: latest.url, title: latest.data.title }
      : undefined,
  };
};
