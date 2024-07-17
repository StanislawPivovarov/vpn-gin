/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  trailingSlash: true,
  distDir: 'build',

  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['i.postimg.cc'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig
