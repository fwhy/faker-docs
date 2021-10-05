# e164PhoneNumber
```php
e164PhoneNumber() :string
```
:jp: :us:  
E.164電話番号を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->e164PhoneNumber()
=> "+3611313560448"
>>> Faker\Factory::create()->e164PhoneNumber()
=> "+2215808750085"
```
