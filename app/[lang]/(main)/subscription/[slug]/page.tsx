import { fetchChannelBySubscriptionToken } from "@/app/actions/channel";
import { APP_STORE_LINK } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Language, uiDictionary, localizeUrl } from "@/lib/i18n";
import type { Metadata } from "next";
import { baseUrl } from "@/lib/metadata";

interface SubscriptionPageProps {
  params: Promise<{
    lang: Language;
    slug: string;
  }>;
}

export default async function SubscriptionPage({
  params,
}: SubscriptionPageProps) {
  const { slug: subscriptionToken, lang } = await params;
  const t = uiDictionary[lang as keyof typeof uiDictionary].subscription;
  const channel = await fetchChannelBySubscriptionToken(subscriptionToken);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <Breadcrumb lang={lang} />
      <div className="mx-auto max-w-2xl py-32 sm:py-42 lg:py-52">
        {channel ? (
          <>
            <div className="flex flex-col bg-white dark:bg-neutral-900 rounded-lg p-4 sm:p-8 border">
              <h1 className="flex gap-2 text-2xl font-semibold tracking-tight text-balance opacity-90">
                <div
                  style={{
                    backgroundColor: channel.color,
                    width: "6px",
                    margin: "6px 0",
                    borderRadius: "6px",
                  }}
                />
                {channel.name}
                <span className="opacity-60">#{channel.id}</span>
              </h1>
              <p className="font-medium text-pretty mt-2">
                {channel.titleTemplate}
              </p>
              <p className="font-medium text-pretty opacity-60">
                {channel.bodyTemplate}
              </p>
              {channel.note && (
                <div className="font-medium text-pretty opacity-60 mt-4 flex">
                  <div className="w-1 rounded-full bg-foreground mr-2" />
                  <p>{channel.note}</p>
                </div>
              )}
            </div>
            <a
              className="w-full block mt-4 bg-orange-500 text-white py-2 rounded-lg text-center"
              href={`echobell://subscribe/${subscriptionToken}`}
            >
              {t.subscribe}
            </a>
          </>
        ) : (
          <div className="text-4xl text-center mb-20">{t.channelNotFound}</div>
        )}

        <p className="mt-5">{t.subscriptionTips}</p>
        <p className="mt-2">{t.downloadTips}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href={APP_STORE_LINK} target="_blank">
            <Image src={t.appStoreImage} alt="App Store" />
          </a>
          <Link href="/docs" className="text-sm/6 font-semibold opacity-90">
            {t.learnMore} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: SubscriptionPageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const canonical = new URL(
    localizeUrl(`/subscription/${slug}`, lang),
    baseUrl
  ).toString();

  return {
    title: "Subscribe to Channel | Echobell",
    description:
      "Private subscription page to join an Echobell channel on your device.",
    alternates: { canonical },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
  };
}
