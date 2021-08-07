# countryCode
```php
countryCode() :string
```
:jp: :us:  
国コード（2文字）を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->countryCode()
=> "CR"
>>> Faker\Factory::create()->countryCode()
=> "BN"
```
