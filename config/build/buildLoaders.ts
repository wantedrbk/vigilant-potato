import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  
  const typescriptLoader = {
    // if I don't want to use typescript instead using javascript , then should add babel-loader
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader"
    ],
  }
  
  return [
    typescriptLoader,
    cssLoader,
  ]
  
}