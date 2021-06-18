const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isomorphicPath = path.resolve(__dirname, './src/lib/isomorphic');
const clientPath = path.resolve(__dirname, './src/static/client');
const viewsPath = path.resolve(__dirname, './src/static/views');

const entriesPath = path.resolve(__dirname, './src/static/entries');

const entries = fs.readdirSync(entriesPath).reduce((result, entryName) => {
  result[entryName] = path.resolve(entriesPath, entryName, `${entryName}.ts`);
  return result;
}, {});

module.exports = {
  context: path.resolve(__dirname, './'),
  mode: 'production',
  devtool: false,
  entry: entries,
  output: {
    path: path.resolve(__dirname, './out/static/generated'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true
      })
    ],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.css'],
  },
};
