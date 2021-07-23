# biasedNumberBetween
```php
biasedNumberBetween(int $min = 0, int $max = 100, callable $function = 'sqrt') :int
```
:jp: :us:  
`$min` から `$max` までの整数のうち、 `$function` で与えられた関数を用いたバイアスをかけたランダムな整数を生成します。

## パラメータ
### `$min`
返される整数の最小値。デフォルトは0。

### `$max`
返される整数の最大値。デフォルトは100。

### `$function`
バイアスに用いる関数。デフォルトは `sqrt`

## 例
```php
>>> Faker\Factory::create('ja_JP')->biasedNumberBetween()
=> 90
>>> Faker\Factory::create()->biasedNumberBetween(10, 20, 'exp')
=> 16
```
