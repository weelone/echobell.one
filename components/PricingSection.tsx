import { APP_STORE_LINK } from '@/constants'
import { uiDictionary } from '@/lib/i18n'
import { CheckIcon } from 'lucide-react'

export default function PricingSection({ lang }: { lang: string }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].pricing

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-orange-600">{t.title}</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            {t.subtitle}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg opacity-60">
          {t.callout}
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {[t.monthly, t.annual].map((tier, i) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 dark:bg-black/50 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : i === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              )}
            >
              <h3
                id={tier.id}
                className={classNames(tier.featured ? 'text-orange-400' : 'text-orange-600', 'text-base/7 font-semibold')}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'opacity-90',
                    'text-5xl font-semibold tracking-tight',
                  )}
                >
                  {tier.price}
                  <span className="text-sm font-semibold leading-6 tracking-tight text-gray-400 ml-2">
                    {t.currency}
                  </span>
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'opacity-50', 'text-base')}>{t.period}</span>
              </p>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'opacity-60', 'mt-6 text-base/7')}>
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'opacity-60',
                  'mt-8 space-y-3 text-sm/6 sm:mt-10',
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(tier.featured ? 'text-orange-400' : 'text-orange-600', 'h-6 w-5 flex-none')}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_LINK}
                target="_blank"
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-orange-500 text-white shadow-xs hover:bg-orange-400 focus-visible:outline-orange-500'
                    : 'text-orange-600 ring-1 ring-orange-500/30 ring-inset hover:ring-orange-500/50 focus-visible:outline-orange-600',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                )}
              >
                {t.startTrial}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}