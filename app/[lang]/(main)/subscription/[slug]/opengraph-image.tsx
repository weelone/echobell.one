import { fetchChannelBySubscriptionToken } from "@/app/actions/channel";
import { Logo } from "@/components/Logo";
import { uiDictionary } from "@/lib/i18n";
import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface SubscriptionPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

// Image generation
export default async function Image({ params }: SubscriptionPageProps) {
  const { slug: subscriptionToken, lang } = await params;
  const t = uiDictionary[lang as keyof typeof uiDictionary].subscription;
  const channel = await fetchChannelBySubscriptionToken(subscriptionToken);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "62px",
        }}
      >
        {channel ? (
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "82px",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  opacity: 0.9,
                }}
              >
                <div
                  style={{
                    backgroundColor: channel.color,
                    width: "24px",
                    margin: "24px 0",
                    borderRadius: "24px",
                    alignSelf: "stretch",
                  }}
                />
                {channel.name}
                <span style={{ opacity: 0.6, flexGrow: "1" }}>
                  #{channel.id}
                </span>
                <Logo
                  style={{
                    width: "82px",
                    height: "76px",
                    color: "#f97316",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "48px",
                  marginTop: "24px",
                }}
              >
                {channel.titleTemplate}
              </div>
              <div style={{ fontWeight: 500, fontSize: "48px", opacity: 0.6 }}>
                {channel.bodyTemplate}
              </div>
              {channel.note && (
                <div
                  style={{
                    fontWeight: 500,
                    opacity: 0.6,
                    marginTop: "24px",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      borderRadius: "24px",
                      backgroundColor: "currentColor",
                      opacity: 0.2,
                    }}
                  />
                  <div
                    style={{
                      fontSize: "48px",
                    }}
                  >
                    {channel.note}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div
            style={{
              alignSelf: "center",
              fontSize: "96px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Logo
              style={{
                width: "150px",
                height: "130px",
                color: "#f97316",
                marginBottom: "48px",
              }}
            />
            {t.channelNotFound}
          </div>
        )}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
