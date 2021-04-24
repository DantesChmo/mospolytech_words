// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: './src/static/common/common_client.ts',
  output: {
    path: path.resolve(__dirname, 'out'),
  },
  plugins: [
    // Add your plugins here
    // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /_?client\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
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
