# companySuffix
```php
companySuffix() :string
```
:jp: :us:  
会社名の接尾辞を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->companySuffix()
=> "Ltd"
>>> Faker\Factory::create()->companySuffix()
=> "Inc"
```

## 注意
::: warning 注意:
日本語ロケールではLtdのみ返します。
:::
