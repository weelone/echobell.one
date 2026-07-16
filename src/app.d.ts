import type { D1Database, Fetcher } from "@cloudflare/workers-types";

declare global {
  namespace App {
    interface Platform {
      env: {
        DB: D1Database;
        ASSETS: Fetcher;
      };
      cf?: unknown;
      ctx?: { waitUntil(promise: Promise<unknown>): void };
    }
  }
}

export {};
