const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isomorphicPath = path.resolve(__dirname, './src/lib/isomorphic');
const clientPath = path.resolve(__dirname, './src/static/client');
const viewsPath = path.resolve(__dirname, './src/static/views');

const resourcesSrcPath = path.resolve(__dirname, './src/static/resources');
const resourcesOutPath = path.resolve(__dirname, './out/static/resources')

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
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: resourcesSrcPath, to: resourcesOutPath
      }]
    })
  ],
  resolve: {
    extensions: ['.ts', '.css'],
  },
};
