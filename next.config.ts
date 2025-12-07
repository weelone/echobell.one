import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["fumadocs-ui", "fumadocs-core", "fumadocs-mdx"],
};

export default withMDX(config);

initOpenNextCloudflareForDev();
