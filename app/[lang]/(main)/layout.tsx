import { Footer } from "@/components/Footer";
import Nav from "@/components/Nav";
import { BreadcrumbJsonLd } from "@/components/Breadcrumb";
import { Language } from "@/lib/i18n";

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}>) {
  const { lang } = await params;

  return (
    <div>
      <BreadcrumbJsonLd lang={lang as Language} />
      <Nav lang={lang as Language} />
      {children}
      <Footer lang={lang as Language} />
    </div>
  );
}
