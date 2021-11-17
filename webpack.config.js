const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    
    entry: {
        main: './src/index.js',
    }, 
    
    output: {
		  filename: '[name].js',
		  path: path.resolve(__dirname, 'dist/')
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        }
      ]
    },

    plugins: [new MiniCssExtractPlugin({
      filename: '[name].css',
    })],
}