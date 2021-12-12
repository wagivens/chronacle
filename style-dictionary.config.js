const StyleDictionary = require('style-dictionary');

module.exports = {
    source: ['src/components/**/*.tokens.json'],
    platforms: {
        scss: {
            transforms: ["attribute/cti", "name/cti/camel", "color/hsl", "size/rem"],
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