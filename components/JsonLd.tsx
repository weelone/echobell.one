import { getAppStoreLink, getGooglePlayLink } from "@/constants";

const SITE_URL = "https://echobell.one";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#mobile-application`;
const LOGO_URL = `${SITE_URL}/images/banner.png`;
const SCREENSHOT_URL = `${SITE_URL}/images/screenshots.webp`;

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  const safeJsonLd = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd }}
    />
  );
}

function getPriceValidUntil(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString().split("T")[0];
}

const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "US",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  url: `${SITE_URL}/en/terms`,
};

const digitalShippingDetails = {
  "@type": "OfferShippingDetails",
  doesNotShip: true,
};

const echobellOrganization = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Echobell",
  url: SITE_URL,
};

const echobellLogo = {
  "@type": "ImageObject",
  url: LOGO_URL,
  width: 1200,
  height: 675,
};

// Organization schema for Echobell
export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Echobell",
    url: SITE_URL,
    logo: echobellLogo,
    description: "Instant webhook and email alerts via calls and notifications",
    sameAs: [
      "https://x.com/EchobellApp",
      "https://github.com/weelone/echobell.one",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "echobell@weelone.com",
      url: `${SITE_URL}/en/docs/support`,
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
    "@id": WEBSITE_ID,
    name: "Echobell",
    url: SITE_URL,
    description:
      "Never miss critical alerts. Echobell instantly converts webhooks & emails into mobile notifications or phone calls.",
    inLanguage: ["en", "zh", "es", "fr", "ja", "de"],
    publisher: echobellOrganization,
  };

  return <JsonLd data={websiteData} />;
}

// Software Application schema for Echobell mobile app
export function SoftwareApplicationJsonLd() {
  const appStoreLink = getAppStoreLink(["seo", "software-application"]);
  const googlePlayLink = getGooglePlayLink();
  const offer = {
    "@type": "Offer",
    url: SITE_URL,
    price: "0.00",
    priceCurrency: "USD",
    priceValidUntil: getPriceValidUntil(),
    availability: "https://schema.org/InStock",
    hasMerchantReturnPolicy: merchantReturnPolicy,
    shippingDetails: digitalShippingDetails,
  };

  const appData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": APP_ID,
    name: "Echobell",
    operatingSystem: "iOS, Android",
    applicationCategory: "BusinessApplication",
    description:
      "Instant webhook and email alerts via calls and notifications for mobile devices",
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    downloadUrl: [appStoreLink, googlePlayLink],
    installUrl: [appStoreLink, googlePlayLink],
    image: LOGO_URL,
    screenshot: SCREENSHOT_URL,
    isAccessibleForFree: true,
    author: echobellOrganization,
    publisher: {
      "@type": "Organization",
      name: "Weelone",
      url: "https://weelone.com",
    },
    offers: offer,
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
    "@id": `${url}#article`,
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: authorName.trim()
      ? {
          "@type": "Person",
          name: authorName,
        }
      : echobellOrganization,
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Echobell",
      logo: echobellLogo,
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
  const offer = {
    "@type": "Offer",
    url: SITE_URL,
    priceCurrency: "USD",
    price: "0.00",
    priceValidUntil: getPriceValidUntil(),
    availability: "https://schema.org/InStock",
    hasMerchantReturnPolicy: merchantReturnPolicy,
    shippingDetails: digitalShippingDetails,
    seller: {
      "@type": "Organization",
      name: "Echobell",
    },
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product`,
    name: "Echobell",
    image: LOGO_URL,
    description: "Instant webhook and email alerts via calls and notifications",
    brand: {
      "@type": "Brand",
      name: "Echobell",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Echobell",
    },
    offers: offer,
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
    "@id": `${url}#webpage`,
    name: name,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Echobell",
      url: SITE_URL,
    },
    about: {
      "@type": "SoftwareApplication",
      "@id": APP_ID,
      name: "Echobell",
      applicationCategory: "BusinessApplication",
    },
    mainEntity: {
      "@type": "ItemList",
      name: `${name} Features`,
      description: description,
    },
    publisher: echobellOrganization,
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
      "@id": APP_ID,
      name: "Echobell",
      url: SITE_URL,
    },
  };

  return <JsonLd data={howToData} />;
}
