import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        dir: './dist/',
        format: 'esm'
    },
    plugins: [
        resolve(),
        terser(),
    ],
  };