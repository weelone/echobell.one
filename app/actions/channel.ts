"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";

export async function fetchChannelBySubscriptionToken(token: string) {
  const context = getRequestContext();

  const channel = await context.env.DB.prepare(
    "SELECT * FROM channels WHERE subscription_token = ?"
  )
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
        note: channel.note as string | undefined,
      }
    : undefined;
}
