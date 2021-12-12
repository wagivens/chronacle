const path = require('path');

/* 
Packages to add:
    1. storybook
    2. rollup-plugin-minify-html-literals
    3. rollup-plugin-terser
    4. postcss-bem-linter (for linting the SUIT css naming convention)
*/

export default {
    input: 'src/index.js',
    output: {
        dir: path.resolve(__dirname, '/dist'), 
        file: 'main.js',
        format: 'cjs'
    }
  };