import { Footer } from "@/components/Footer";
import Nav from "@/components/Nav";
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
      <Nav lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
}
