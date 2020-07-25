const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'webpack',
    template: 'src/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // mode: 'development'
        // `yarn start`
        // css-loader
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

