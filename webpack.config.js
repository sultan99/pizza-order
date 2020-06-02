const R = require(`ramda`)
const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin
const CopyPlugin = require(`copy-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const SpritePlugin = require(`svg-sprite-loader/plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

/** @type {(dir: string) => string} */
const rootPath = dir => path.resolve(__dirname, dir)

/** @type {WebpackConfig} */
const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: `file-loader`,
          options: {
            name: `[hash].[ext]`,
          }
        }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: `svg-sprite-loader`,
            options: {extract: true}
          },
          `svgo-loader`,
        ]
      },
    ]
  },
  output: {
    filename: `[hash].bundle.js`,
    path: rootPath(`./public`)
  },
  resolve: {
    extensions: [`.js`],
    alias: {
      '@': rootPath(`./src`),
    }
  },
  plugins: [
    new SpritePlugin(),
    new HtmlWebPackPlugin({
      template: rootPath(`./src/index.html`)
    }),
  ],
}

/** @type {WebpackConfig} */
const develop = {
  mode: `development`,
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: rootPath(`./public`)}
      ],
    }),
  ],
}

/** @type {WebpackConfig} */
const production = {
  mode: `production`,
  plugins: [
    new DynamicCdnWebpackPlugin({
      env: `production`,
      resolver: cdnResolvers
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: `static`,
      reportFilename: rootPath(`bundle-report.html`)
    }),
  ],
}

/** @type {(common: WebpackConfig) => WebpackConfig} */
const createConfig = R.ifElse(
  R.always(process.env.NODE_ENV === `production`),
  R.mergeDeepWith(R.concat, production),
  R.mergeDeepWith(R.concat, develop)
)

module.exports = createConfig(common)

/**
 * @typedef {import('webpack').Configuration} Configuration
 * @typedef {import('webpack-dev-server').Configuration} DevServerConfig
 * @typedef {Configuration | DevServerConfig} WebpackConfig
 */