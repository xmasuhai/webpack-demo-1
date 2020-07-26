const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        // mode: 'development'
        // `yarn start`
        // css-loader
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            }
          },
          'css-loader'],
      }
    ]
  }
};

