const _THROW = require('../modules/throwables');

module.exports = {
    rules: {
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
                "beforeCreate",
                "created",
                "beforeMount",
                "mounted",
                "beforeDestroy",
                "destroyed",
                "beforeUpdate",
                "updated",
            ],
        }],
        // Require jsdoc data to be consistently valid
        'valid-jsdoc': [_THROW.WARNING, {
            requireParamDescription: false,
            requireReturnDescription: false,
            matchDescription: ".+",
            requireReturn: false,
        }],
    },
}
