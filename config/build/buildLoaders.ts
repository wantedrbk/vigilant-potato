import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  
    const typescriptLoader = {
    // if I don't want to use typescript instead using javascript , then should add babel-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
  
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        }
                    ],
                    // […] your other plugins […]
                ]
            }
        }
    }
  
  
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
  
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    }
                },
            },
            "sass-loader"
        ],
    }
  
    return [
        cssLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        fileLoader
    ]
  
}