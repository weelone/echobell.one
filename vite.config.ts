import { execSync } from "node:child_process";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";

/**
 * Exposes a `virtual:git-dates` module mapping repo-relative content file
 * paths to their last git commit date (ISO 8601). Replaces the fumadocs
 * `last-modified` plugin; computed once at build/dev server start.
 */
function gitDates(): Plugin {
  const virtualId = "virtual:git-dates";
  const resolvedId = "\0" + virtualId;

  return {
    name: "git-dates",
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id !== resolvedId) return;

      const dates: Record<string, string> = {};
      try {
        const log = execSync("git log --format=%x01%cI --name-only -- content", {
          encoding: "utf8",
          maxBuffer: 64 * 1024 * 1024,
        });
        let current: string | undefined;
        for (const line of log.split("\n")) {
          if (line.startsWith("\x01")) {
            current = line.slice(1).trim();
          } else if (line.trim() && current && !(line in dates)) {
            dates[line.trim()] ??= current;
          }
        }
      } catch {
        // Not a git checkout (e.g. tarball build): fall back to no dates.
      }
      return `export default ${JSON.stringify(dates)};`;
    },
  };
}

export default defineConfig({
  plugins: [gitDates(), tailwindcss(), sveltekit()],
});
