const path = require('path');

export default {
    input: 'src/index.js',
    output: {
        dir: path.resolve(__dirname, '/dist'), 
        file: 'index.js',
        format: 'cjs'
    }
  };