import { AtSignIcon, GlobeIcon, PhoneIncomingIcon, UsersIcon } from "lucide-react"
import Image from "next/image"

const features = [
  {
    name: 'Get notified with call',
    description:
      'When you need to be notified instantly, you can set up a call alert.',
    icon: PhoneIncomingIcon,
  },
  {
    name: 'Webhook',
    description:
      'Webhook is a way to send data from one application to another. It is a simple HTTP callback that allows you to send data to a URL when an event occurs.',
    icon: GlobeIcon,
  },
  {
    name: 'Email',
    description:
      'You can trigger a notification with email. Just send a email to a specific address and you will be notified.',
    icon: AtSignIcon,
  },
  {
    name: 'Subscriptions',
    description:
      'You can subscribe to a channel and get notified. You can also share the channel with your team.',
    icon: UsersIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange-600">Deploy faster</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-orange-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/images/docs/screenshot-overview.en.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
