# randomFloat
```php
randomFloat([int $nbMaxDecimals = null [, mixed $min = 0 [, mixed $max = null]]]) :float
```
:jp: :us:  
ランダムな浮動小数点数を返します。

## パラメータ
### `$nbMaxDecimals`
返される浮動小数点数の小数桁数。
nullを指定した場合、`randomDigit()`で生成されたランダムな値になります。

### `$min` 
返される浮動小数点数の最小値。
整数または浮動小数点数で指定します。

### `$max` 
返される浮動小数点数の最大値。
整数または浮動小数点数で指定します。
nullを指定した場合、`randomNumber()`で生成されたランダムな値になります。
このとき、`$min`よりも小さい値となった場合は`$min`と同じ値になります。

## 例
```php
>>> Faker\Factory::crate('ja_JP')->randomFloat
=> 5814182.56
>>> Faker\Factory::create()->randomFloat(3)
=> 318419.71
>>> Faker\Factory::create()->randomFloat(null, 5, 5)
=> 5.0
```

## 注意
::: warning 注意:
`$min`より`$max`のほうが小さい場合、入れ替えた上で処理を行います。
:::

## 参考
* [randomDigit](random_digit)
* [randomNumber](random_number)