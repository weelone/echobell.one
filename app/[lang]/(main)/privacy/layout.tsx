import React from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Language } from "@/lib/i18n";

export const runtime = "edge";

export default async function MdxLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Language }>;
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
            url: "https://echobell.one/privacy",
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
            inLanguage: "en",
          }),
        }}
      />
      <div className="max-w-4xl mx-auto mt-20 pt-20 p-4">
        <Breadcrumb lang={lang} />
      </div>
      <div className="flex flex-col py-24 p-4 max-w-4xl mt-10 mb-20 mx-auto prose dark:prose-invert">
        {children}
      </div>
    </>
  );
}
