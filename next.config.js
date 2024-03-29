/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  i18n,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
