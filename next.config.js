/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
  // Only use basePath in production (for GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/guana" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/guana" : "",
};

module.exports = nextConfig;
