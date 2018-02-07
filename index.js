module.exports = {
    extends: [
        './rules/javascript',
        './rules/vue',
    ].map(require.resolve),
    parserOptions: { 
        ecmaVersion: 6,
        sourceType: 'module',
    },
    env: { 
        es6: true,
    },
    plugins: [
        "require-jsdoc-except",
    ]
};
