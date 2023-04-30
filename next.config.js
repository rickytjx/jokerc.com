/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./src'],
  },
}

module.exports = nextConfig
