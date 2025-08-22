import { CodeIcon, BracesIcon, FileTextIcon } from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Language, uiDictionary, languages, localizeUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import { createMetadata, baseUrl } from "@/lib/metadata";

export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.templates;

  // Type guard to ensure sections exist
  if (!("sections" in t)) {
    return <FeaturePageLayout lang={lang} featureKey="templates" />;
  }

  const sections = t.sections;

  return (
    <FeaturePageLayout lang={lang} featureKey="templates">
      {/* Variables section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-purple-600">
              Dynamic Content
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.variables.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.variables.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {sections.variables.examples.map((example, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FileTextIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Template
                      </h3>
                      <div className="rounded bg-gray-100 dark:bg-gray-700 p-3 font-mono text-sm">
                        {example.template}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                        Result
                      </h4>
                      <div className="rounded bg-blue-50 dark:bg-blue-900/20 p-3 text-sm text-blue-900 dark:text-blue-100">
                        {example.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expressions section */}
      <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-purple-600">
              Logic & Control
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.expressions.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.expressions.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <ul className="space-y-6">
              {sections.expressions.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CodeIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-900 dark:text-gray-100 font-mono">
                      {feature}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Conditions section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-purple-600">
              Smart Filtering
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.conditions.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {sections.conditions.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-lg">
              <div className="text-center">
                <BracesIcon className="mx-auto h-12 w-12 text-purple-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Example Condition
                </h3>
                <div className="mt-4 rounded bg-gray-100 dark:bg-gray-700 p-4 font-mono text-sm">
                  {sections.conditions.example}
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  This condition ensures notifications are only sent for
                  critical errors
                </p>
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
  const t = uiDictionary[lang].featurePages.templates;
  const canonical = new URL(
    localizeUrl("/features/templates", lang),
    baseUrl
  ).toString();
  return createMetadata({
    title: t.title,
    description: t.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        languages.map((l) => [l, localizeUrl("/features/templates", l)])
      ),
    },
    openGraph: { url: canonical },
  });
}
