/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'busybusydev.wpenginepowered.com',
      },
    ],
  },
};

module.exports = nextConfig
