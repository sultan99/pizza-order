const R = require(`ramda`)
const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin
const CopyPlugin = require(`copy-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const SpritePlugin = require(`svg-sprite-loader/plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.d\.ts$/,
        loader: `ts-loader`
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
    filename: `bundle.js`,
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

const develop = {
  mode: `development`,
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyPlugin([{
      from: rootPath(`./public`)
    }]),
  ],
}

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

const makeConfigs = R.mergeDeepWith(R.concat, common)

// const config = (
//   process.env.NODE_ENV === `production`
//     ? makeConfigs(production)
//     : makeConfigs(develop)
// )

// const createConfig = R.ifElse(
//   R.always(process.env.NODE_ENV === `production`),
//   R.merge(production),
//   R.merge(develop)
// )

// module.exports = createConfig(common)

const config = (
  process.env.NODE_ENV === `production`
    ? makeConfigs(production)
    : makeConfigs(develop)
)

module.exports = config