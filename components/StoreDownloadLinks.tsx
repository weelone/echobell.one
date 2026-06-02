import Image, { type ImageProps } from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { SiGoogleplay } from "@icons-pack/react-simple-icons";

import { getGooglePlayLink } from "@/constants";
import { cn } from "@/lib/utils";

interface StoreDownloadLinksProps {
  appStoreImage: ImageProps["src"];
  appStoreLink: string;
  appStoreAlt?: string;
  className?: string;
}

export function GooglePlayTextLink({
  className,
  children = "Google Play",
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={getGooglePlayLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

export function StoreDownloadLinks({
  appStoreImage,
  appStoreLink,
  appStoreAlt = "App Store",
  className,
}: StoreDownloadLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className
      )}
    >
      <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
        <Image src={appStoreImage} alt={appStoreAlt} className="h-12 w-auto" />
      </a>
      <a
        href={getGooglePlayLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-neutral-800 dark:border-neutral-200 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
      >
        <SiGoogleplay className="size-5" aria-hidden="true" />
        Google Play
      </a>
    </div>
  );
}
