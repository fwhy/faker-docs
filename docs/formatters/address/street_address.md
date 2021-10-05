# streetAddress
```php
streetAddress() :string
```
:jp: :us:  
町名以降の住所を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->streetAddress()
=> "小林町杉山10-6-1"
>>> Faker\Factory::create()->streetAddress()
=> "9402 Mohr Cliff"
```
