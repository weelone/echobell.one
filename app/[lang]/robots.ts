import { baseUrl } from "@/lib/metadata";
import { MetadataRoute } from "next";

export const runtime = "edge";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL('/sitemap.xml', baseUrl).href,
  };
}
