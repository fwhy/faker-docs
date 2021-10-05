# longitude
```php
longitude(float $min = -180, float $max = 180) :float
```
:jp: :us:  
経度を生成します。

## パラメータ
### `$min`
最西経。

### `$max`
最東経。

## 例
```php
>>> Faker\Factory::create('ja_JP')->longitude()
=> -157.679001
>>> Faker\Factory::create()->longitude(122, 154)
=> 152.71916
```

## 注意
::: warning 注意:
`$min`>`$max`の場合、入れ替えて処理を行います。
:::
::: warning 注意:
引数に-180未満または180よりも大きい数を指定しても例外は発生しません。  
また、その場合は存在し得ない経度が生成される可能性があります。
:::