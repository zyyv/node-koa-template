const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  target: 'node',
  entry: './src/app.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'app.js'
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
