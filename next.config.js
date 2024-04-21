/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  }
};

module.exports = nextTranslate(nextConfig)
