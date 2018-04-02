const path = require('path');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


//Extract all css
const extractCss = new ExtractTextPlugin({
	filename: `[name].css`,
  allChunks: true
});
const extractSass = new ExtractTextPlugin({
	filename: `[name].css`,
  allChunks: true
});




module.exports = {
  mode: 'development',
  entry: {
    bundle: "./src/index.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },

  devtool: "source-map",
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss'
    ],
    alias: {
      components: './src/components',
      pages: './src/pages',
      styles: './src/styles'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                importer: require('node-sass-import-once'),
                 importOnce: {
                   index: true,
                   css: true,
                   bower: true
                 },
                includePaths: ['node_modules']
              }
            }
          ]
      }
    ]
  },
  plugins: [
   // extractCss,
   // extractSass,
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'), // eslint-disable-line global-require
      inject: false,
      mobile: true,
      title: pkg.name,
      appMountId: 'mountNode'
    })
  ]
};
