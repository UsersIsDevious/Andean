const path = require('path');

module.exports = {
  target: "node",
  externals: {
    fs: "commonjs fs"
  },
  entry: require("path").resolve(__dirname, "src/index.js"),
  output: {
    path: require("path").resolve(__dirname, "dist"),
    filename: "andean.js"
  },
  module: {
    noParse: /google-protobuf\/google\/protobuf\/.*/
  }
}