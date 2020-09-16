const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "http://localhost:3002/",
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
      name: "moneyWidget",
      filename: "moneyWidget.js",
      exposes: {
        "./Widget": "./src/Widget"
      },
      remotes: {
        "axeptiaWorkspace": "axeptiaWorkspace@http://localhost:3004/axeptiaWorkspace.js"
      },
      shared: {
        moment: "^2.24.0",
        react: {
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          shareScope: "default", // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        "react-dom": {
          singleton: true, // only a single version of the shared module is allowed
          shareScope: "legacy",
        },
        "lodash": {
          //singleton: true, // only a single version of the shared module is allowed
          import: "lodash",
          requiredVersion: "4.17.20",
          strictVersion: false
        },
        "@material-ui/core": {
          singleton: true
        },
        "@material-ui/icons": {
          singleton: true
        }
        //[`lodash-${require("lodash").VERSION}`]: "lodash",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
