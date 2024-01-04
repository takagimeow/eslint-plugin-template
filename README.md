# eslint-plugin-template

ESLintプラグインを実装するために必要な足場を提供するためのテンプレートプロジェクトです

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-template`:

```sh
npm install eslint-plugin-template --save-dev
```

## Usage

Add `template` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "template"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "template/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


