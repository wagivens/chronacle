const presetEnv = require('postcss-preset-env');
const nano = require('cssnano');

module.exports = {
    plugins: [
        presetEnv({stage: 1}),
        nano
    ]
  }