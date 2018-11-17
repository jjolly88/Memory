const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

let config = {
  mode: 'production',
  entry: "./js/dev/main.js",
  output: {
    path: path.resolve(__dirname, "./js"),
    filename: "./bundle.js"
  }
}




module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    	 module.exports.plugins.push(
    		new webpack.optimize.UglifyJsPlugin()
  		);
  }

  return config;
};