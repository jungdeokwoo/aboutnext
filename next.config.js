/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["robohash.org"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
