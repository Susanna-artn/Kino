/**
 * On GitHub Pages the site lives at https://<user>.github.io/<repo>/, so
 * every path needs a /<repo> prefix. Locally and on Vercel it stays empty.
 * The GH Pages workflow sets GITHUB_PAGES=true.
 */
const isPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.PAGES_REPO ?? 'Kino';
const prefix = isPages ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: prefix,
  assetPrefix: prefix || undefined,
  env: {
    // exposed to client code so next/image src for /public assets can be prefixed.
    NEXT_PUBLIC_BASE_PATH: prefix,
  },
};

export default nextConfig;
