# randomNumber
```php
randomNumber(?int $nbDigits = null, bool $strict = false) :int
```
:jp: :us:  
0から`$nbDigits`桁までの整数を返します。  
返される最大値は`mt_getrandmax()`です。

## パラメータ
### `$nbDigits`
返される整数の桁数を1から9で指定します。
nullを指定した場合、`randomDigitNotNull()`で生成されたランダムな値になります。

### `$strict`
trueにした場合、返り値が正確に`$nbDigits`桁になります。

## 例外
`$strict`に真偽値以外を渡した場合、または`$max`に`mt_getrandmax()`より大きい値を渡した場合は`InvalidArgumentException`が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomNumber()
=> 17
>>> Faker\Factory::create()->radomNumber(9)
=> 735949189
>>> Faker\Factory::create()->randomNumber(5, true)
=> 18904
```

## 参考
* [mt_getrandmax](https://www.php.net/manual/ja/function.mt-getrandmax)
* [randomDigitNotNull](random_digit_not_null.md)