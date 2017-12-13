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
    alias: { js: path.join(process.cwd(), 'frontend', 'js') },
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
    new webpack.ProvidePlugin({
      _: 'lodash',
      axios: 'axios',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      env: {
        AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
        AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
        API_URL: JSON.stringify(process.env.API_URL),
        URL: JSON.stringify(process.env.URL),
      },
    }),
  ],
};
