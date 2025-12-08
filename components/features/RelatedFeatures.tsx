import Link from "next/link";
import {
  WebhookIcon,
  MailIcon,
  PhoneIcon,
  FoldersIcon,
  FileTextIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Language, localizeUrl } from "@/lib/i18n";
import {
  webhooksI18n,
  emailTriggersI18n,
  callNotificationsI18n,
  channelsI18n,
  templatesI18n,
  FeatureKey,
} from "@/lib/features-i18n";

const featureConfig: Record<
  FeatureKey,
  {
    href: string;
    icon: typeof WebhookIcon;
    getTitle: (lang: Language) => string;
  }
> = {
  webhooks: {
    href: "/features/webhooks",
    icon: WebhookIcon,
    getTitle: (lang) => webhooksI18n[lang].meta.title,
  },
  emailTriggers: {
    href: "/features/email-triggers",
    icon: MailIcon,
    getTitle: (lang) => emailTriggersI18n[lang].meta.title,
  },
  callNotifications: {
    href: "/features/call-notifications",
    icon: PhoneIcon,
    getTitle: (lang) => callNotificationsI18n[lang].meta.title,
  },
  channels: {
    href: "/features/channels",
    icon: FoldersIcon,
    getTitle: (lang) => channelsI18n[lang].meta.title,
  },
  templates: {
    href: "/features/templates",
    icon: FileTextIcon,
    getTitle: (lang) => templatesI18n[lang].meta.title,
  },
};

const relatedLabels: Record<Language, string> = {
  en: "Related Features",
  zh: "相关功能",
  es: "Funciones Relacionadas",
  fr: "Fonctionnalités Associées",
  ja: "関連機能",
  de: "Verwandte Funktionen",
};

interface RelatedFeaturesProps {
  lang: Language;
  current: FeatureKey;
  related: readonly FeatureKey[];
}

export function RelatedFeatures({
  lang,
  current,
  related,
}: RelatedFeaturesProps) {
  return (
    <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-lg font-semibold text-neutral-600 dark:text-neutral-400 mb-8">
          {relatedLabels[lang]}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related
            .filter((key) => key !== current)
            .map((key) => {
              const config = featureConfig[key];
              const Icon = config.icon;
              return (
                <Link
                  key={key}
                  href={localizeUrl(config.href, lang)}
                  className="group flex items-center gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                    <Icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <span className="flex-1 font-medium">
                    {config.getTitle(lang)}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
