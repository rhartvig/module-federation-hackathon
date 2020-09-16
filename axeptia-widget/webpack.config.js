const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
  },
  output: {
    publicPath: "http://localhost:3003/",
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
      name: "axeptiaWidget",
      filename: "axeptiaWidget.js",
      exposes: {
        "./Widget": "./src/Widget",
      },
      remotes: {
        "axeptiaWorkspace": "axeptiaWorkspace@http://localhost:3004/axeptiaWorkspace.js"
      },
      // adds react as shared module
      // version is inferred from package.json
      // there is no version check for the required version
      // so it will always use the higher version found
      shared: {
        react: {
          import: "react", // the "react" package will be used a provided and fallback module
          shareKey: "react", // under this name the shared module will be placed in the share scope
          singleton: true, // only a single version of the shared module is allowed
          //strictVersion: true
        },
        "react-dom": {
          singleton: true, // only a single version of the shared module is allowed
        },
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
