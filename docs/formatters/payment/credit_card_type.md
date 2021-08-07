# creditCardType
```php
creditCardType() :string
```
:jp: :us:  
クレジットカードの種類を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->creditCardType()
=> "Visa Retired"
>>> Faker\Factory::create()->creditCardType()
=> "JCB"
```
