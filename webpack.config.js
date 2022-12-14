const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");
// const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

// import webpackMerge from 'webpack-merge';
// import singleSpaDefaults from 'webpack-config-single-spa-react-ts';
// import path from 'path';

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ripley",
    projectName: "nav-mf",
    webpackConfigEnv,
    argv,
  });

  const serverConfig = singleSpaDefaults({
    orgName:"ripley",
    projectName: "nav-mf",
    webpackConfigEnv,
    argv
  });

  defaultConfig.plugins = defaultConfig.plugins.filter(
    p => p.constructor.name !== "CleanWebpackPlugin"
  );
  serverConfig.plugins = serverConfig.plugins.filter(
    p => p.constructor.name !== "CleanWebpackPlugin"
  );

  return [
    webpackMerge.smart(defaultConfig, {}),
    webpackMerge.smart(serverConfig, {
      target:"node",
      mode: "development",
      entry: path.resolve(process.cwd(), "src/node-entry.tsx"),
      output: {
        library: "mf",
        libraryTarget: "var",
        filename: "server.mjs",
        chunkFormat: "module",
      },
      externals: defaultConfig.externals.concat(/react-dom\/.+/),
      externalsType: "amd",
      experiments: {
        outputModule: true,
      }
      // plugins: [
      //   new EsmWebpackPlugin({
      //     moduleExternals: true,
      //   }),
      // ],
    })
  ]
};
