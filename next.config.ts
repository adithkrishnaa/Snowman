import type { NextConfig } from "next";

// `npm run build:static` produces a plain HTML export in `out/` for uploading to
// SiteGround (public_html). The regular `npm run build` is used by Vercel.
const isStaticExport = process.env.npm_lifecycle_event === 'build:static';

const nextConfig: NextConfig = {
  ...(isStaticExport && { output: 'export' }),
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

// Headers are not supported in a static export
if (!isStaticExport) {
  nextConfig.headers = async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  };
}

export default nextConfig;
