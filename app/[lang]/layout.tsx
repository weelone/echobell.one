import 'fumadocs-ui/style.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import "./globals.css";
import { RootProvider } from 'fumadocs-ui/provider';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Translations } from 'fumadocs-ui/contexts/i18n';

export const runtime = 'edge';

export const metadata = createMetadata({
  title: {
    template: '%s | Echobell',
    default: 'Echobell',
  },
  description: 'Instant alerts for different scenarios.',
  metadataBase: baseUrl,
});

const zh: Partial<Translations> = {
  search: "搜索",
  searchNoResult: "没有找到结果",
  toc: "目录",
  tocNoHeadings: "没有目录",
  lastUpdate: "最后更新",
  chooseLanguage: "选择语言",
  nextPage: "下一页",
  previousPage: "上一页",
  chooseTheme: "选择主题",
  editOnGithub: "在GitHub上编辑",
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: '中文',
    locale: 'zh',
  },
];

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>; children: ReactNode }) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { zh }[lang],
          }}
          search={{ enabled: false }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
