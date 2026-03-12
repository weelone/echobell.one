import Link from "next/link";
import {
  ArrowRightIcon,
  BellRingIcon,
  CandlestickChartIcon,
  LifeBuoyIcon,
  ServerCogIcon,
} from "lucide-react";
import { Language, localizeUrl, uiDictionary } from "@/lib/i18n";

const icons = [
  BellRingIcon,
  CandlestickChartIcon,
  LifeBuoyIcon,
  ServerCogIcon,
];

type UseCaseCard = {
  title: string;
  description: string;
  href: string;
};

type UseCasesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  exploreAll: string;
  items: UseCaseCard[];
};

export default function UseCasesSection({ lang }: { lang: Language }) {
  const t = (uiDictionary[lang] as { useCases: UseCasesCopy }).useCases;
  const popularLinks =
    lang === "zh"
      ? [
          { label: "Pushover 替代方案", href: "/pushover-alternative" },
          { label: "ntfy 替代方案", href: "/ntfy-alternative" },
          { label: "专注模式告警", href: "/focus-mode-alerts" },
          {
            label: "App Store Connect 通知",
            href: "/app-store-connect-review-notifications",
          },
        ]
      : lang === "es"
        ? [
            { label: "Alternativa a Pushover", href: "/pushover-alternative" },
            { label: "Alternativa a ntfy", href: "/ntfy-alternative" },
            { label: "Alertas con Focus Mode", href: "/focus-mode-alerts" },
            {
              label: "Notificaciones de App Store Connect",
              href: "/app-store-connect-review-notifications",
            },
          ]
        : lang === "fr"
          ? [
              { label: "Alternative à Pushover", href: "/pushover-alternative" },
              { label: "Alternative à ntfy", href: "/ntfy-alternative" },
              { label: "Alertes Focus Mode", href: "/focus-mode-alerts" },
              {
                label: "Notifications App Store Connect",
                href: "/app-store-connect-review-notifications",
              },
            ]
          : lang === "ja"
            ? [
                { label: "Pushover の代替", href: "/pushover-alternative" },
                { label: "ntfy の代替", href: "/ntfy-alternative" },
                { label: "集中モード通知", href: "/focus-mode-alerts" },
                {
                  label: "App Store Connect 通知",
                  href: "/app-store-connect-review-notifications",
                },
              ]
            : lang === "de"
              ? [
                  {
                    label: "Pushover-Alternative",
                    href: "/pushover-alternative",
                  },
                  { label: "ntfy-Alternative", href: "/ntfy-alternative" },
                  { label: "Fokusmodus-Alarme", href: "/focus-mode-alerts" },
                  {
                    label: "App Store Connect Benachrichtigungen",
                    href: "/app-store-connect-review-notifications",
                  },
                ]
      : lang === "en"
        ? [
            { label: "Pushover alternative", href: "/pushover-alternative" },
            { label: "ntfy alternative", href: "/ntfy-alternative" },
            { label: "Focus Mode alerts", href: "/focus-mode-alerts" },
            {
              label: "App Store Connect notifications",
              href: "/app-store-connect-review-notifications",
            },
          ]
        : [];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base/7 font-semibold text-orange-600 uppercase tracking-wider">
            {t.eyebrow}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl">
            {t.title}
          </p>
          <p className="mt-6 text-lg/8 opacity-60 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((card, index) => {
            const Icon = icons[index];
            return (
              <div key={card.href} className="relative flex">
                <div className="absolute inset-px rounded-3xl bg-neutral-50 dark:bg-neutral-900/50"></div>
                <Link
                  href={localizeUrl(card.href, lang)}
                  className="relative flex w-full flex-col overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10">
                    <Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight opacity-90">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm/6 opacity-60">
                    {card.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-orange-600 dark:text-orange-400">
                    <span className="group-hover:mr-2 transition-all">
                      {t.exploreAll}
                    </span>
                    <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                  </div>
                </Link>
                <div className="pointer-events-none absolute inset-px rounded-3xl ring-1 shadow-sm ring-black/5"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={localizeUrl("/use-cases", lang)}
            className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-500 hover:gap-3"
          >
            {t.exploreAll}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {popularLinks.length > 0 && (
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {lang === "zh"
                ? "热门页面"
                : lang === "es"
                  ? "Paginas populares"
                  : lang === "fr"
                    ? "Pages populaires"
                    : lang === "ja"
                      ? "人気ページ"
                      : lang === "de"
                        ? "Beliebte Seiten"
                        : "Popular Pages"}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {popularLinks.map((item) => (
                <Link
                  key={item.href}
                  href={localizeUrl(item.href, lang)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-orange-400 hover:text-orange-600 dark:border-neutral-700 dark:hover:border-orange-700 dark:hover:text-orange-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
