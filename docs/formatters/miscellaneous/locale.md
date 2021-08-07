# locale
```php
locale() :string
```
:jp: :us:  
ロケールを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->locale()
=> "my_MM"
>>> Faker\Factory::create()->locale()
=> "el_CY"
```
