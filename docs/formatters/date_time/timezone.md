# timezone
```php
timezone() :string
```
:jp: :us:  
タイムゾーンを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->timezone()
=> "America/Aruba"
>>> Faker\Factory::create()->timezone()
=> "Asia/Dhaka"
```
