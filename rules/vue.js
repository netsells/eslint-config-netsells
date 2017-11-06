const _THROW = require('../modules/throwables');

module.exports = {
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        'vue/this-in-template': [_THROW.ERROR, 'never'],
        'vue/order-in-components': [_THROW.ERROR, {
            order: [
                // Options / Misc
                ['name', 'delimiters', 'functional', 'model'],
                // Options / Assets
                ['components', 'directives', 'filters'],
                // Options / Composition
                ['parent', 'mixins', 'extends', 'provide', 'inject'],
                'el',
                'template',
                'props',
                'propsData',
                'data',
                'computed',
                'watch',
                'LIFECYCLE_HOOKS',
                'methods',
                'render',
                'renderError',
            ],
        }],
    },
}