/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camo.qiitausercontent.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
