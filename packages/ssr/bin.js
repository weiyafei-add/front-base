#!/usr/bin/env node
const arg = process.argv[2];
if (arg === "dev") {
  require("./build/devServer");
}
