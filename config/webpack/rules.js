const path = require('path');
// This file tells webpack how to load each file type
module.exports = [
  {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  },
  {
    test: /\.jsx?$/,
    include: [
      path.resolve('./frontend/js'),
    ],
    exclude: /(node_modules|bower_components|public\/)/,
    use: 'babel-loader',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/png',
  },
  {
    test: /\.ico/,
    exclude: /(node_modules|bower_components)/,
    use: 'file-loader?name=[name].[ext]',
  },
];
