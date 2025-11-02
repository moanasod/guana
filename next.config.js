/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to username.github.io/guana, uncomment these lines:
  basePath: '/guana',
  assetPrefix: '/guana',
}

module.exports = nextConfig
