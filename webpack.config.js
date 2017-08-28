var path = require("path");

module.exports = {
  entry: ["./app.js"],

  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "app.bundle.js"
  },

  devtool: "source-map"
};
