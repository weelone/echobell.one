import { Marquee } from "./magicui/marquee";
import tradingViewLogo from "@/public/images/logos/tradingview.svg";
import githubLogo from "@/public/images/logos/github.svg";
import grafanaLogo from "@/public/images/logos/grafana.svg";
import Image from "next/image";
import { ReactElement } from "react";
import Link from "next/link";
import { Language, localizeUrl } from "@/lib/i18n";

const integrations = [
  {
    name: "GitHub",
    docUrl: "/docs/developer/github",
    logo: (
      <Image
        className="h-5 md:h-10 w-auto dark:invert"
        src={githubLogo}
        alt="Logo of GitHub"
      />
    ),
  },
  {
    name: "TradingView",
    docUrl: "/docs/trader/tradingview",
    logo: (
      <Image
        className="h-6 md:h-12 w-auto dark:invert"
        src={tradingViewLogo}
        alt="Logo of TradingView"
      />
    ),
  },
  {
    name: "Grafana",
    docUrl: "/docs/developer/grafana",
    logo: (
      <Image
        className="h-6 md:h-12 w-auto dark:invert"
        src={grafanaLogo}
        alt="Logo of Grafana"
      />
    ),
  },
];

const IntegrationItem = ({
  name,
  docUrl,
  logo,
  lang,
}: {
  name: string;
  docUrl: string;
  logo: ReactElement;
  lang: Language;
}) => {
  return (
    <Link
      href={localizeUrl(docUrl, lang)}
      title={`Integration with ${name}`}
      className="mx-4 flex items-center opacity-60 hover:opacity-100 transition-opacity duration-200 self-center"
    >
      {logo}
    </Link>
  );
};

export default function HeroSectionIntegrationMarquee({
  className,
  lang,
}: {
  className?: string;
  lang: Language;
}) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden ${className}`}
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {integrations.map((integration) => (
          <IntegrationItem
            key={integration.name}
            lang={lang}
            {...integration}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-100 dark:from-neutral-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-100 dark:from-neutral-900"></div>
    </div>
  );
}
