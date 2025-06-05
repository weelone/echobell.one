import { ShareIcon, FolderIcon, LinkIcon } from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Language, uiDictionary } from "@/lib/i18n";

export default async function ChannelsPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.channels;

  // Type guard to ensure sections exist
  if (!("sections" in t)) {
    return <FeaturePageLayout lang={lang} featureKey="channels" />;
  }

  const sections = t.sections;

  return (
    <FeaturePageLayout lang={lang} featureKey="channels">
      {/* Organization section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-blue-600">
              Organization
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.organization.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.organization.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <ul className="space-y-6">
              {sections.organization.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <FolderIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-900 dark:text-gray-100">
                      {feature}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sharing section */}
      <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-blue-600">
              Team Collaboration
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.sharing.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.sharing.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="space-y-12">
              {sections.sharing.steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-blue-600">
              Power Features
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.advanced.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.advanced.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
                <div className="text-center">
                  <ShareIcon className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Smart Sharing
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Generate subscription links for seamless team access
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
                <div className="text-center">
                  <LinkIcon className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    Conditional Logic
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Use conditions to filter when notifications are sent
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
