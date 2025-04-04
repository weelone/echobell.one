import { Footer } from "@/components/Footer";
import Nav from "@/components/Nav";

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}>) {
  const {lang} = await params;

  return <div>
    <Nav lang={lang} />
    {children}
    <Footer lang={lang} />
  </div>;
}
