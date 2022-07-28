const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
