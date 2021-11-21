const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/* 
Packages to add:
  1. storybook
  2. pwa-asset-generator
  3. jest (testing)
  4. minify-template-literal-loader
  5. postcss-bem-linter (for SUIT naming convention linting)
*/

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