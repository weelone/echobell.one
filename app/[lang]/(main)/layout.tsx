import { Footer } from "@/components/Footer";
import Nav from "@/components/Nav";
import { BreadcrumbJsonLd } from "@/components/Breadcrumb";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
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
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <BreadcrumbJsonLd lang={lang as Language} />
      <Nav lang={lang as Language} />
      {children}
      <Footer lang={lang as Language} />
    </div>
  );
}
