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
        'comma-dangle': [_THROW.ERROR, 'always-multiline'],
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
        // Requires spacing before and after arrow functions arrow
        'arrow-spacing': [_THROW.WARNING, {
            before: true,
            after: true,
        }],
        // Discourage using 'var' for creating variables - require using let/const instead
        'no-var': _THROW.ERROR,
        'dot-notation': _THROW.WARNING,
        // Discourage using confusing and sometimes unreadable JS tricks to do simple functions.
        'no-implicit-coercion': [_THROW.WARNING, {
            boolean: true,
            number: true,
            string: true,
        }],
        // Throw a warning when a regular string contains a text which looks like a template literal placeholder
        'no-template-curly-in-string': _THROW.WARNING,
        // Prevents leaving unused imports & vars in code
        'no-unused-vars': _THROW.WARNING,
        // Forces equality operators to be type-safe
        'eqeqeq': _THROW.WARNING,
        // Discourage code typed like yoda would speak
        'yoda': [_THROW.ERROR, 'never', {
            exceptRange: true,
        }],
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
        // Discourage conditional assignment of variables
        'no-cond-assign': _THROW.WARNING,
    },
}
