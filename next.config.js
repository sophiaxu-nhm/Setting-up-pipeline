/** @type {import('next').NextConfig} */
module.exports = {
  /**
   * @param {import('webpack').Configuration} config
   */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
