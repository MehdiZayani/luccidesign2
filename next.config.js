/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'comachem.com',
      },
    ],
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://luccidesign.tn',
    cacheTime: 600000, // 10 minutes
  },
}

module.exports = nextConfig
