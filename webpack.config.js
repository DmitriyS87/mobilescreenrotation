const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: false,
    port: 1337
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/'),
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './postcss.config.js' }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: [`.jsx`, `.js`, `.json`]
  }
};
