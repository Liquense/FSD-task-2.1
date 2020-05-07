const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const paths = {
  source: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist'),
};

// Отдельные странички
const mainPages = ['index'].map((name) => new HtmlWebpackPlugin({
  template: `./src/${name}.pug`,
  filename: `${name}.html`,
  chunks: [`${name}`, 'vendors'],
}));
const sitePages = [
  'ui-kit', 'landing-page', 'registration-login', 'room-details', 'search-room'].map((name) => new HtmlWebpackPlugin({
  template: `./src/site-pages/${name}/${name}.pug`,
  filename: `${name}.html`,
  chunks: [`${name}`, 'vendors'],
}));

module.exports = {
  node: {
    fs: 'empty',
  },
  // названия чанков должны совпадать с названиями страниц для привязки
  entry: {
    index: `${paths.source}/index.js`,
    'ui-kit': `${paths.source}/site-pages/ui-kit/ui-kit.js`,
    'landing-page': `${paths.source}/site-pages/landing-page/landing-page.js`,
    'registration-login': `${paths.source}/site-pages/registration-login/registration-login.js`,
    'room-details': `${paths.source}/site-pages/room-details/room-details.js`,
    'search-room': `${paths.source}/site-pages/search-room/search-room.js`,
  },
  output: {
    path: paths.build,
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
      ignoreOrder: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ].concat(mainPages, sitePages),
  optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 1,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                `${paths.source}/common/mixins.scss`,
                `${paths.source}/common/variables.scss`,
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: [
          path.resolve(paths.source, 'assets/images'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
              publicPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(otf|ttf|svg|woff|woff2|eot)$/,
        exclude: [
          path.resolve(paths.source, 'assets/images'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
              publicPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
};
