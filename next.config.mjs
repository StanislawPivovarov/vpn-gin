/** @type {import('next').NextConfig} */
const path = require('path')

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
  env: {
    REACT_BASE_API_URL: process.env.REACT_BASE_API_URL,
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
