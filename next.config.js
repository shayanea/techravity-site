// next.config.js
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const webpack = require("webpack");

module.exports = withCSS(
  withSass(
    withImages({
      distDir: "../_next",
      webpack(config, options) {
        return config;
      }
    })
  )
);

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    );
    return config;
  },
  target: "serverless"
};
