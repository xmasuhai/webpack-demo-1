const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base.js");
const cssLoaderPlugin = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: "../",
  },
};

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      // ...base.module.rules,
      {
        test: /\.css$/i,
        // mode: 'production'
        // `yarn build`
        // MiniCssExtractPlugin
        use: [cssLoaderPlugin, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          cssLoaderPlugin,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Scss to CSS
          base.module.rules[1].use[3],
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // Creates `style` nodes from JS strings
          cssLoaderPlugin,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Less to CSS
          "less-loader",
        ],
      },
      {
        test: /\.styl$/i,
        loader: [cssLoaderPlugin, "css-loader","postcss-loader","stylus-loader"],
      },
    ],
  },
};
