const webpack                = require('webpack');
const merge                  = require('webpack-merge');
const baseConfig             = require('./webpack.base.config');
const WP_PORT                = process.env.NODE_ENV_WEBPACK_PORT || '8080';
const WP_DEVICE_TESTING_HOST = '0.0.0.0';

module.exports = merge(baseConfig, {
  output: {
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
      'process.env.API_HOSTNAME': JSON.stringify('http://localhost:3000')
    })
  ]
});
