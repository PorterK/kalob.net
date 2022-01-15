// The main config for webpack, you probably don't need to edit this.
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./rules');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: { main: './frontend/js/main.js' },
  mode: 'development',
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), 'build'),
    filename: '[name].js',
    pathinfo: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      js: path.join(process.cwd(), 'frontend', 'js'),
      img: path.join(process.cwd(), 'frontend', 'img'),
    },
  },
  optimization: {
    moduleIds: 'named',
  },
  module: { rules },
  devServer: {
    // enable HMR
    hot: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    client: {
      overlay: true,
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'frontend/index.html',
      files: {
        js: ['[name].js'],
      },
    }),
  ],
};
