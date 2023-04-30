const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src'],
  },
  i18n,
}

module.exports = nextConfig
