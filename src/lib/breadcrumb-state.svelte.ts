import type { BreadcrumbItem } from "./breadcrumb";

/** Page-registered breadcrumb items, rendered by the site header (Nav).
 * `undefined` means "derive from the URL". Only written from $effect (client),
 * so SSR never mutates shared state across requests. */
class BreadcrumbState {
  items = $state<BreadcrumbItem[] | undefined>(undefined);
}

export const breadcrumbState = new BreadcrumbState();
