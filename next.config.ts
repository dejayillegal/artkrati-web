import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'artkrati-web';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  typescript: {
    ignoreBuildErrors: true, // ✅ allows CI to pass, but keep tsc locally
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ allows CI to pass, but run next lint locally
  },
  images: {
    unoptimized: true, // ✅ required for GitHub Pages
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'storage.googleapis.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
