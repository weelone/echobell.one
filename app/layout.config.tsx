import { Logo } from "@/components/Logo";
import { APP_STORE_LINK } from "@/constants";
import { i18n, Language, localizeUrl, uiDictionary } from "@/lib/i18n";
import { SiAppstore } from "@icons-pack/react-simple-icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/(docs)/docs/layout.tsx
 */
export function baseOptions(locale: Language): BaseLayoutProps {
  const navLinks =
    uiDictionary[locale as keyof typeof uiDictionary].nav.navigation;
  return {
    i18n,
    nav: {
      title: (
        <>
          <Logo className="h-6 text-orange-500" />
          <span className="font-medium">Echobell</span>
        </>
      ),
      url: localizeUrl("/", locale),
      transparentMode: "top",
    },
    links: [
      ...navLinks.map((link) => ({
        text: link.name,
        url: link.href,
      })),
      {
        type: "icon",
        icon: <SiAppstore />,
        text: "App Store",
        url: APP_STORE_LINK,
      },
    ],
    githubUrl: "https://github.com/weelone/echobell.one",
  };
}
