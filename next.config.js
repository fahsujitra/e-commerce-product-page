/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const basePath = process.env.NODE_ENV === 'production'?'/e-commerce-product-page':'';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    basePath: basePath,
  },
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
}

module.exports = withBundleAnalyzer(nextConfig);
