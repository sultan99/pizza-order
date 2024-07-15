const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: rootPath('./dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {name: '[name].[contenthash].[ext]'}
        }],
      },
      {
        test: /\.scss$/i,
        use: [
          '@stylin/ts-loader',
          '@stylin/msa-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: rootPath('public/css')}
          },
          'css-loader?modules=local',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg)$/i,
        use: [
          {loader: 'url-loader', options: {limit: 2000}},
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.jsx'],
    alias: {
      '@': rootPath('./src'),
    }
  },
  devServer: {
    allowedHosts: ['all'],
    static: rootPath('./dist'),
    proxy: [
      {
        changeOrigin: true,
        context: ['/api'],
        pathRewrite: {'^/api': ''},
        secure: false,
        target: 'https://core-graphql.dev.waldo.photos',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: rootPath('./src/index.html')
    }),
    new CopyPlugin({
      patterns: [
        {from: rootPath('./public')},
      ],
    }),
  ]
}
