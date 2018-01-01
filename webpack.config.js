const webpack                = require('webpack');
const path                   = require('path');
const ExtractTextPlugin      = require('extract-text-webpack-plugin');
const WP_PORT                = process.env.NODE_ENV_WEBPACK_PORT || '8080';
const WP_DEVICE_TESTING_HOST = '0.0.0.0';

module.exports = {
  devtool: 'inline-source-map', // refer: https://webpack.js.org/configuration/devtool/
  entry: {
    app: ['babel-polyfill', './app.js']
  },
  output: {
    path: __dirname,
    filename: './build/[name].bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  /**
   * Allows testing on devices using machine IP
   * Allows to use hostnames other than localhost. Works on devices with SquidMan.
   */
  devServer: {
    hot: true,
    inline: true,
    host: WP_DEVICE_TESTING_HOST,
    port: WP_PORT,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'sasslint-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
        "API_HOSTNAME": JSON.stringify("http://local.dev.com:3000")
      }
    })
  ]
}
