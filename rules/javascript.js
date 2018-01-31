const _THROW = require('../modules/throwables');

module.exports = {
    rules: {
        // Requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }
        'comma-dangle': [_THROW.ERROR, 'only-multiline'],
    },
}
