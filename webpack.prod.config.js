const webpack                = require('webpack');
const merge                  = require('webpack-merge');
const baseConfig             = require('./webpack.base.config');
const UglifyJsPlugin         = require('uglifyjs-webpack-plugin');
const WP_PORT                = process.env.NODE_ENV_WEBPACK_PORT || '8080';
const WP_DEVICE_TESTING_HOST = '0.0.0.0';

module.exports = merge(baseConfig, {
  output: {
    path: __dirname,
    filename: './build/[name].bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: false
    })
  ]
});
