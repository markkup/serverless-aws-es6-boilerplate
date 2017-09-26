const path = require('path');

// eslint-disable-next-line import/no-unresolved
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [
    'aws-sdk'
  ],
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
    ],
  },
};