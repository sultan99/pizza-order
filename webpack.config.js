const path = require('path')

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: rootPath(`./dist`),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
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
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@': rootPath(`./src`),
    }
  },
  devServer: {
    contentBase: rootPath(`./dist`),
  }
}