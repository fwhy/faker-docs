# titleFemale
```php
titleFemale() :string
```
女性の敬称を生成します。  

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->titleFemale
=> "Mrs."
>>> Faker\Factory::create()->titleFemale
=> "Dr."
```

## 注意
::: warning 注意:
日本語ロケールでも英語の敬称になります。
:::
