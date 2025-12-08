import Link from "next/link";
import Image from "next/image";
import { Language, localizeUrl, uiDictionary } from "@/lib/i18n";
import { APP_STORE_LINK } from "@/constants";

interface FeatureCTAProps {
  lang: Language;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  accentColor?: string;
}

export function FeatureCTA({
  lang,
  title,
  description,
  primaryCta,
  secondaryCta,
  accentColor = "orange",
}: FeatureCTAProps) {
  const t = uiDictionary[lang];
  const appStoreImage = t.cta.appStoreImage;

  const colorClasses: Record<string, { bg: string; button: string }> = {
    orange: {
      bg: "from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30",
      button:
        "border-orange-200 hover:border-orange-300 dark:border-orange-800 dark:hover:border-orange-700",
    },
    blue: {
      bg: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
      button:
        "border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700",
    },
    red: {
      bg: "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30",
      button:
        "border-red-200 hover:border-red-300 dark:border-red-800 dark:hover:border-red-700",
    },
    purple: {
      bg: "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
      button:
        "border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700",
    },
    green: {
      bg: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      button:
        "border-green-200 hover:border-green-300 dark:border-green-800 dark:hover:border-green-700",
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.orange;

  return (
    <section className={`py-24 sm:py-32 bg-gradient-to-br ${colors.bg}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={APP_STORE_LINK} target="_blank">
              <Image
                src={appStoreImage}
                alt={primaryCta}
                className="h-12 w-auto"
              />
            </Link>
            <Link
              href={localizeUrl("/docs", lang)}
              className={`rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-colors ${colors.button}`}
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
