/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  reactStrictMode: true, // uncomment for node testing locally
}

module.exports = {
  nextConfig,
  images: {
    unoptimized: true,
    assetPrefix: "./",
    trailingSlash: true,
    reactStrictMode: true,
  },
}