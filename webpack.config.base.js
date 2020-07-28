let HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const styleLoader = () => {
  return {
    loader: "style-loader",
    options: {
      injectType: "singletonStyleTag",
    },
  }
}

const scssLoader = () => {
  return {
    loader: "sass-loader",
    options: {
      // Prefer `dart-sass`
      implementation: require("dart-sass"),
      sassOptions: {
        fiber: require("fibers"),
      },
    },
  }
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
    publicPath: __dirname + '/dist/',
    chunkFilename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // mode: 'development'
        // `yarn start`
        // css-loader
        use: [
          // Creates `style` nodes from JS strings
          styleLoader(),
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          styleLoader(),
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Scss to CSS
          scssLoader(),
        ],
      },
      // rules[1]
      {
        test: /\.less$/i,
        loader: [styleLoader(), "css-loader", "postcss-loader", "less-loader"], // compiles Less to CSS
      },
      {
        test: /\.styl$/i,
        loader: [styleLoader(), "css-loader", "postcss-loader", "stylus-loader"],
      },
      {
        test: /\.(png|svg|je?pg|gif)$/i,
        use: [
          'file-loader',
        ],
      }
    ],
  },
};
