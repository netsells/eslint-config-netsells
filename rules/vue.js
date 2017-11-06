const _THROW = require('../modules/throwables');

module.exports = {
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        // Disallow using "this" in template form
        'vue/this-in-template': [_THROW.ERROR, 'never'],
        // Enforce order in Vue component data
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
            // Enforce 4 space continuous indentation
            'vue/html-indent': [_THROW.ERROR, 4, {
                'attribute': 1,
                'closeBracket': 0,
            }],
            // Enforce hyphentated attributes
            'vue/attribute-hyphenation': [_THROW.ERROR, 'always'],
            // Disallow duplicate key names to avoid overwriting
            'vue/no-dupe-keys': [_THROW.ERROR, {
                'groups': [],
            }],
            // Force attributes to be hyphenated rather than camelCase
            'vue/attribute-hyphenation': [_THROW.ERROR, 'always'],
            // Enforce the shorthand v-on: syntax (@)
            'vue/v-on-style': [_THROW.ERROR, 'shorthand'],
            // Enforce the shorthand v-bind: syntax (:)
            'vue/v-bind-style': [_THROW.ERROR, 'shorthand'],
            // Remove multiple spaces in a row between attributes witch are not used for indentation
            'vue/no-multi-spaces': [_THROW.ERROR, 'shorthand'],
            // Force kebabe-case component names
            'vue/name-property-casing': [_THROW.ERROR, 'kebab-case'],
            // Expect one space between expression and curly brackets.
            'vue/mustache-interpolation-spacing': [_THROW.ERROR, 'always'],
            // Force double quote style in html syntax
            'vue/html-quotes': [_THROW.ERROR, 'double'],
            // Limits the maximum number of attributes/properties per line to improve readability.
            'vue/max-attributes-per-line': [_THROW.ERROR, {
                singleline: 3,
                multiline: 1,
            }],
            // This rule requires default value to be set for each props that are not marked as required.
            'vue/require-default-prop': [_THROW.WARNING, true],
            // In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).
            'vue/require-prop-types': [_THROW.WARNING, true],
            // It is considered a very bad practice to introduce side effects inside computed properties. It makes the code not predictable and hard to understand.
            'vue/no-side-effects-in-computed-properties': [_THROW.WARNING, true],
            // When duplicate arguments exist, only the last one is valid
            'vue/no-duplicate-attributes': [_THROW.ERROR],
            'vue/return-in-computed-property': [_THROW.ERROR, {
                'treatUndefinedAsUnspecified': true,
            }],
        }],
    },
}