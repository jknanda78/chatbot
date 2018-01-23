const webpack                = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', './app.js']
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
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ])
  ]
}
