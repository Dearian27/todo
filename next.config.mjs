/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "ignore-loader",
    });
    config.module.rules.push({
      test: /\.node$/,
      loader: "file-loader",
      options: {
        name: "static/[name].[ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
