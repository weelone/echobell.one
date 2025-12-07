import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["fumadocs-ui", "fumadocs-core", "fumadocs-mdx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/en/docs",
        permanent: false,
      },
      {
        source: "/blog",
        destination: "/en/blog",
        permanent: false,
      },
      {
        source: "/features",
        destination: "/en/features",
        permanent: false,
      },
      {
        source: "/features/:path*",
        destination: "/en/features/:path*",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/en/privacy",
        permanent: false,
      },
      {
        source: "/terms",
        destination: "/en/terms",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
