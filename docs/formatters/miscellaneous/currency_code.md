# currencyCode
```php
currencyCode() :string
```
:jp: :us:  
通貨コードを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->currencyCode()
=> "NOK"
>>> Faker\Factory::create()->currencyCode()
=> "SZL"
```
