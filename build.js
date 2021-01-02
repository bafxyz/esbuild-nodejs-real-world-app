#!/usr/bin/env node

const { build } = require("estrella");
const globby = require("globby");

globby("./src/**/*.ts").then((sourceFiles) => {
  build({
    entryPoints: sourceFiles,
    outdir: "build",
    target: "es2019",
    platform: "node",
    format: "cjs",
    tsconfig: "./tsconfig.json",
    watch: true,
    run: ["node", "build/server.js"],
  });
});