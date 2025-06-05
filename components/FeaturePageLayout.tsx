import { Language, uiDictionary } from "@/lib/i18n";
import Link from "next/link";
import CTASection from "./CTASection";

interface FeaturePageLayoutProps {
  lang: Language;
  featureKey: keyof (typeof uiDictionary)["en"]["featurePages"];
  children?: React.ReactNode;
}

export default function FeaturePageLayout({
  lang,
  featureKey,
  children,
}: FeaturePageLayoutProps) {
  const t = uiDictionary[lang].featurePages[featureKey];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 mx-auto text-lg max-w-2xl text-center leading-8 opacity-60">
              {t.hero.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://apps.apple.com/app/id6743597198"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                {t.cta.action}
              </Link>
              <Link
                href={`/${lang === "en" ? "" : lang + "/"}docs`}
                className="text-sm font-semibold leading-6"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>

      {/* CTA Section */}
      <CTASection lang={lang} />
    </div>
  );
}
