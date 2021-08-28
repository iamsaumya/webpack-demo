const { mode } = require("webpack-nano/argv");
const {
  MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");

module.exports = {
  mode,
  plugins: [
    new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }), // create a html file and imports generated JS in it.
  ],
};