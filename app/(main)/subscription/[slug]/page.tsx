import { fetchChannelBySubscriptionToken } from "@/app/actions/channel";
import { notFound } from "next/navigation";
import { APP_STORE_LINK } from '@/constants';
import Link from 'next/link'
import Image from 'next/image';

import AppStore from '@/public/images/app-store.en.svg';

interface SubscriptionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SubscriptionPage({
  params,
}: SubscriptionPageProps) {
  const { slug: subscriptionToken } = await params;
  const channel = await fetchChannelBySubscriptionToken(subscriptionToken);

  if (!channel) {
    notFound();
  }

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
      <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-56">
        <div className="text-lg font-medium text-pretty px-4 py-2 sm:px-8 sm:py-4">
          Subscribe to channel
        </div>
        <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-8 shadow-lg">
          <h1 className="flex gap-2 text-2xl font-semibold tracking-tight text-balance opacity-90">
            <div style={{ backgroundColor: channel.color, width: '6px', margin: '6px 0', borderRadius: '6px' }} />
            {channel.name}
            <span className="opacity-60">#{channel.id}</span>
          </h1>
          <p className="font-medium text-pretty mt-2">
            {channel.titleTemplate}
          </p>
          <p className="font-medium text-pretty opacity-60">
            {channel.bodyTemplate}
          </p>
        </div>
        <p className="mt-5">
          Open the link in the Echobell app to subscribe to the channel, or copy the link and paste it in subscription view in the app.
        </p>
        <p className="mt-2">If you don&apos;t have the app yet, you can download it from the App Store.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href={APP_STORE_LINK}
            target="_blank"
          >
            <Image src={AppStore} alt="App Store" />
          </a>
          <Link href="/docs" className="text-sm/6 font-semibold opacity-90">
            Documentation <span aria-hidden="true">→</span>
          </Link>
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
  );
}