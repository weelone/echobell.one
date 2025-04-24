import Image from "next/image";
import Link from "next/link";
import { Language, localizeUrl, uiDictionary } from "@/lib/i18n";

import { APP_STORE_LINK } from "@/constants";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { blog } from "@/lib/source";
import HeroSectionIntegrationMarquee from "./HeroSectionIntegrationMarquee";

export default function HeroSection({ lang }: { lang: Language }) {
  const t = uiDictionary[lang].hero;
  const posts = [...blog.getPages(lang)].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  const latestPost = posts[0];

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center">
            <Link
              className={cn(
                "group rounded-full border border-black/10 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-800"
              )}
              href={latestPost.url}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="text-sm lg:text-base line-clamp-1">
                  ✨ {latestPost.data.title}
                </span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-6xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg font-medium text-pretty opacity-60 sm:text-xl/8">
            {t.description}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a href={APP_STORE_LINK} target="_blank">
              <Image src={t.appStoreImage} alt="App Store" />
            </a>
            <Link
              href={localizeUrl("/docs", lang)}
              className="text-sm/6 font-semibold opacity-90"
            >
              {t.getStarted} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <h3 className="mt-20 opacity-60 font-semibold">
            {uiDictionary[lang].hero.canBeIntegratedInto}
          </h3>
          <HeroSectionIntegrationMarquee className="mt-4" lang={lang} />
        </div>
      </div>
    </div>
  );
}
