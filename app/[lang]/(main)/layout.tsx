import { Footer } from "@/components/Footer";
import Nav from "@/components/Nav";
import { BreadcrumbJsonLd } from "@/components/Breadcrumb";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { Language } from "@/lib/i18n";

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ lang: Language }>;
  children: React.ReactNode;
}>) {
  const { lang } = await params;

  return (
    <div>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <BreadcrumbJsonLd lang={lang} />
      <Nav lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
}
