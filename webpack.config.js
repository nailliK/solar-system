const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tiny Solar System",
      filename: "index.html",
      template: "./src/html/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
