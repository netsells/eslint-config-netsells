const _THROW = require('../modules/throwables');
const Utils = require('../modules/utils');

module.exports = {
    rules: {
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': [_THROW.WARNING],
        // Requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }
        'comma-dangle': [_THROW.ERROR, 'only-multiline'],
        // Require JSDoc on all functions and classes
        'require-jsdoc': [_THROW.WARNING, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
                FunctionExpression: true,
            },
        }],
        // Require jsdoc data to be consistently valid
        'valid-jsdoc': [_THROW.WARNING, {
            requireParamDescription: false,
            requireReturnDescription: false,
            matchDescription: ".+",
            requireReturn: false,
        }],
        // Discourage using 'var' for creating variables - require using let/const instead
        'no-var': _THROW.ERROR,
        // Disallow alert() function in production, throw a warning in development
        'no-alert': Utils.isProduction() ? _THROW.ERROR : _THROW.WARNING
    },
}
