import { createPageMeta, buildOgImageUrl, toAbsoluteUrl } from "$lib/metadata";
import { localizeUrl, type Language } from "$lib/i18n";
import type { PageServerLoad } from "./$types";

// Token-based subscription pages are user-specific and rendered on demand
// from the D1 database — never prerendered.
export const prerender = false;

interface Channel {
  id: number;
  color: string;
  name: string;
  titleTemplate: string;
  bodyTemplate: string;
  subscriptionToken: string;
  createdAt: number;
  updatedAt: number;
  note?: string;
}

async function fetchChannelBySubscriptionToken(
  db: App.Platform["env"]["DB"],
  token: string
): Promise<Channel | undefined> {
  const channel = await db
    .prepare("SELECT * FROM channels WHERE subscription_token = ?")
    .bind(token)
    .first();

  return channel
    ? {
        id: channel.id as number,
        color: channel.color as string,
        name: channel.name as string,
        titleTemplate: channel.title_template as string,
        bodyTemplate: channel.body_template as string,
        subscriptionToken: channel.subscription_token as string,
        createdAt: channel.created_at as number,
        updatedAt: channel.updated_at as number,
        note: (channel.note as string | null) ?? undefined,
      }
    : undefined;
}

export const load: PageServerLoad = async ({ params, platform }) => {
  const lang = params.lang as Language;
  const token = params.slug;

  let channel: Channel | undefined;
  try {
    channel = platform?.env?.DB
      ? await fetchChannelBySubscriptionToken(platform.env.DB, token)
      : undefined;
  } catch (error) {
    // Local dev D1 may not have the channels table; treat as not found.
    console.error("Failed to fetch channel:", error);
  }

  const canonical = localizeUrl(`/subscription/${token}`, lang);
  const ogImageUrl = buildOgImageUrl({
    title: "Subscribe to Channel",
    description:
      "Private subscription page to join an Echobell channel on your device.",
    type: "default",
    lang,
  });

  const meta = createPageMeta({
    title: "Subscribe to Channel | Echobell",
    description:
      "Private subscription page to join an Echobell channel on your device.",
    canonical,
    robots: "noindex, nofollow, nocache",
    ogUrl: toAbsoluteUrl(canonical),
    ogImages: [{ url: ogImageUrl }],
    twitterImages: [{ url: ogImageUrl }],
  });

  return { lang, meta, token, channel };
};
