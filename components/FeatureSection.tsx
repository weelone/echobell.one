import { AtSignIcon, GlobeIcon, PhoneIncomingIcon, UsersIcon } from "lucide-react"
import Image from "next/image"
import { uiDictionary } from '@/lib/i18n'

const icons = {
  call: PhoneIncomingIcon,
  webhook: GlobeIcon,
  email: AtSignIcon,
  subscription: UsersIcon,
}

export default function FeatureSection({ lang }: { lang: string }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].features
  const featureIcons = [icons.call, icons.webhook, icons.email, icons.subscription]

  return (
    <div className="overflow-hidden relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange-600">{t.title}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty opacity-90 sm:text-5xl">
                {t.subtitle}
              </p>
              <p className="mt-6 text-lg/8 opacity-60">
                {t.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                {t.items.map((feature, index) => {
                  const Icon = featureIcons[index]
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold opacity-90">
                        <Icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-orange-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline opacity-60">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/images/docs/screenshot-overview.en.png"
            width={2432}
            height={1442}
            className="w-[32rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 dark:brightness-85"
          />
        </div>
      </div>
    </div>
  )
}
