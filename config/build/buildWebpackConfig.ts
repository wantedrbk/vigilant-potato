import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  
  const {paths, mode} = options;
  
  return {
    mode: mode,
    entry: paths.entry,
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins:  buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  }
  
}