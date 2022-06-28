const StyleDictionary = require('style-dictionary');

module.exports = {
    source: ['src/tokens/foundations/color.tokens.json'],
    platforms: {
        scss: {
            transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
            transformGroup: 'scss',
            buildPath: 'src/scss/',
            files: [{
                destination: '_variables.scss',
                format: 'scss/variables',
                options: {
                    outputReferences: true,
                }
            }],
        }
    }
}