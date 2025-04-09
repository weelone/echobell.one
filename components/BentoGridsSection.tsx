import { uiDictionary } from "@/lib/i18n";
import BentoGridsSectionNotificationList from "./BentoGridsSectionNotificationList";
import Iphone15Pro from "./magicui/iphone-15-pro";
import { Globe } from "./magicui/globe";
import { BentoGridsSectionForwardingFigure } from "./BentoGridsSectionForwardingFigure";
import { BentoGridsSectionPrivacyFigure } from "./BentoGridsSectionPrivacyFigure";

export default function BentoGridsSection({ lang }: { lang: string }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].features;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-orange-600">
          {t.title}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-5xl">
          {t.subtitle}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center">
                  {t.multipleNotifications.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
                  {t.multipleNotifications.description}
                </p>
              </div>
              <div className="@container relative min-h-[30rem] max-h-[30rem] overflow-hidden w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <Iphone15Pro className="absolute top-10 px-2 w-full overflow-hidden"></Iphone15Pro>
                <BentoGridsSectionNotificationList
                  lang={lang}
                  className="absolute top-30 left-10 right-10"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center">
                  {t.flexibleChannels.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
                  {t.flexibleChannels.description}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <BentoGridsSectionForwardingFigure />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center">
                  {t.privacy.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
                  {t.privacy.description}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <BentoGridsSectionPrivacyFigure />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight opacity-90 max-lg:text-center">
                  {t.multipleTriggers.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 opacity-60 max-lg:text-center">
                  {t.multipleTriggers.description}
                </p>
              </div>
              <div className="relative mt-auto flex flex-col justify-end min-h-[20rem] w-full grow">
                <Globe className="lg:mt-auto" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
