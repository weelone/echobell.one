"use server";

export async function fetchChannelBySubscriptionToken(token: string) {
  // @ts-expect-error - Cloudflare env is available in the global scope
  const env = globalThis.process.env.cloudflare.env;

  const channel = await env.DB.prepare(
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
