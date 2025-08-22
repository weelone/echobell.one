import {
  PhoneIcon,
  AlertTriangleIcon,
  VolumeXIcon,
  SettingsIcon,
} from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Language, uiDictionary, languages, localizeUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import { createMetadata, baseUrl } from "@/lib/metadata";

export default async function CallNotificationsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.callNotifications;

  // Type guard to ensure sections exist
  if (!("sections" in t)) {
    return <FeaturePageLayout lang={lang} featureKey="callNotifications" />;
  }

  const sections = t.sections;

  return (
    <FeaturePageLayout lang={lang} featureKey="callNotifications">
      {/* When to Use section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-red-600">
              Critical Situations
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.whenToUse.title}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <ul className="space-y-6">
              {sections.whenToUse.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <AlertTriangleIcon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-900 dark:text-gray-100">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works section */}
      <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-red-600">
              Phone Calls
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.howItWorks.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.howItWorks.description}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
            {sections.howItWorks.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-3">
                  <p className="text-lg text-gray-900 dark:text-gray-100">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Settings section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-red-600">
              Configuration
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.settings.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.settings.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
                <div className="text-center">
                  <VolumeXIcon className="mx-auto h-12 w-12 text-red-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Repeat Content
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Configure voice repetition for better clarity
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
                <div className="text-center">
                  <SettingsIcon className="mx-auto h-12 w-12 text-red-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Retry Failed Calls
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Automatic retry for maximum reliability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.callNotifications;
  const canonical = new URL(
    localizeUrl("/features/call-notifications", lang),
    baseUrl
  ).toString();
  return createMetadata({
    title: t.title,
    description: t.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        languages.map((l) => [
          l,
          localizeUrl("/features/call-notifications", l),
        ])
      ),
    },
    openGraph: { url: canonical },
  });
}
