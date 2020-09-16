const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3004,
  },
  output: {
    publicPath: "http://localhost:3004/",
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
      name: "axeptiaWorkspace",
      library: { type: "var", name: "axeptiaWorkspace" },
      filename: "axeptiaWorkspace.js",
      exposes: {
        "./Workspace": "./src/Workspace",
        "./InvoiceList": "./src/InvoiceList"
      },
      // adds react as shared module
      // version is inferred from package.json
      // there is no version check for the required version
      // so it will always use the higher version found
      shared: {
        react: {
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          shareScope: "default", // share scope with this name will be used
          singleton: true // only a single version of the shared module is allowed
        },
        "react-dom": {
          singleton: true, // only a single version of the shared module is allowed
        },
        // adds moment as shared module
        // version is inferred from package.json
        // it will use the highest moment version that is >= 2.24 and < 3
        moment: "^2.24.0",
        lodash: {
          //singleton: true, // only a single version of the shared module is allowed
          import: "lodash",
          requiredVersion: "^4.10.0",
          strictVersion: false
        },
        "@material-ui/core": {
          singleton: true
        },
        "@material-ui/icons": {
          singleton: true
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
