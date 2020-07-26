let HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'webpack',
    template: 'src/assets/index.html'
    })
  ]
};

