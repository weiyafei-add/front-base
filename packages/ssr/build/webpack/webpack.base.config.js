const path = require("path");

/**@type {import('webpack').Configuration} */
module.exports = {
  output: {
    path: path.resolve(process.cwd(), "./dist"),
    filename: "js/[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
};
