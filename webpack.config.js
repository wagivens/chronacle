const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

/* 
Packages to add:
  1. storybook
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
          use: ['css-loader', 'postcss-loader'],
        }
      ]
    },

    plugins: [],
}