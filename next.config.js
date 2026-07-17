/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
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
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/onedrinkthreebars/image/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'onedrinkthreebars.com',
          },
        ],
        destination: 'https://www.cocktailunderground.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.onedrinkthreebars.com',
          },
        ],
        destination: 'https://www.cocktailunderground.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/crescent-9-thc-seltzer',
        destination: '/thc-drinks/reviews/crescent-9-thc-seltzer',
        permanent: true,
      },
      {
        source: '/blog/willies-remedy-review',
        destination: '/thc-drinks/reviews/willies-remedy-review',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
