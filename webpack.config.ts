import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import path from 'path'

const commonConfig: Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, './src/app.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'babel-loader', 'ts-loader']
      }
    ],
    noParse: /jquery|lodash/
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  stats: {
    errorDetails: true,
    modules: false
  }
}

const productionConfig: Configuration = { mode: 'production' }

const developmentConfig: Configuration = { mode: 'development' }

export default (env: string) => {
  switch (env) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}