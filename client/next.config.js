/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./src/styles/_variables.scss";`,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});


module.exports = withPWA(nextConfig);
