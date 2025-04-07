import Image from "next/image";
import Link from "next/link";
import { uiDictionary } from "@/lib/i18n";

import { APP_STORE_LINK } from "@/constants";

export default function HeroSection({ lang }: { lang: string }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].hero;

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 opacity-60 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20">
            {t.releaseNote}
            <Link
              href={`/${lang}/blog/echobell-is-here`}
              className="font-semibold text-orange-600 ml-1"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {t.learnMore} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance opacity-90 sm:text-6xl">
            {t.title}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty opacity-60 sm:text-xl/8">
            {t.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href={APP_STORE_LINK} target="_blank">
              <Image src={t.appStoreImage} alt="App Store" />
            </a>
            <Link
              href={`/${lang}/docs`}
              className="text-sm/6 font-semibold opacity-90"
            >
              {t.getStarted} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
