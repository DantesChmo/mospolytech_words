const path = require('path');

const isomorphicPath = path.resolve(__dirname, './src/lib/isomorphic');
const clientPath = path.resolve(__dirname, './src/static/client');

module.exports = {
  context: path.resolve(__dirname, './'),
  mode: 'development',
  entry: './src/static/common/common_client.ts',
  output: {
    path: path.resolve(__dirname, 'out/static/generated'),
  },
  module: {
    rules: [
      {
        test: /_?client\.ts$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [isomorphicPath, clientPath],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
