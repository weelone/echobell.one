import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // The adapter gets its own wrangler config so its generated worker lands
    // in .svelte-kit/cloudflare/_worker.js instead of overwriting the custom
    // deploy entry (src/worker/index.ts, see wrangler.jsonc).
    adapter: adapter({
      config: "wrangler.adapter.jsonc",
    }),
    // Language-prefixed URLs never use trailing slashes (parity with the
    // previous Next.js middleware which redirected `/foo/` -> `/en/foo`).
    prerender: {
      handleHttpError: "fail",
      handleMissingId: "warn",
    },
  },
};

export default config;
