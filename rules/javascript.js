const _THROW = require('../modules/throwables');

module.exports = {
    extends: 'eslint:recommended',
    rules: {
        // Disallow the use of the eval() function
        'no-eval': [_THROW.ERROR],
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': [_THROW.WARNING],
        // Disallow empty block statements
        'no-empty': _THROW.WARNING,
        // Requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }
        'comma-dangle': [_THROW.ERROR, 'only-multiline'],
        // Require JSDoc on all functions and classes
        'require-jsdoc-except/require-jsdoc': [_THROW.WARNING, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
                FunctionExpression: true,
            },
            // Ignore all the standard VueJS lifecycle methods
            ignore: [
                'beforeCreate',
                'created',
                'beforeMount',
                'mounted',
                'beforeDestroy',
                'destroyed',
                'beforeUpdate',
                'updated',
                'data',
            ],
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
        // Discourage using confusing and sometimes unreadable JS tricks to do simple functions.
        'no-implicit-coercion': [_THROW.WARNING, {
            boolean: true,
            number: true,
            string: true,
        // Disallow else blocks after return statements in if statements
        'no-else-return': [_THROW.WARNING, {
            allowElseIf: false,
        }],
        // Discourage placing the dot on the property rather than the property
        'dot-location': [_THROW.WARNING, 'property'],
        // Forces formatting of curly brace conventions
        'curly': _THROW.WARNING,
        // Encourage using template literals instead of '+' operator on strings
        'prefer-template': _THROW.WARNING,
    },
}
