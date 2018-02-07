const _THROW = require('../modules/throwables');

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

        // Requires spacing before and after arrow functions arrow
        'arrow-spacing': [_THROW.WARNING, {
            before: true,
            after: true,
        }],

        // Discourage using 'var' for creating variables - require using let/const instead
        'no-var': _THROW.ERROR,
    },
}
