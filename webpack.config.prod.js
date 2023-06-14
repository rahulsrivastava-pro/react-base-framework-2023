const webpack = require('webpack');
const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: './js/bundle.js',
    path: __dirname + '/public',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
        
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
