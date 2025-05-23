import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { Language } from "@/lib/i18n";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: Language }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <DocsLayout tree={source.pageTree[lang]} {...baseOptions(lang)}>
      {children}
    </DocsLayout>
  );
}
