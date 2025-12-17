import { AppStoreQRCode } from "./QRCode";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { APP_STORE_LINK } from "@/constants";
import { uiDictionary, Language } from "@/lib/i18n";

function QrCodeBorder(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer({ lang }: { lang: Language }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].footer;

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 overflow-hidden relative isolate p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:py-16">
          <div>
            <div className="flex items-center opacity-90">
              <Logo className="h-10 w-10 flex-none text-orange-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">Echobell</p>
                <p className="mt-1 text-sm opacity-60">{t.subtitle}</p>
              </div>
            </div>
            <div className="group relative mt-8 flex items-center self-stretch transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                <QrCodeBorder className="absolute inset-0 h-full w-full stroke-neutral-300 transition-colors group-hover:stroke-orange-500" />
                <AppStoreQRCode />
              </div>
              <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold opacity-90">
                  <a href={APP_STORE_LINK} target="_blank">
                    <span className="absolute inset-0 sm:rounded-2xl" />
                    {t.downloadFromAppStore}
                  </a>
                </p>
                <p className="mt-1 text-sm opacity-60">{t.scanQRCode}</p>
              </div>
            </div>
          </div>
          <nav className="w-full grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-12 lg:gap-16">
            {t.linkGroups.map((group) => (
              <div key={group.label} className="flex flex-col">
                <h4 className="text-sm font-semibold opacity-90">
                  {group.label}
                </h4>
                <ul className="mt-3 space-y-2.5 flex flex-col">
                  <NavLinks links={group.links} />
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-neutral-200 dark:border-neutral-800 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm opacity-60 md:mt-0">
            echobell@weelone.com
          </p>
          <p className="mt-6 text-sm opacity-60 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
