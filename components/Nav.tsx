"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { LanguagesIcon, MenuIcon, XIcon, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { Language, localizeUrl, uiDictionary, languages } from "@/lib/i18n";
import { NavLinks } from "./NavLinks";
import { Gantari } from "next/font/google";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const gantari = Gantari({
  subsets: ["latin"],
});

function SimpleThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}

function SimpleLanguageToggle({ lang }: { lang: Language }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 gap-1.5"
        aria-label="Choose language"
      >
        <LanguagesIcon className="size-5" />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-44 rounded-xl shadow-lg bg-white dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10 z-50 overflow-hidden">
            <div className="py-1.5">
              {languages.map((locale) => (
                <Link
                  key={locale}
                  href={pathname.replace(`/${lang}`, `/${locale}`)}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    locale === lang
                      ? "bg-orange-50 dark:bg-orange-950/50 font-medium text-orange-600 dark:text-orange-400"
                      : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {languageNames[locale as Language]}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const languageNames: Record<Language, string> = {
  en: "English",
  zh: "简体中文",
  es: "Español",
  fr: "Français",
  ja: "日本語",
  de: "Deutsch",
};

const useCasesLabel: Record<Language, string> = {
  en: "Use Cases",
  zh: "场景方案",
  es: "Casos de uso",
  fr: "Cas d'usage",
  ja: "ユースケース",
  de: "Anwendungsfälle",
};

export default function Nav({ lang }: { lang: Language }) {
  const t = uiDictionary[lang].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationLinks = [
    ...t.navigation.map((item) => ({ name: item.name, href: item.href })),
    {
      name: useCasesLabel[lang],
      href: localizeUrl("/use-cases", lang),
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href={localizeUrl("/", lang)}
            className="-m-1.5 p-1.5 flex gap-4"
          >
            <Logo className="h-8 w-8 text-orange-500" />
            <span className={`text-2xl font-semibold ${gantari.className}`}>
              Echobell
            </span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12 md:items-center">
          <NavLinks
            className="text-md font-semibold"
            links={navigationLinks.map((navItem) => ({
              label: navItem.name,
              href: navItem.href,
            }))}
          />
          <div className="flex gap-2 items-center">
            <SimpleLanguageToggle lang={lang} />
            <SimpleThemeToggle />
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={localizeUrl("/", lang)}
              className="-m-1.5 p-1.5 flex gap-4"
            >
              <Logo className="h-8 w-8 text-orange-500" />
              <span className={`text-2xl font-semibold ${gantari.className}`}>
                Echobell
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 opacity-70"
            >
              <span className="sr-only">Close menu</span>
              <XIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/10">
              <div className="space-y-2 py-6">
                <div className="flex justify-between">
                  <SimpleThemeToggle />
                  <SimpleLanguageToggle lang={lang} />
                </div>
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold opacity-80"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
