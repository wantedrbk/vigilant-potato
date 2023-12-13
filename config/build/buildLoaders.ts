import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildBabelLoader} from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  
    const typescriptLoader = {
    // if I don't want to use typescript instead using javascript , then should add babel-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
  
    const babelLoader = buildBabelLoader(options)
  
  
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
  
    const fileLoader =   {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
  
    const cssLoader = buildCssLoader(options.isDev)
  
    return [
        cssLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        fileLoader
    ]
  
}