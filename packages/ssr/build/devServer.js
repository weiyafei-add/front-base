const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const cluster = require("cluster");

if (cluster.isPrimary) {
  cluster.fork();
  const compiler = webpack();
  const devServer = new webpackDevServer(compiler, {});
  devServer.listen(8080, "localhost");
} else {
  console.log("I am worker");
}
