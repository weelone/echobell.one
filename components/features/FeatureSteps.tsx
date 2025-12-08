import { CheckCircleIcon } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface FeatureStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
  accentColor?: string;
}

export function FeatureSteps({
  title,
  subtitle,
  steps,
  accentColor = "orange",
}: FeatureStepsProps) {
  const colorClasses: Record<string, { number: string; line: string }> = {
    orange: {
      number: "bg-orange-600 text-white",
      line: "bg-orange-200 dark:bg-orange-800",
    },
    blue: {
      number: "bg-blue-600 text-white",
      line: "bg-blue-200 dark:bg-blue-800",
    },
    red: {
      number: "bg-red-600 text-white",
      line: "bg-red-200 dark:bg-red-800",
    },
    purple: {
      number: "bg-purple-600 text-white",
      line: "bg-purple-200 dark:bg-purple-800",
    },
    green: {
      number: "bg-green-600 text-white",
      line: "bg-green-200 dark:bg-green-800",
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.orange;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              className={`absolute left-6 top-0 bottom-0 w-0.5 ${colors.line}`}
              style={{ height: `calc(100% - 3rem)` }}
            />
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  <div
                    className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${colors.number} font-bold text-lg shadow-lg`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Final checkmark */}
              <div className="relative flex gap-6">
                <div
                  className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${colors.number} shadow-lg`}
                >
                  <CheckCircleIcon className="h-6 w-6" />
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
                    Done!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
