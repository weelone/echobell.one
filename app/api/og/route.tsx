import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { Language } from "@/lib/i18n";

const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

// Simple inline SVG logo to avoid component import issues in edge runtime
const LogoSvg = () => (
  <svg
    viewBox="0 0 230 203"
    fill="none"
    style={{ width: 56, height: 52, color: "#f97316" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M229.48 5.18968C223.488 63.2832 174.393 108.591 114.716 108.591C55.1928 108.591 6.19691 63.5159 0 5.63764C37.2122 1.96514 76.4782 0 117.059 0C155.958 0 193.648 1.80557 229.48 5.18968Z"
      fill="currentColor"
      fillOpacity="0.9"
    />
    <rect
      x="105.472"
      y="146.057"
      width="18.9653"
      height="56.8958"
      rx="9.48264"
      fill="currentColor"
      fillOpacity="0.9"
    />
    <rect
      x="178.837"
      y="132.768"
      width="18.9653"
      height="56.8958"
      rx="9.48264"
      transform="rotate(-33.2639 178.837 132.768)"
      fill="currentColor"
      fillOpacity="0.9"
    />
    <rect
      width="18.9653"
      height="56.8958"
      rx="9.48264"
      transform="matrix(-0.836153 -0.548497 -0.548497 0.836153 50.1242 132.768)"
      fill="currentColor"
      fillOpacity="0.9"
    />
  </svg>
);

function getBadgeText(type: string, lang: Language): string {
  const badges: Record<string, Record<Language, string>> = {
    blog: {
      en: "Blog",
      zh: "博客",
      es: "Blog",
      fr: "Blog",
      ja: "ブログ",
      de: "Blog",
    },
    docs: {
      en: "Documentation",
      zh: "文档",
      es: "Documentación",
      fr: "Documentation",
      ja: "ドキュメント",
      de: "Dokumentation",
    },
    default: {
      en: "",
      zh: "",
      es: "",
      fr: "",
      ja: "",
      de: "",
    },
  };
  return badges[type]?.[lang] || badges[type]?.en || "";
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "Echobell";
  const description = searchParams.get("description") || "";
  const lang = (searchParams.get("lang") || "en") as Language;
  const type = searchParams.get("type") || "default";
  const accentColor = "#f97316"; // Echobell orange

  const badgeText = getBadgeText(type, lang);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Decorative accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: accentColor,
          }}
        />

        {/* Header with logo and badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <LogoSvg />
            <span
              style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "#1e293b",
                letterSpacing: "-0.025em",
              }}
            >
              Echobell
            </span>
          </div>
          {badgeText && (
            <div
              style={{
                display: "flex",
                backgroundColor: `${accentColor}15`,
                color: accentColor,
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {badgeText}
            </div>
          )}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 50 ? "48px" : "64px",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: "28px",
                color: "#475569",
                lineHeight: 1.4,
                marginTop: "24px",
                maxWidth: "800px",
              }}
            >
              {description.length > 150
                ? description.substring(0, 147) + "..."
                : description}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#64748b",
            }}
          >
            echobell.one
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#94a3b8",
            }}
          >
            Instant Webhook & Email Alerts
          </span>
        </div>

        {/* Decorative corner gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle at bottom right, ${accentColor}10, transparent 70%)`,
          }}
        />
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
    }
  );
}
