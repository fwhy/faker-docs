# shuffle
```php
shuffle(array|string $arg = '') :array|string
```
:jp: :us:  
引数で与えられた配列または文字列をシャッフルして返します。

## パラメータ
### `$arg`
シャッフルする配列または文字列。

## 例外
`$arg`が配列または文字列以外の場合、`InvalidArgumentException`例外が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->shuffle('こんにちは　せかい！')
=> "こんいせ　！ちにかは"
>>> Faker\Factory::create()->shuffle(['Hello', 'World'])
=> [
     "World",
     "Hello",
   ]
>>> Faker\Factory::create()->shuffle(['a' => 'A', 'b' => 'B', 'c' => 'C'])
=> [
     "C",
     "A",
     "B",
   ]
```

## 注意
::: warning 注意:
上記例の3つ目のように、連想配列を渡した場合も配列で返されます。
:::