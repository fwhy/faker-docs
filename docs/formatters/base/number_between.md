# numberBetween
```php
numberBetween([int $int1 = 0 [, int $int2 = 2147483647]]) :int
```
:jp: :us:  
`$int1`から`$int2`までの整数を生成します。  

## パラメータ
### `$int1`
デフォルトは0。

### `$int2`
デフォルトは32ビットでの最大値である2147483647。

## 例
```php
>>> Faker\Factory::create('ja_JP')->numberBetween
=> 1705891002
>>> Faker\Factory::create()->numberBetween(PHP_INT_MIN, PHP_INT_MAX)
=> -6203464891146482966
```
