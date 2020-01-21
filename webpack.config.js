const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.tsx"],
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/i,
        use: "url-loader"
      },
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "awesome-typescript-loader" }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
          collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([{ from: "./public/" }])
  ]
};
