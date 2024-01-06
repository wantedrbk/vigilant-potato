import MiniCssExtractPlugin = require("mini-css-extract-plugin");

export function buildCssLoader(isDev: boolean) {
    return {
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
}