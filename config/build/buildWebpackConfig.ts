import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  
  const {paths, mode} = options;
  
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins:  buildPlugins(options),
  }
}