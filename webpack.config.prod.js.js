const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js')
module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    // ...base.module.rules,
    rules: [
      {
        test: /\.css$/i,
        // mode: 'production'
        // `yarn build`
        // MiniCssExtractPlugin
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader'
        ]
      }
    ]
  }
};

