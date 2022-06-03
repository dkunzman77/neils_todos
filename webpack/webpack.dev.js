// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common')
const path = require('path')

/**
 * @type {import('webpack-dev-server').WebpackConfiguration}
 */
const DevConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    static: {
      directory: path.resolve(__dirname, '..', './public'),
      publicPath: '/public',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: {
      index: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin({ overlay: false })],
}

module.exports = merge(CommonConfig, DevConfig)
