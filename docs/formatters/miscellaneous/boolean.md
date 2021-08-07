# boolean
```php
boolean(int $chanceOfGettingTrue = 50) :bool
```
:jp: :us:  
真偽値を生成します。

## パラメータ
### `$chanceOfGettingTrue`
trueになる確率(%)を指定します。デフォルトは50。  
100以上にすると必ずtrueになり、0以下にすると必ずfalseになります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->boolean()
=> true
>>> Faker\Factory::create()->boolean(30)
=> false
```
