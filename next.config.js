/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'scheduler/tracing': 'scheduler/tracing-profiling',
      });
    }
    return config;
  }
};

module.exports = nextConfig;