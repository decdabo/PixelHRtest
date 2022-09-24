const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devEnviroment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devEnviroment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    })
  ],
  devtool: 'source-map'
}