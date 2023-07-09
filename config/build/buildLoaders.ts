import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

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
  
    const cssLoader = buildCssLoader(isDev)
  
    return [
        cssLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        fileLoader
    ]
  
}