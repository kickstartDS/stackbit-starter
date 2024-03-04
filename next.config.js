/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    stackbitPreview: process.env.STACKBIT_PREVIEW,
  },
  trailingSlash: true,
  reactStrictMode: true,
  output: "export",
  swcMinify: true,
  transpilePackages: [
    "@kickstartds/base",
    "@kickstartds/blog",
    "@kickstartds/core",
    "@kickstartds/form",
    "@kickstartds/ds-agency",
  ],
};

module.exports = nextConfig;
