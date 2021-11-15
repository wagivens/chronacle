const path = require('path');

module.exports = {
    mode: 'production',
    
    entry: {
        main: './src/index.ts',
    }, 
    
    output: {
		  filename: '[name].[contentHash].js',
		  path: path.resolve(__dirname, 'dist')
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['postcss-loader']
        }
      ]
    }
}