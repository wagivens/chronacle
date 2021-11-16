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

    // 1. Use Sass command to output scss to the dist folder as regular css
      // OR
    // 2. process scss with postcss, use the css/style loaders, use miniCSSExtractPlugin
      // to take the source css and create a file in the dist folder with the final css.
      // OR
    // 3. Use the postcss-cli on the files in src/scss, then use css-loader,
      // style-loader and MiniCssExtractPlugin to give us a compiled CSS 
      // file in the dist folder

    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        }
      ]
    },

    plugins: [new MiniCssExtractPlugin({
      filename: 'styles.css',
    })],
}