const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.ts',
    }, 
    output: {
		filename: '[name].[contentHash].js',
		path: path.resolve(__dirname, 'dist')
    }
}