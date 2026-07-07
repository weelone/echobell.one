import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const localizedPathPattern = "en|zh|es|fr|ja|de";

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["fumadocs-ui", "fumadocs-core", "fumadocs-mdx"],
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/en#pricing",
        permanent: true,
      },
      {
        source: `/:lang(${localizedPathPattern})/pricing`,
        destination: "/:lang#pricing",
        permanent: true,
      },
      {
        source: "/features/conditions",
        destination: "/en/docs/conditions",
        permanent: true,
      },
      {
        source: `/:lang(${localizedPathPattern})/features/conditions`,
        destination: "/:lang/docs/conditions",
        permanent: true,
      },
      {
        source: "/docs/app/channels",
        destination: "/en/features/channels",
        permanent: true,
      },
      {
        source: `/:lang(${localizedPathPattern})/docs/app/channels`,
        destination: "/:lang/features/channels",
        permanent: true,
      },
      {
        source: "/docs/integrations/zendesk",
        destination: "/en/docs/webhook",
        permanent: true,
      },
      {
        source: `/:lang(${localizedPathPattern})/docs/integrations/zendesk`,
        destination: "/:lang/docs/webhook",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);

initOpenNextCloudflareForDev();
