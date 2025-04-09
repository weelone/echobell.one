"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { LanguagesIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import {
  LanguageToggle,
  LanguageToggleText,
} from "fumadocs-ui/components/layout/language-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import { i18n, uiDictionary } from "@/lib/i18n";

export default function Nav({ lang }: { lang: string }) {
  const t = uiDictionary[lang as keyof typeof uiDictionary].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href={lang == i18n.defaultLanguage ? "/" : `/${lang}`}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Echobell</span>
            <Logo className="h-8 w-8 text-orange-500" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {t.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold opacity-60 hover:opacity-100"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4">
            <LanguageToggle className="me-1.5">
              <LanguagesIcon className="size-4.5" />
              <LanguageToggleText className="md:hidden" />
            </LanguageToggle>
            <ThemeToggle className="p-0" />
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Echobell</span>
              <Logo className="h-8 w-8 text-orange-500" />
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
                  <ThemeToggle className="p-0" />
                  <LanguageToggle className="me-1.5">
                    <LanguagesIcon className="size-4.5" />
                    <LanguageToggleText className="md:hidden" />
                  </LanguageToggle>
                </div>
                {t.navigation.map((item) => (
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
