import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  
  const {paths, mode, isDev} = options;
  
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
      rules: buildLoaders(options)
    },
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
  
}