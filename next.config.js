/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  basePath: '/guana',
  assetPrefix: '/guana',
}

module.exports = nextConfig
