interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization schema for Echobell
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Echobell",
    url: "https://echobell.one",
    logo: "https://echobell.one/images/banner.png",
    description: "Instant webhook and email alerts via calls and notifications",
    sameAs: [
      "https://twitter.com/EchobellApp",
      "https://github.com/weelone/echobell.one",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: [
        "English",
        "Chinese",
        "Spanish",
        "French",
        "Japanese",
        "German",
      ],
    },
  };

  return <JsonLd data={organizationData} />;
}

// Website schema
export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Echobell",
    url: "https://echobell.one",
    description:
      "Never miss critical alerts. Echobell instantly converts webhooks & emails into iOS notifications or phone calls.",
    // Keep potentialAction simple to avoid invalid URLs if no search page exists
    // You can re-enable a dedicated search endpoint later
    potentialAction: undefined,
    publisher: {
      "@type": "Organization",
      name: "Echobell",
    },
  };

  return <JsonLd data={websiteData} />;
}

// Software Application schema for Echobell iOS app
export function SoftwareApplicationJsonLd() {
  const appData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Echobell",
    operatingSystem: "iOS 17.0 or later",
    applicationCategory: "BusinessApplication",
    description:
      "Instant webhook and email alerts via calls and notifications for iOS",
    url: "https://echobell.one",
    downloadUrl: "https://apps.apple.com/app/id6743597198",
    installUrl: "https://apps.apple.com/app/id6743597198",
    screenshot: "https://echobell.one/images/screenshots.webp",
    softwareVersion: "1.21",
    author: {
      "@type": "Organization",
      name: "Echobell",
      url: "https://echobell.one",
    },
    publisher: {
      "@type": "Organization",
      name: "Weelone",
      url: "https://weelone.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Webhook notifications",
      "Email triggers",
      "Phone call alerts",
      "Team channel sharing",
      "Dynamic templates",
      "Privacy-first design",
    ],
  };

  return <JsonLd data={appData} />;
}

// Article schema for blog posts
export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  url,
  imageUrl,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
  imageUrl?: string;
}) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Echobell",
      logo: {
        "@type": "ImageObject",
        url: "https://echobell.one/images/banner.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
  };

  return <JsonLd data={articleData} />;
}

// FAQ schema
export function FAQJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={faqData} />;
}

// Product schema for Echobell service
export function ProductJsonLd() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Echobell",
    description: "Instant webhook and email alerts via calls and notifications",
    brand: {
      "@type": "Brand",
      name: "Echobell",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Echobell",
    },
    offers: {
      "@type": "Offer",
      url: "https://echobell.one",
      priceCurrency: "USD",
      price: "0",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Echobell",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return <JsonLd data={productData} />;
}

// Feature page schema - for individual feature pages
export function FeatureJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const featureData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: name,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Echobell",
      url: "https://echobell.one",
    },
    about: {
      "@type": "SoftwareApplication",
      name: "Echobell",
      applicationCategory: "BusinessApplication",
    },
    mainEntity: {
      "@type": "ItemList",
      name: `${name} Features`,
      description: description,
    },
    publisher: {
      "@type": "Organization",
      name: "Echobell",
      url: "https://echobell.one",
    },
  };

  return <JsonLd data={featureData} />;
}

// How-To schema for integration guides
export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    ...(totalTime && { totalTime: totalTime }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    tool: {
      "@type": "SoftwareApplication",
      name: "Echobell",
      url: "https://echobell.one",
    },
  };

  return <JsonLd data={howToData} />;
}
