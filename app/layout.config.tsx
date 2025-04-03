import { Logo } from '@/components/Logo';
import { APP_STORE_LINK } from '@/constants';
import { i18n } from '@/lib/i18n';
import { SiAppstore } from '@icons-pack/react-simple-icons';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/(docs)/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <Logo className='h-6 text-orange-500' />
          <span className="font-medium">
            Echobell
          </span>
        </>
      ),
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Documentations',
        url: `${locale}/docs`,
      },
      {
        text: "Blog",
        url: `${locale}/blog`,
      },
      {
        text: "Pricing",
        url: `${locale}/#pricing`,
      },
      {
        type: 'icon',
        icon: <SiAppstore />,
        text: 'App Store',
        url: APP_STORE_LINK,
      }
    ],
    githubUrl: 'https://github.com/weelone/echobell.one',
  };
}