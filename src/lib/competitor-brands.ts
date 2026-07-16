import {
  siBetterstack,
  siDiscord,
  siIfttt,
  siNtfy,
  siOpsgenie,
  siPagerduty,
  siTelegram,
} from "simple-icons";

export interface BrandIcon {
  path: string;
  title: string;
}

/** Official brand marks for competitors, keyed by slug / lowercase name.
 * Slack, Pushover, and Healthchecks are not in simple-icons (trademark
 * policy) — consumers fall back to a letter avatar. */
const brandIcons: Record<string, BrandIcon> = {
  pagerduty: siPagerduty,
  opsgenie: siOpsgenie,
  "better-stack": siBetterstack,
  ifttt: siIfttt,
  telegram: siTelegram,
  discord: siDiscord,
  ntfy: siNtfy,
};

export function getBrandIcon(name: string): BrandIcon | undefined {
  return brandIcons[name.toLowerCase().replace(/\s+/g, "-")];
}
