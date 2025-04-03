import Link from 'next/link'
import Image from 'next/image'

export default function CTASection() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
            Never miss important alerts. Start using Echobell today.
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Transform webhooks and emails into instant notifications. Create channels, customize alerts, and share them with your team. Your notification data stays on your device.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="https://apps.apple.com/app/id6743597198"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              target="_blank"
            >
              Download on App Store
            </a>
            <Link href="/docs" className="text-sm/6 font-semibold text-white">
              View Documentation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            alt="Product screenshot"
            src="/images/docs/screenshot-overview.en.png"
            width={1824}
            height={1080}
            className="absolute top-0 left-0 w-[62rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 dark:brightness-85"
          />
        </div>
      </div>
    </div>
  )
}
