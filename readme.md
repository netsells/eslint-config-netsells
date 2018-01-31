# Netsells Eslint Config

This repository contains the defacto-standard eslint configuration used on all Netsells projects, both internally and client.

## Usage

Add the config to your project dependencies:

```bash
yarn add netsells/eslint-config-netsells eslint@^4.10.0
```

Extend the config in your project. For example, a `.eslintrc` file in your project root:

```json
{
  "extends": "netsells"
}
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

### Vue

#### this-in-template

`@throws Error`

Disallow referencing `this` within a template.

##### ❌ Example of incorrect code for this rule:

```vue
<template>
    <div>{{ this.foo }}</div>
</template>
```

##### ✅ Example of correct code for this rule:

```vue
<template>
    <div>{{ foo }}</div>
</template>
```

#### order-in-components

`@throws Error`

Enforce a rational order of Vue component data.

##### ✅ Example of correct code for this rule:

```js
export default {
    // Options / Misc
    'name',
    'delimiters',
    'functional',
    'model',

    // Options / Assets
    'components',
    'directives',
    'filters',

    // Options / Composition
    'parent',
    'mixins',
    'extends',
    'provide',
    'inject',

    // Context
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
};
```

#### html-indent

`@throws Error`

Enforce a consistent continuous indent of 4 spaces for both tags and tag attributes.

##### ❌ Example of incorrect code for this rule:

```vue
<template>
    <div>
        <my-component
          :foo="bar"
        :abc="xyz"
    </my-component>
</div>
</template>
```

##### ✅ Example of correct code for this rule:

```vue
<template>
    <div>
        <my-component
            :foo="bar"
            :abc="xyz"
        </my-component>
    </div>
</template>
```

#### attribute-hyphenation

`@throws Error`

Force attributes to be hyphenated rather than camelCase.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component :customAttribute="true"></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component :custom-attribute="true"></my-component>
```

#### no-dupe-keys

`@throws Error`

Error on duplicate keys to avoid conflicting and overwriting of values.

##### ❌ Example of incorrect code for this rule:

```js
export default {
    props: {
        foo: String,
    },

    computed: {
        foo: {
            get () {}
        },
    },

    data: {
        foo: null,
    },

    methods: {
        foo () {},
    },
}
```

#### v-on-style

`@throws Error`

Force the shorthand syntax for event binding.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component v-on:change="updateValue"></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component @change="updateValue"></my-component>
```

#### v-bind-style

`@throws Error`

Force the shorthand syntax for the v-bind directive.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component v-bind:foo="bar"></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component :foo="bar"></my-component>
```

#### no-multi-spaces

`@throws Error`

Remove multiple spaces in a row between attributes which are not used for indentation.

##### ❌ Example of incorrect code for this rule:

```vue
<div     class="foo"
      :style="bar"         />
```

##### ✅ Example of correct code for this rule:

```vue
<div
    class="foo"
    :style="bar"
/>
```

#### name-property-casing

`@throws Error`

Allow only kebab-case (hyphenated) component names.

##### ❌ Example of incorrect code for this rule:

```js
export default {
    name: 'MyComponent',
}
```

##### ✅ Example of correct code for this rule:

```js
export default {
    name: 'my-component',
}
```

#### mustache-interpolation-spacing

`@throws Error`

Enforce a single space around values in mustache echo statements.

##### ❌ Example of incorrect code for this rule:

```html
<div>{{foo}}</div>
<div>{{    foo    }}</div>
```

##### ✅ Example of correct code for this rule:

```html
<div>{{ foo }}</div>
```

#### html-quotes

`@throws Error`

Enforce a double quotes on tag attributes.

##### ❌ Example of incorrect code for this rule:

```html
<div class='foo'></div>
<div class=foo></div>
```

##### ✅ Example of correct code for this rule:

```html
<div class="foo"></div>
```

#### max-attributes-per-line

`@throws Error`

Limit the max number of attributes per line. Single line tags can have a maximum of 3 attributes per line. After which each attribute should be broken down onto individual lines.

##### ❌ Example of incorrect code for this rule:

```html
<my-component foo="bar" baz="qux" abc="123" xyz="321"></my-component>

<my-component
    foo="bar" baz="qux"
><my-component>
```

##### ✅ Example of correct code for this rule:

```html
<my-component foo="bar" baz="qux" abc="123"></my-component>

<my-component
    foo="bar"
    baz="qux"
    abc="123"
    xyz="321"
></my-component>
```

#### require-default-prop

`@throws Warning`

Encourage providing default values for props.

##### ❌ Example of incorrect code for this rule:

```js
props: {
    a: Number,
    b: [Number, String],
    c: {
        type: Number,
    },
    d: {
        type: Number,
        required: false,
    },
}
```

##### ✅ Example of correct code for this rule:

```js
props: {
    a: {
        type: Number,
        required: true,
    },
    b: {
        type: Number,
        default: 0,
    },
    c: {
        type: Number,
        default: 0,
        required: false,
    },
}
```

#### require-prop-types

`@throws Warning`

Encourage long-form prop definitions with at minimum a declared data type.

##### ❌ Example of incorrect code for this rule:

```js
props: ['status'],
```

##### ✅ Example of correct code for this rule:

```js
props: {
    status: String,
}

props: {
    status: {
        type: String,
    },
}
```

#### no-side-effects-in-computed-properties

`@throws Warning`

It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand. Discourage computed properties from mutating state.

##### ❌ Example of incorrect code for this rule:

```js
computed: {
    fullName () {
        this.firstName = 'lorem'; // <- side effect
        return `${this.firstName} ${this.lastName}`;
    },

    reversedArray () {
        return this.array.reverse(); // <- side effect
    },
}
```

##### ✅ Example of correct code for this rule:

```js
computed: {
    fullName () {
        return `${this.firstName} ${this.lastName}`;
    },

    reversedArray () {
        return this.array.slice(0).reverse();
    },
}
```

#### no-duplicate-attributes

`@throws Error`

When duplicate attributes exist, only the last one is used. Disallow duplicates for attributes other than special bindings such as class and style.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component
    :foo="bar"
    foo="xyz"
></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component
    class="bar"
    :class="{ foo: true }"
    abc="xyz"
></my-component>
```

#### return-in-computed-property

`@throws Error`

Make sure computed properties return a value.

##### ❌ Example of incorrect code for this rule:

```js
computed: {
    foo () {

    },
}
```

##### ✅ Example of correct code for this rule:

```js
computed: {
    foo () {
        return 'bar';
    },
}
```

#### no-unused-vars

`@throws Error`

Make sure scope variables are used.

##### ❌ Example of incorrect code for this rule:

```vue
<template>
    <ol v-for="i in 5"><!-- "i" is defined but never used. -->
        <li>item</li>
    </ol>
</template>
```

##### ✅ Example of correct code for this rule:

```vue
<template>
    <ol v-for="i in 5">
        <li>{{ i }}</li><!-- "i" is defined and used. -->
    </ol>
</template>
```

#### no-shared-component-data

`@throws Error`

Component data must be returned as a new instance via a function rather than a plain object.

##### ❌ Example of incorrect code for this rule:

```js
export default {
    data: {
        foo: 'bar',
    },
}
```

##### ✅ Example of correct code for this rule:

```js
export default {
    data () {
        return {
            foo: 'bar',
        }
    },
}
```

## Contributing

If you disagree with any rules in this linter, or feel additional rules should be added, please open an issue on this project to initiate an open dialogue with all team members. Please bear in mind this is a public repository.

