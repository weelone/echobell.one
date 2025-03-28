import { Logo } from '@/components/Logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/(docs)/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
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
  githubUrl: 'https://github.com/weelone/echobell.one',
};
