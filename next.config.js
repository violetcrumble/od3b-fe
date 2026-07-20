/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    // Largest rendered image on the site is ~500 CSS px (recipe sidebar), so
    // 2x retina tops out around 1080. The defaults go to 3840, generating
    // Cloudinary derivatives nobody downloads.
    deviceSizes: [640, 750, 828, 1080, 1200],
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
