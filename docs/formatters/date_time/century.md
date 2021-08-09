# century
```php
century() :string
```
:jp: :us:  
世紀をローマ数字の文字列で返します。  
返す値は1（I）から21（XXI）までです。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->century()
=> "XIV"
>>> Faker\Factory::create()->century()
=> "IX"
```
