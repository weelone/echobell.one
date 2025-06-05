import { MailIcon, UserIcon, InboxIcon } from "lucide-react";
import FeaturePageLayout from "@/components/FeaturePageLayout";
import { Language, uiDictionary } from "@/lib/i18n";

export default async function EmailTriggersPage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = uiDictionary[lang].featurePages.emailTriggers;

  // Type guard to ensure sections exist
  if (!("sections" in t)) {
    return <FeaturePageLayout lang={lang} featureKey="emailTriggers" />;
  }

  const sections = t.sections;

  return (
    <FeaturePageLayout lang={lang} featureKey="emailTriggers">
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
                        <p className="text-sm/6 opacity-60 opacity-80">
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

      {/* Use cases section */}
      {"useCases" in sections && (
        <div className="bg-orange-50/30 dark:bg-neutral-900/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-center text-base/7 font-semibold text-orange-600">
                Use Cases
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-bold tracking-tight sm:text-4xl">
                {sections.useCases.title}
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="grid gap-6 lg:grid-cols-2">
                {"items" in sections.useCases &&
                  sections.useCases.items.map((item: string, index: number) => (
                    <div key={index} className="relative">
                      <div className="absolute inset-px rounded-lg"></div>
                      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-6">
                        <div className="flex items-center gap-x-3">
                          <div className="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                            <MailIcon className="h-4 w-4 text-orange-600" />
                          </div>
                          <p className="text-sm font-medium">{item}</p>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
                {/* Email Variables */}
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-orange-50/50 dark:bg-neutral-800/50"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                    <h3 className="flex items-center text-lg font-medium tracking-tight mb-6">
                      <UserIcon className="h-5 w-5 mr-3 text-orange-600" />
                      Available Variables
                    </h3>
                    <div className="space-y-3">
                      {[
                        { var: "{{from}}", desc: "Sender's email address" },
                        { var: "{{subject}}", desc: "Email subject line" },
                        { var: "{{text}}", desc: "Plain text content" },
                        { var: "{{html}}", desc: "HTML content" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-orange-200/50 dark:border-orange-500/20 shadow-sm"
                        >
                          <code className="text-sm font-mono text-orange-600 dark:text-orange-400">
                            {item.var}
                          </code>
                          <p className="mt-1 text-xs opacity-60">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 dark:ring-white/10"></div>
                </div>

                {/* Template Example */}
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-orange-50/50 dark:bg-neutral-800/50"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-8">
                    <h3 className="flex items-center text-lg font-medium tracking-tight mb-6">
                      <InboxIcon className="h-5 w-5 mr-3 text-orange-600" />
                      Template Example
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-orange-200/50 dark:border-orange-500/20 shadow-sm">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Title Template:
                        </div>
                        <code className="text-sm font-mono">
                          New email from {`{{from}}`}
                        </code>
                      </div>
                      <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-orange-200/50 dark:border-orange-500/20 shadow-sm">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Body Template:
                        </div>
                        <code className="text-sm font-mono whitespace-pre-line">
                          {`Subject: {{subject}}\n\n{{text}}`}
                        </code>
                      </div>
                    </div>
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
