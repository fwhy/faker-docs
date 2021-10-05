# latitude
```php
latitude(float $min = -90, float $max = 90) :float
```
:jp: :us:  
緯度を生成します。

## パラメータ
### `$min`
最南緯。

### `$max`
最北緯。

## 例
```php
>>> Faker\Factory::create('ja_JP')->latitude()
=> 46.804044
>>> Faker\Factory::create()->latitude(20, 46)
=> 34.141433
```

## 注意
::: warning 注意:
`$min`>`$max`の場合、入れ替えて処理を行います。
:::
::: warning 注意:
引数に-90未満または90よりも大きい数を指定しても例外は発生しません。  
また、その場合は存在し得ない緯度が生成される可能性があります。
:::