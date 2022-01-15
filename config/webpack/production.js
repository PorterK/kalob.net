// This webpack config applies to production code
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const rules = require('./rules');

module.exports = {
  entry: { main: './frontend/js/main.js' },
  mode: 'production',
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), 'build'),
    filename: '[name].[contenthash].gz.js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
      img: path.join(process.cwd(), 'frontend', 'img'),
    },
  },
  module: { rules },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      files: {
        js: ['[name].js'],
      },
    }),
    new CompressionPlugin({
      filename: '/[file]',
      algorithm: 'gzip',
      test: /\.gz.js(?!.map)/,
      minRatio: 0.8,
      deleteOriginalAssets: true,
    }),
  ],
};
