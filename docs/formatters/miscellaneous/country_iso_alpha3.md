# countryISOAlpha3
```php
countryISOAlpha3() :string
```
:jp: :us:  
国コード（3文字）を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->countryISOAlpha3()
=> "PRY"
>>> Faker\Factory::create()->countryISOAlpha3()
=> "SVK"
```
