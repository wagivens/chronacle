const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    
    entry: {
        main: './src/index.ts',
    }, 
    
    output: {
		  filename: '[name].js',
		  path: path.resolve(__dirname, 'dist')
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader({
            filename: 'main_styles.css'
          }), 'postcss-loader', 'css-loader'],
        }
      ]
    }
}