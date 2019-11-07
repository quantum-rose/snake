const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhitespace: false
  },
  favicon: './src/favicon.ico'
})

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg|jpg|png|gif|bmp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 0,
            name: 'assets/[name].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    compress: true
  }
}
