const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: "production",
  plugins: [
    new Dotenv({
      path: path.join(__dirname, `../.env.production`),
    }),
  ],
};

module.exports = merge(common, prodConfig);
