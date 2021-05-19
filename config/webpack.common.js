const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.join(__dirname, '../index.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      favicon: false,
      showErrors: true,
      cache: true,
      template: path.join(__dirname, '../index.html')
    })
  ]
}
