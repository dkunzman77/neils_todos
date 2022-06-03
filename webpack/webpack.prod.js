// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require('webpack-merge')
const CommonConfig = require('./webpack.common')

/**
 * @type {import('webpack-dev-server').WebpackConfiguration}
 */
const ProdConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
}

module.exports = merge(CommonConfig, ProdConfig)
