# randomDigitNotNull
```php
randomDigitNotNull(): int
```
1から9までの乱数を返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomDigitNotNull
=> 1
>>> Faker\Factory::create()->randomDigitNotNull
=> 9
```
