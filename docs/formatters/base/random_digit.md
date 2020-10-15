# randomDigit
```php
randomDigit(): int
```
0から9までの乱数を返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomDigit
=> 9
>>> Faker\Factory::create()->randomDigit
=> 0
```
