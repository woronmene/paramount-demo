/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://d3t7szus8c85is.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3t7szus8c85is.cloudfront.net",
        port: "",
        // pathname: "",
      },
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
