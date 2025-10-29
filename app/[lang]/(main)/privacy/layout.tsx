import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Language, localizeUrl } from "@/lib/i18n";


export default async function MdxLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - Echobell",
            description:
              "Privacy Policy for Echobell webhook and email notification service",
            url: `https://echobell.one${localizeUrl("/privacy", lang as Language)}`,
            isPartOf: {
              "@type": "WebSite",
              name: "Echobell",
              url: "https://echobell.one",
            },
            publisher: {
              "@type": "Organization",
              name: "Echobell",
            },
            dateModified: "2025-03-25",
            inLanguage: lang,
          }),
        }}
      />
      <div className="max-w-4xl mx-auto mt-20 pt-20 p-4">
        <Breadcrumb lang={lang as Language} />
      </div>
      <div className="flex flex-col py-24 p-4 max-w-4xl mt-10 mb-20 mx-auto prose dark:prose-invert">
        {children}
      </div>
    </>
  );
}
