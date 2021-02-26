import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  target: 'node',
  mode: 'production',
  // mode: 'development',
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
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
