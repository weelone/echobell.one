import Image from "next/image";
import Link from "next/link";
import { uiDictionary } from '@/lib/i18n'

import { APP_STORE_LINK } from "@/constants";

export default function HeroSection({ lang }: { lang: string }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].hero

  return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="dark:hidden relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-orange-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 opacity-60 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {t.releaseNote}
              <Link href={`/${lang}/blog/echobell-is-here`} className="font-semibold text-orange-600 ml-1">
                <span aria-hidden="true" className="absolute inset-0" />
                {t.learnMore} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance opacity-90 sm:text-7xl">
              {t.title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty opacity-60 sm:text-xl/8">
              {t.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={APP_STORE_LINK}
                target="_blank"
              >
                <Image src={t.appStoreImage} alt="App Store" />
              </a>
              <Link href={`/${lang}/docs`} className="text-sm/6 font-semibold opacity-90">
                {t.getStarted} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="dark:hidden relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
  )
}
