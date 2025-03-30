import 'fumadocs-ui/style.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider';
import { baseUrl, createMetadata } from '@/lib/metadata';

export const runtime = 'edge';

export const metadata = createMetadata({
  title: {
    template: '%s | Echobell',
    default: 'Echobell',
  },
  description: 'Instant alerts for different scenarios.',
  metadataBase: baseUrl,
});


const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
