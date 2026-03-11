/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 仅在客户端环境排除 Node.js 内置模块
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        module: false,
        perf_hooks: false,
      };
    }
    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
