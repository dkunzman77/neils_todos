// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @summary This config contains shared properties that are present
 * between the development config and the production config.
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * @type {import('webpack-dev-server').WebpackConfiguration}
 */
module.exports = {
  entry: resolve(__dirname, '../src/index.tsx'),
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'icss',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'style-loader',
          },
        ],
      },
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
                mode: 'local',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: resolve(__dirname, '../public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
}
