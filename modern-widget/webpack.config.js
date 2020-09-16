const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3005,
  },
  output: {
    publicPath: "http://localhost:3005/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "modernWidget",
      filename: "modernWidget.js",
      exposes: {
        "./Widget": "./src/Widget",
        "./React": require.resolve("react"),
        "./ReactDOM": require.resolve("react-dom"),
      },
      // adds react as shared module
      // version is inferred from package.json
      // there is no version check for the required version
      // so it will always use the higher version found
      shared: {
        react: {
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          shareScope: "modernWidget", // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
          //strictVersion: true
        },
        "react-dom": {
          singleton: true, // only a single version of the shared module is allowed
        },
        "@material-ui/core": {
          singleton: true,
          shareScope: "modernWidget",
        },
        "@material-ui/icons": {
          singleton: true,
          shareScope: "modernWidget",
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
