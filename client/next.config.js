/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir : true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  basePath: "",
};

module.exports = nextConfig;
