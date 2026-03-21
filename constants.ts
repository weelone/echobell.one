const APP_STORE_BASE_URL =
  "https://apps.apple.com/app/apple-store/id6743597198";
const APP_STORE_PROVIDER_TOKEN = "128151925";
const APP_STORE_MEDIA_TYPE = "8";
const APP_STORE_CAMPAIGN_TOKEN_MAX_LENGTH = 40;

function hashCampaignToken(value: string): string {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash.toString(36).slice(0, 6);
}

function normalizeCampaignToken(value: string): string {
  const normalized = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");

  if (!normalized) return "site-default";
  if (normalized.length <= APP_STORE_CAMPAIGN_TOKEN_MAX_LENGTH) {
    return normalized;
  }

  const suffix = hashCampaignToken(normalized).padEnd(6, "0").slice(0, 6);
  const prefixLength =
    APP_STORE_CAMPAIGN_TOKEN_MAX_LENGTH - suffix.length - 1;

  return `${normalized.slice(0, prefixLength)}-${suffix}`;
}

export function getAppStoreLink(source: string | string[]): string {
  const campaignSource = Array.isArray(source)
    ? source.filter(Boolean).join("-")
    : source;
  const campaignToken = normalizeCampaignToken(campaignSource);
  const url = new URL(APP_STORE_BASE_URL);

  url.searchParams.set("pt", APP_STORE_PROVIDER_TOKEN);
  url.searchParams.set("ct", campaignToken);
  url.searchParams.set("mt", APP_STORE_MEDIA_TYPE);

  return url.toString();
}

export const APP_STORE_LINK = getAppStoreLink("site-default");
