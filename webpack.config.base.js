let HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const styleLoader = () => {
  return {
    loader: "style-loader",
    options: {
      injectType: "singletonStyleTag",
    },
  };
};

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
  };
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
    // publicPath: "./dist",
    // chunkFilename: "[name].js",
  },
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
          "happypack?id=css",
          "postcss-loader",
        ],
        exclude: /node_modules/,
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
        loader: [
          styleLoader(),
          "css-loader",
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|svg|je?pg|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "src/assets/index.html",
    }),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: "css",
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
      loaders: ["css-loader?cacheDirectory"],
    }),
  ],
};
