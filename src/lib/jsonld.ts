import { getAppStoreLink, getGooglePlayLink } from "$lib/constants";

const SITE_URL = "https://echobell.one";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#mobile-application`;
const LOGO_URL = `${SITE_URL}/images/banner.png`;
const SCREENSHOT_URL = `${SITE_URL}/images/screenshots.webp`;

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

export function organizationJsonLd(): object {
  return {
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
}

export function websiteJsonLd(): object {
  return {
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
}

export function softwareApplicationJsonLd(): object {
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

  return {
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
}

export function articleJsonLd(args: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
  imageUrl?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${args.url}#article`,
    headline: args.title,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.dateModified || args.datePublished,
    author: args.authorName.trim()
      ? {
          "@type": "Person",
          name: args.authorName,
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
      "@id": args.url,
    },
    ...(args.imageUrl && {
      image: {
        "@type": "ImageObject",
        url: args.imageUrl,
      },
    }),
  };
}

export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }>
): object {
  return {
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
}

export function productJsonLd(): object {
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

  return {
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
}

export function featureJsonLd(args: {
  name: string;
  description: string;
  url: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${args.url}#webpage`,
    name: args.name,
    description: args.description,
    url: args.url,
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
      name: `${args.name} Features`,
      description: args.description,
    },
    publisher: echobellOrganization,
  };
}

export function howToJsonLd(args: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    ...(args.totalTime && { totalTime: args.totalTime }),
    step: args.steps.map((step, index) => ({
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
}

export function breadcrumbJsonLd(
  items: Array<{ label: string; href: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}
