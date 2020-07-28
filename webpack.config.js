const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    publicPath: '/dist/',
    port: 3000,
  },
  mode: "development",
  module: {
    rules: [...base.module.rules],
  },
};
