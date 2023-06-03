# randomElements
```php
randomElements(array|string|Traversable $array = ['a', 'b', 'c'] , int $count = 1, bool $allowDuplicates = false) :array
```
:jp: :us:  
`$array`の中からランダムに`$count`個だけ抽出し、配列にして返します。

## パラメータ
### `$array`
要素を取得する配列、または列挙型のクラス名。デフォルトは`['a', 'b', 'c']`。

### `$count`
取得する要素の数。デフォルトは1。

### `$allowDuplicates`
要素を重複取得してよいか？デフォルトはfalse。

## 例外
`$allowDupplicates`をfalseにした場合、`$array`の要素数が`$count`より少ないときに`LengthException`が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomElements()
=> [
     "b",
   ]
>>> Faker\factory::create()->randomElements([1, 2, 3])
=> [
     1,
   ]
>>> Faker\factory::create()->randomElements(['X', 'Y', 'Z'], 2)
=> [
     'X',
     'Z',
   ]
>>> Faker\factory::create()->randomElements(['a' => 'A', 'b' => 'B'], 5, true)
=> [
     "B",
     "A",
     "B",
     "B",
     "A",
   ]
```