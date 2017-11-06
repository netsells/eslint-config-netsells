# Netsells Eslint Config

This repository contains the defacto-standard eslint configuration used on all Netsells projects, both internally and client.

## Usage

```bash
yarn add netsells/eslint-config-netsells eslint@^4.10.0
```

### With webpack

Add the eslint-loader to your project:

```bash
yarn add eslint-loader
```

Add the loader into your workflow. The following example will force the linter to be ran before other loaders such as babel compilation. This means we lint the raw ES6 code rather than the transpiled ES5 output:

```js
{
    module: {
        rules: [
            {
                test:    /.(vue|js)$/,
                loader:  'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
            },
        ],
    },
},
```

## Rules

TODO: Document rules with code examples - possibly some kind of gh-pages document approach to be kept in sync with rule changes

## Contributing

If you disagree with any rules in this linter, or feel additional rules should be added, please open an issue on this project to initiate an open dialogue with all team members. Please bear in mind this is a public repository.

