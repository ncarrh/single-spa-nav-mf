const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ripleyx",
    projectName: "nav-mf",
    webpackConfigEnv,
    argv,
  });

  const serverConfig = singleSpaDefaults({
    orgName:"ripleyx",
    projectName: "nav-mf",
    webpackConfigEnv,
    argv
  });

  return webpackMerge.merge(serverConfig, {
      devServer: {
        port: 8082,
      },
      target:"node",
      mode: "development",
      entry: path.resolve(process.cwd(), "src/node-entry.tsx"),
      output: {
        library: "mf",
        libraryTarget: "var",
        filename: "server.mjs",
        // publicPath: "@ripleyx/nav-mf"
      },
      externals: defaultConfig.externals.concat(/react-dom\/.+/),
    })
  // ]
};
