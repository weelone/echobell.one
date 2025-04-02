import { createMDX } from 'fumadocs-mdx/next';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);

if (process.env.NODE_ENV === 'development') {
	setupDevPlatform().catch(e => console.error(e));
}