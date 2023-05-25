import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'public', 'index.html'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths
})

export default config