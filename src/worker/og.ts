/**
 * /api/og — dynamic Open Graph image endpoint (port of the previous
 * next/og route). Rendered with satori + resvg via workers-og, which
 * bundles the wasm modules for the Workers runtime.
 */
import { ImageResponse, loadGoogleFont } from "workers-og";

type Language = "en" | "zh" | "es" | "fr" | "ja" | "de";

const OG_IMAGE_SIZE = { width: 1200, height: 630 };
const ACCENT_COLOR = "#f97316"; // Echobell orange

const footerTaglines: Record<Language, string> = {
  en: "Instant Webhook & Email Alerts",
  zh: "Webhook 与邮件即时警报",
  es: "Alertas instantáneas por Webhook y Email",
  fr: "Alertes instantanées Webhook & Email",
  ja: "Webhookとメールの即時アラート",
  de: "Sofortige Webhook- & E-Mail-Benachrichtigungen",
};

const badges: Record<string, Record<Language, string>> = {
  blog: { en: "Blog", zh: "博客", es: "Blog", fr: "Blog", ja: "ブログ", de: "Blog" },
  docs: {
    en: "Documentation",
    zh: "文档",
    es: "Documentación",
    fr: "Documentation",
    ja: "ドキュメント",
    de: "Dokumentation",
  },
  default: { en: "", zh: "", es: "", fr: "", ja: "", de: "" },
};

function getBadgeText(type: string, lang: Language): string {
  return badges[type]?.[lang] || badges[type]?.en || "";
}

/** satori renders text nodes verbatim (no entity decoding), so only strip
 * markup-significant characters instead of full HTML escaping. */
function escapeHtml(value: string): string {
  return value.replace(/</g, "\u2039").replace(/>/g, "\u203a");
}

// satori (via workers-og) cannot lay out inline <svg> children, so the logo
// is embedded as a data-URI <img> instead.
const LOGO_SVG_SOURCE = `<svg viewBox="0 0 230 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M229.48 5.18968C223.488 63.2832 174.393 108.591 114.716 108.591C55.1928 108.591 6.19691 63.5159 0 5.63764C37.2122 1.96514 76.4782 0 117.059 0C155.958 0 193.648 1.80557 229.48 5.18968Z" fill="${ACCENT_COLOR}" fill-opacity="0.9"/><rect x="105.472" y="146.057" width="18.9653" height="56.8958" rx="9.48264" fill="${ACCENT_COLOR}" fill-opacity="0.9"/><rect x="178.837" y="132.768" width="18.9653" height="56.8958" rx="9.48264" transform="rotate(-33.2639 178.837 132.768)" fill="${ACCENT_COLOR}" fill-opacity="0.9"/><rect width="18.9653" height="56.8958" rx="9.48264" transform="matrix(-0.836153 -0.548497 -0.548497 0.836153 50.1242 132.768)" fill="${ACCENT_COLOR}" fill-opacity="0.9"/></svg>`;

const LOGO_SVG = `<img width="56" height="52" src="data:image/svg+xml;base64,${btoa(LOGO_SVG_SOURCE)}" style="width: 56px; height: 52px;" />`;

export async function handleOgRequest(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "Echobell";
  const description = searchParams.get("description") || "";
  const lang = (searchParams.get("lang") || "en") as Language;
  const type = searchParams.get("type") || "default";

  const badgeText = getBadgeText(type, lang);
  const truncatedDescription =
    description.length > 150 ? description.substring(0, 147) + "..." : description;

  // Note: satori requires empty divs to carry `display: flex` too, otherwise
  // workers-og's HTML parser mis-nests the following siblings.
  const html = `<div style="background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); width: ${OG_IMAGE_SIZE.width}px; height: ${OG_IMAGE_SIZE.height}px; display: flex; flex-direction: column; padding: 60px; position: relative;">
    <div style="display: flex; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: ${ACCENT_COLOR};"></div>
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px;"><div style="display: flex; align-items: center; gap: 16px;">${LOGO_SVG}<span style="font-size: 32px; font-weight: 600; color: #1e293b; letter-spacing: -0.025em;">Echobell</span></div>${
      badgeText
        ? `<div style="display: flex; background-color: ${ACCENT_COLOR}15; color: ${ACCENT_COLOR}; padding: 8px 16px; border-radius: 9999px; font-size: 18px; font-weight: 500;">${escapeHtml(badgeText)}</div>`
        : ""
    }</div>
    <div style="display: flex; flex-direction: column; flex: 1; justify-content: center;"><h1 style="font-size: ${title.length > 50 ? "48px" : "64px"}; font-weight: 700; color: #0f172a; line-height: 1.1; letter-spacing: -0.025em; margin: 0; max-width: 900px;">${escapeHtml(title)}</h1>${
      truncatedDescription
        ? `<p style="font-size: 28px; color: #475569; line-height: 1.4; margin-top: 24px; max-width: 800px;">${escapeHtml(truncatedDescription)}</p>`
        : ""
    }</div>
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 24px;"><span style="font-size: 20px; color: #64748b;">echobell.one</span><span style="font-size: 18px; color: #94a3b8;">${escapeHtml(footerTaglines[lang] || footerTaglines.en)}</span></div>
    <div style="display: flex; position: absolute; bottom: 0; right: 0; width: 300px; height: 300px; background: radial-gradient(circle at bottom right, ${ACCENT_COLOR}10, transparent 70%);"></div>
  </div>`.replace(/\n\s*/g, "");

  const fonts = await loadFonts(
    [title, truncatedDescription, badgeText, footerTaglines[lang] || footerTaglines.en, "Echobell echobell.one"].join(""),
    lang
  );

  return new ImageResponse(html, {
    width: OG_IMAGE_SIZE.width,
    height: OG_IMAGE_SIZE.height,
    fonts,
    headers: {
      "cache-control": "public, max-age=86400, s-maxage=86400, immutable",
    },
  });
}

const cjkFontFamilies: Partial<Record<Language, string>> = {
  zh: "Noto Sans SC",
  ja: "Noto Sans JP",
};

interface FontOption {
  name: string;
  data: ArrayBuffer;
  weight: number;
  style: "normal";
}

async function loadFonts(text: string, lang: Language): Promise<FontOption[]> {
  const family = cjkFontFamilies[lang] ?? "Inter";
  // workers-og interpolates `text` into the query string verbatim, so it must
  // be URL-encoded here or spaces/ampersands truncate the subset request.
  const uniqueText = encodeURIComponent([...new Set(text)].join(""));

  const [regular, bold] = await Promise.all([
    loadGoogleFont({ family, weight: 400, text: uniqueText }),
    loadGoogleFont({ family, weight: 700, text: uniqueText }),
  ]);

  return [
    { name: "sans serif", data: regular, weight: 400, style: "normal" },
    { name: "sans serif", data: bold, weight: 700, style: "normal" },
  ];
}
