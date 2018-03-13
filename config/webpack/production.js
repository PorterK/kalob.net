// This webpack config applies to production code
const webpack = require('webpack');
const path = require('path');
const loaders = require('./loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './frontend/js/main.js' },
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
      img: path.join(process.cwd(), 'frontend', 'img'),
    },
  },
  module: { loaders },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      files: {
        js: ['[name].js'],
      },
    }),
  ],
};
