const webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "freezeframe-lite.min.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
