const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.join(__dirname, `../.env.development`),
    }),
  ],
};

module.exports = merge(common, devConfig);
