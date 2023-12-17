/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_WC_PROJECT_ID: "a502cc611f5435a4e7d8c9cd6ecf890f",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rrinstri.sirv.com",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    (config.resolve.fallback = {
      fs: false,
    }),
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    return config;
  },
};

module.exports = nextConfig;
