import path from 'path'
// import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  target: 'node',
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  // plugins: [new CleanWebpackPlugin()],
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
