# title
```php
title(?string $gender = null) :string
```
:jp: :us:  
敬称を生成します。  

## パラメータ
### `$gender`
'male'を指定した場合は男性の、'female'を指定した場合は女性の敬称を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->title
=> "Mrs."
>>> Faker\Factory::create('ja_JP')->title('male')
=> "Dr."
>>> Faker\Factory::create()->title
=> "Miss"
```

## 注意
::: warning 注意:
日本語ロケールでも英語の敬称になります。
:::
::: warning 注意:
`$gender`を指定した場合でもDr.やProf.など、男性・女性ともに共通する敬称が生成される場合があります。
:::