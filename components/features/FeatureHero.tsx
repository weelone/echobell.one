import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Language, localizeUrl } from "@/lib/i18n";
import { APP_STORE_LINK } from "@/constants";

interface FeatureHeroProps {
  lang: Language;
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  accentColor?: string;
}

export function FeatureHero({
  lang,
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  accentColor = "orange",
}: FeatureHeroProps) {
  const colorClasses: Record<string, { badge: string; button: string }> = {
    orange: {
      badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
      button: "bg-orange-600 hover:bg-orange-500",
    },
    blue: {
      badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      button: "bg-blue-600 hover:bg-blue-500",
    },
    red: {
      badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      button: "bg-red-600 hover:bg-red-500",
    },
    purple: {
      badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      button: "bg-purple-600 hover:bg-purple-500",
    },
    green: {
      badge: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      button: "bg-green-600 hover:bg-green-500",
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.orange;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${colors.badge}`}
          >
            {badge}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={APP_STORE_LINK}
              target="_blank"
              className={`rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors ${colors.button}`}
            >
              {primaryCta}
            </Link>
            <Link
              href={localizeUrl("/docs", lang)}
              className="group flex items-center text-sm font-semibold text-neutral-900 dark:text-neutral-100"
            >
              {secondaryCta}
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
