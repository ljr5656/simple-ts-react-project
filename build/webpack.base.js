const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
  entry: path.resolve(__dirname, '../src/index.tsx'), // 入口文件
  output: {
    filename: 'bundle.js', // 出口文件
    path: path.resolve(__dirname, '../dist'), // 出口路径
    clean: true, // 每次打包之前清空dist目录m
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset', // 在asset/inline和asset/resource中切换
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024,
          },
        },
        generator: {
          filename: 'images/[contenthash][ext]', // 打包后资源的文件夹 [contenthash]表示文件名 [ext]表示扩展名
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // html模板
      filename: 'index.html', // 打包后文件名称
      inject: 'body', // 将打包后的js添加到body中，默认为head中
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css',
    }),
  ],
};

module.exports = baseConfig;
