import Link from "next/link";
import {
  MailIcon,
  PhoneIcon,
  CodeIcon,
  FileTextIcon,
  FolderIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { Language, uiDictionary, localizeUrl, languages } from "@/lib/i18n";
import { createMetadata, baseUrl } from "@/lib/metadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { ElementType } from "react";

type FeatureKey =
  | "webhooks"
  | "emailTriggers"
  | "callNotifications"
  | "channels"
  | "templates";

export default async function FeaturesIndexPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang];

  const features: Array<{
    key: FeatureKey;
    href: string;
    icon: ElementType;
  }> = [
    { key: "webhooks", href: "/features/webhooks", icon: CodeIcon },
    { key: "emailTriggers", href: "/features/email-triggers", icon: MailIcon },
    {
      key: "callNotifications",
      href: "/features/call-notifications",
      icon: PhoneIcon,
    },
    { key: "channels", href: "/features/channels", icon: FolderIcon },
    { key: "templates", href: "/features/templates", icon: FileTextIcon },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 pt-20">
        <Breadcrumb lang={lang} />
      </div>

      <div className="relative isolate overflow-hidden px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t.features.title}
            </h1>
            <p className="mt-6 mx-auto text-lg max-w-2xl text-center leading-8 opacity-60">
              {t.features.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, href, icon: Icon }) => {
            const f = t.featurePages[key];
            return (
              <Link
                key={key}
                href={localizeUrl(href, lang)}
                className="group relative rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/40 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-600/10 dark:bg-orange-500/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-60 line-clamp-3">
                      {f.description}
                    </p>
                  </div>
                </div>
                <span className="absolute inset-0 rounded-xl ring-1 ring-black/5 dark:ring-white/10 pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = uiDictionary[lang].features;
  const canonical = new URL(localizeUrl("/features", lang), baseUrl).toString();

  return createMetadata({
    title: t.title,
    description: t.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        languages.map((l) => [l, localizeUrl("/features", l)])
      ),
    },
    openGraph: { url: canonical },
  });
}
