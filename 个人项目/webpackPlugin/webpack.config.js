const DemoPlugin = require("./plugins/demo-plugin");
const FindDepsPlugin = require('./plugins/find-deps-Plugin')

const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist_my/public'),
    filename: '[name].[contenthash:8].js',
    // chunkFilename: '[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: './loaders/hello-loader',
        exclude:/node_modules/,
        options: {
          author: 'hello loader',
          email: 'helloloader@qq.com'
        }
      },
      {
        test: /\.js$/,
        loader: './loaders/eslint-loader',
        exclude:/node_modules/,
        options: {
          fix: true
        }
      },
    //   {
    //     test: /\.js$/,
    //     loader: './loaders/css-loader',
    //     exclude:/node_modules/
    // }
    ]
  },
  plugins: [
    new DemoPlugin('wangleilei'), 
    new FindDepsPlugin({
      jsFilePath: path.resolve(__dirname, 'src/test.js'),
      addText: true,
      outPath: './dist_my/public/test.txt'
    })
  ],
}