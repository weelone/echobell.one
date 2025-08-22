import { GlobeIcon, CodeIcon, ZapIcon } from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Language, uiDictionary, languages, localizeUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import { createMetadata, baseUrl } from "@/lib/metadata";

export default async function WebhooksPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.webhooks;

  // Type guard to ensure sections exist
  if (!("sections" in t)) {
    return <FeaturePageLayout lang={lang} featureKey="webhooks" />;
  }

  const sections = t.sections;

  return (
    <FeaturePageLayout lang={lang} featureKey="webhooks">
      {/* How it works section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-orange-600">
              How It Works
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.howItWorks.title}
            </p>
            <p className="mt-6 text-lg leading-8 opacity-60">
              {sections.howItWorks.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8 lg:grid-cols-3">
              {"steps" in sections.howItWorks &&
                sections.howItWorks.steps.map(
                  (
                    step: { title: string; description: string },
                    index: number
                  ) => (
                    <div key={step.title} className="relative">
                      <div className="absolute inset-px rounded-lg"></div>
                      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                        <div className="flex items-center gap-x-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-orange-600 flex items-center justify-center shadow-sm">
                            <span className="text-white font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <h3 className="text-lg font-medium tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm/6 opacity-60">
                          {step.description}
                        </p>
                      </div>
                      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Code example section */}
      <div className="bg-orange-50/30 dark:bg-neutral-900/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-center text-base/7 font-semibold text-orange-600">
              Code Examples
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {sections.examples.title}
            </p>
            <p className="mt-6 text-lg leading-8 opacity-60">
              {sections.examples.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* GET Example */}
              <div className="relative">
                <div className="absolute inset-px rounded-lg"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                  <h3 className="flex items-center text-lg font-medium tracking-tight mb-6">
                    <GlobeIcon className="h-5 w-5 mr-3 text-orange-600" />
                    GET Request
                  </h3>
                  <div className="bg-neutral-800 rounded-lg p-6 text-sm font-mono overflow-x-auto">
                    <code className="text-gray-100 whitespace-pre">
                      <span className="text-blue-400 font-semibold">GET</span>{" "}
                      <span className="text-green-400">
                        https://hook.echobell.one/t/xxx
                      </span>
                      <br />
                      <span className="text-yellow-400">
                        ?amount=100&status=success
                      </span>
                    </code>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
              </div>

              {/* POST Example */}
              <div className="relative">
                <div className="absolute inset-px rounded-lg"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                  <h3 className="flex items-center text-lg font-medium tracking-tight mb-6">
                    <CodeIcon className="h-5 w-5 mr-3 text-orange-600" />
                    POST Request
                  </h3>
                  <div className="bg-neutral-800 rounded-lg p-6 text-sm font-mono overflow-x-auto">
                    <code className="text-gray-100 whitespace-pre">
                      <span className="text-blue-400 font-semibold">POST</span>{" "}
                      <span className="text-green-400">
                        https://hook.echobell.one/t/xxx
                      </span>
                      <br />
                      <span className="text-purple-400">
                        Content-Type:
                      </span>{" "}
                      <span className="text-gray-300">application/json</span>
                      <br />
                      <br />
                      <span className="text-yellow-400">
                        {`{`}
                        <br />
                        &nbsp;&nbsp;&quot;amount&quot;: 100,
                        <br />
                        &nbsp;&nbsp;&quot;status&quot;: &quot;success&quot;
                        <br />
                        {`}`}
                      </span>
                    </code>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Variables section */}
      {"variables" in sections && (
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-center text-base/7 font-semibold text-orange-600">
                Dynamic Content
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
                {sections.variables.title}
              </p>
              <p className="mt-6 text-lg leading-8 opacity-60">
                {sections.variables.description}
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-orange-50/50 dark:bg-neutral-800/50"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                    <h3 className="flex items-center text-lg font-medium tracking-tight text-gray-900 dark:text-white mb-6">
                      <ZapIcon className="h-5 w-5 mr-3 text-orange-600" />
                      Template Example
                    </h3>
                    <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-orange-200/50 dark:border-orange-500/20 shadow-sm">
                      <code className="text-sm font-mono break-all">
                        Server {`{{server_name}}`} alert: {`{{message}}`}
                      </code>
                    </div>
                    <p className="mt-4 text-sm/6 opacity-60">
                      This template will use the server_name and message
                      variables from your webhook data.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
                </div>
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-orange-50/50 dark:bg-neutral-800/50"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                    <h3 className="flex items-center text-lg font-medium tracking-tight mb-6">
                      <ZapIcon className="h-5 w-5 mr-3 text-orange-600" />
                      Result
                    </h3>
                    <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-green-200/50 dark:border-green-500/20 shadow-sm">
                      <code className="text-sm font-mono break-all">
                        Server web-01 alert: High CPU usage detected
                      </code>
                    </div>
                    <p className="mt-4 text-sm/6 opacity-60">
                      The final notification sent to all subscribers of this
                      channel.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FeaturePageLayout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.webhooks;
  const canonical = new URL(
    localizeUrl("/features/webhooks", lang),
    baseUrl
  ).toString();

  return createMetadata({
    title: t.title,
    description: t.description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        languages.map((l) => [l, localizeUrl("/features/webhooks", l)])
      ),
    },
    openGraph: { url: canonical },
  });
}
