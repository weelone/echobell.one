import {
  PaletteIcon,
  StickyNoteIcon,
  FilterIcon,
  LinkIcon,
  CodeIcon,
  ExternalLinkIcon,
  ZapIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Language, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  FeatureHero,
  FeatureSteps,
  FeatureCTA,
  FeatureGrid,
  RelatedFeatures,
} from "@/components/features";
import { channelsI18n, relatedFeatures } from "@/lib/features-i18n";
import { FeatureJsonLd, HowToJsonLd } from "@/components/JsonLd";

const organizationIconMap: Record<string, typeof PaletteIcon> = {
  palette: PaletteIcon,
  "sticky-note": StickyNoteIcon,
  filter: FilterIcon,
  link: LinkIcon,
};

const advancedIconMap: Record<string, typeof CodeIcon> = {
  code: CodeIcon,
  "external-link": ExternalLinkIcon,
  zap: ZapIcon,
};

const channelPreviewCopy: Record<
  Language,
  {
    title: string;
    description: string;
    webhookLabel: string;
    emailLabel: string;
    notificationTypeLabel: string;
    phoneCall: string;
  }
> = {
  en: {
    title: "Production Alerts",
    description: "Critical server notifications",
    webhookLabel: "Webhook URL:",
    emailLabel: "Email:",
    notificationTypeLabel: "Notification type:",
    phoneCall: "Phone Call",
  },
  zh: {
    title: "生产告警",
    description: "关键服务器通知",
    webhookLabel: "Webhook URL：",
    emailLabel: "邮件：",
    notificationTypeLabel: "通知类型：",
    phoneCall: "电话通知",
  },
  es: {
    title: "Alertas de producción",
    description: "Notificaciones críticas del servidor",
    webhookLabel: "URL del webhook:",
    emailLabel: "Correo:",
    notificationTypeLabel: "Tipo de notificación:",
    phoneCall: "Llamada",
  },
  fr: {
    title: "Alertes de production",
    description: "Notifications critiques du serveur",
    webhookLabel: "URL du webhook :",
    emailLabel: "E-mail :",
    notificationTypeLabel: "Type de notification :",
    phoneCall: "Appel",
  },
  ja: {
    title: "本番アラート",
    description: "重要なサーバー通知",
    webhookLabel: "Webhook URL:",
    emailLabel: "メール:",
    notificationTypeLabel: "通知タイプ:",
    phoneCall: "電話通知",
  },
  de: {
    title: "Produktionsalarme",
    description: "Kritische Server-Benachrichtigungen",
    webhookLabel: "Webhook-URL:",
    emailLabel: "E-Mail:",
    notificationTypeLabel: "Benachrichtigungstyp:",
    phoneCall: "Anruf",
  },
};

export default async function ChannelsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = channelsI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/channels", lang),
    baseUrl
  ).toString();
  const preview = channelPreviewCopy[lang];

  const organizationFeatures = t.organization.features.map((item) => ({
    title: item.title,
    description: item.description,
    icon: organizationIconMap[item.icon] || PaletteIcon,
  }));

  const advancedFeatures = t.advanced.items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: advancedIconMap[item.icon] || CodeIcon,
  }));

  return (
    <div className="min-h-screen">
      <FeatureJsonLd
        name={t.meta.title}
        description={t.meta.description}
        url={canonical}
      />
      <HowToJsonLd
        name={t.sharing.title}
        description={t.sharing.subtitle}
        steps={t.sharing.steps.map((step) => ({
          name: step.title,
          text: step.description,
        }))}
        totalTime="PT5M"
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <Breadcrumb lang={lang} />
      </div>

      {/* Hero */}
      <FeatureHero
        lang={lang}
        badge={t.hero.badge}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={t.cta.primary}
        secondaryCta={t.cta.secondary}
        accentColor="blue"
      />

      {/* Organization Features */}
      <FeatureGrid
        title={t.organization.title}
        subtitle={t.organization.subtitle}
        features={organizationFeatures}
        columns={2}
        accentColor="blue"
      />

      {/* Channel Preview */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xl">🔔</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{preview.title}</h3>
                  <p className="text-sm text-neutral-500">{preview.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neutral-500">{preview.webhookLabel}</span>
                  <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs font-mono">
                    https://hook.echobell.one/t/abc...
                  </code>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neutral-500">{preview.emailLabel}</span>
                  <code className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs font-mono">
                    production-abc@trigger.echobell.one
                  </code>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neutral-500">
                    {preview.notificationTypeLabel}
                  </span>
                  <span className="rounded-full bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-medium text-red-700 dark:text-red-400">
                    {preview.phoneCall}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Sharing Steps */}
      <FeatureSteps
        title={t.sharing.title}
        subtitle={t.sharing.subtitle}
        steps={t.sharing.steps}
        accentColor="blue"
      />

      {/* Advanced Features */}
      <section className="bg-neutral-50 dark:bg-neutral-900/50">
        <FeatureGrid
          title={t.advanced.title}
          subtitle={t.advanced.subtitle}
          features={advancedFeatures}
          columns={3}
          accentColor="blue"
        />
      </section>

      {/* CTA */}
      <FeatureCTA
        lang={lang}
        title={t.cta.title}
        description={t.cta.description}
        primaryCta={t.cta.primary}
        secondaryCta={t.cta.secondary}
        accentColor="blue"
      />

      {/* Related Features */}
      <RelatedFeatures
        lang={lang}
        current="channels"
        related={relatedFeatures.channels}
      />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = channelsI18n[lang];
  const canonical = new URL(
    localizeUrl("/features/channels", lang),
    baseUrl
  ).toString();

  const ogImageParams = new URLSearchParams({
    title: t.meta.title,
    description: t.meta.description,
    type: "default",
    lang: lang,
  });
  const ogImageUrl = new URL(
    `/api/og?${ogImageParams.toString()}`,
    baseUrl
  ).toString();

  return createMetadata({
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical,
      languages: {
        "x-default": localizeUrl("/features/channels", "en"),
        ...Object.fromEntries(
          languages.map((l) => [l, localizeUrl("/features/channels", l)])
        ),
      },
    },
    openGraph: {
      url: canonical,
      images: [
        { url: ogImageUrl, width: 1200, height: 630, alt: t.meta.title },
      ],
    },
    twitter: {
      images: [{ url: ogImageUrl, alt: t.meta.title }],
    },
  });
}
