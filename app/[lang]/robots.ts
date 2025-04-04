import { baseUrl } from "@/lib/metadata";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL('/sitemap.xml', baseUrl).href,
  };
}
