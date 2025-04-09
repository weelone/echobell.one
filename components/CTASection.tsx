import Image from "next/image";
import { APP_STORE_LINK } from "@/constants";
import { Language, uiDictionary } from "@/lib/i18n";

export default function CTASection({ lang }: { lang: Language }) {
  const t = uiDictionary[lang].cta;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 opacity-60">
            {t.description}
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a href={APP_STORE_LINK} target="_blank">
              <Image src={t.appStoreImage} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
