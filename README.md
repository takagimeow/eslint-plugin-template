# eslint-plugin-template

ESLint プラグインを実装するために必要な足場を提供するためのテンプレートプロジェクト

## インストール

まず最初に、[ESLint](https://eslint.org/)をインストールする必要があります：

```sh
npm i eslint --save-dev
```

次に、`eslint-plugin-template`をインストールします：

```sh
npm install eslint-plugin-template --save-dev
```

## 使用方法

`.eslintrc`設定ファイルのプラグインセクションに`template`を追加します。`eslint-plugin-`プレフィックスは省略できます：

```json
{
  "plugins": ["template"]
}
```

次に、ルールセクションで使用したいルールを設定します。

```json
{
  "rules": {
    "template/rule-name": 2
  }
}
```

## ルール

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->
