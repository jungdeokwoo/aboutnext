/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
      {
        protocol: "https",
        hostname: "mynextimg.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      "@aws-sdk/signature-v4-multi-region":
        "commonjs @aws-sdk/signature-v4-multi-region",
    });

    return config;
  },
};

module.exports = nextConfig;
