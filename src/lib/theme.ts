import { writable } from "svelte/store";
import { browser } from "$app/environment";

export type Theme = "light" | "dark";

function initialTheme(): Theme {
  if (!browser) return "light";
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

export const theme = writable<Theme>(initialTheme());

export function toggleTheme(): void {
  theme.update((current) => {
    const next: Theme = current === "dark" ? "light" : "dark";
    if (browser) {
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("echobell-theme", next);
      } catch {
        // Ignore storage failures (private browsing etc.)
      }
    }
    return next;
  });
}
