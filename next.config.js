/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const isProd = process.env.NODE_ENV === 'production';

//TODO: After make a better implementation of PWA
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
