import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";
import type { RequestHandler } from "./$types";

export const prerender = true;

export const GET: RequestHandler = () => {
  const manifest = {
    name: "Echobell - Webhook & Email Alerts",
    short_name: "Echobell",
    description:
      "Turn webhooks and emails into instant mobile alerts, time-sensitive notifications, and phone calls for critical events.",
    id: "/",
    start_url: "/en",
    scope: "/",
    lang: "en",
    display: "standalone",
    background_color: "#f5f5f5",
    theme_color: "#f97316",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/images/screenshots.webp",
        sizes: "4104x2868",
        type: "image/webp",
        form_factor: "wide",
        label: "Echobell alert channels and notification workflow",
      },
    ],
    shortcuts: [
      {
        name: "Documentation",
        short_name: "Docs",
        description: "Open the Echobell setup guide and integration docs.",
        url: "/en/docs",
      },
      {
        name: "Webhook Alerts",
        short_name: "Webhooks",
        description: "Learn how to send webhook alerts to Echobell.",
        url: "/en/features/webhooks",
      },
      {
        name: "Email Triggers",
        short_name: "Email",
        description: "Learn how to turn email into Echobell notifications.",
        url: "/en/features/email-triggers",
      },
    ],
    related_applications: [
      {
        platform: "itunes",
        url: getAppStoreLink(["manifest", "ios"]),
        id: "6743597198",
      },
      {
        platform: "play",
        url: getGooglePlayLink(),
        id: "one.echobell.echobellandroid",
      },
    ],
    prefer_related_applications: false,
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json" },
  });
};
