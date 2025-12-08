import type { ElementType } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ElementType;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  accentColor?: string;
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  accentColor = "orange",
}: FeatureGridProps) {
  const colorClasses: Record<string, { icon: string; iconBg: string }> = {
    orange: {
      icon: "text-orange-600",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
    },
    blue: {
      icon: "text-blue-600",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    red: {
      icon: "text-red-600",
      iconBg: "bg-red-100 dark:bg-red-900/30",
    },
    purple: {
      icon: "text-purple-600",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
    },
    green: {
      icon: "text-green-600",
      iconBg: "bg-green-100 dark:bg-green-900/30",
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.orange;

  const gridCols: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </p>
          )}
        </div>
        <div
          className={`mx-auto mt-16 grid max-w-5xl gap-8 ${gridCols[columns]}`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg}`}
                >
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
