# jobTitle
```php
jobTitle() :string
```
:jp: :us:  
職名を返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->jobTitle()
=> "alias"
>>> Faker\Factory::create()->jobTitle()
=> "Numerical Tool Programmer OR Process Control Programmer"
```

## 注意
::: warning 注意:
日本語ロケールでは`word()`により生成されるランダムな単語が返されるだけです。
:::

## 参考
* [word](../lorem/word.md)
