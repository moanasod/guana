/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
  // For custom domain (guana.info), serve from root - no basePath needed
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
