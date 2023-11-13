/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ws-na.amazon-adsystem.com',
        port: '',
        pathname: '/widgets/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/onedrinkthreebars/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
