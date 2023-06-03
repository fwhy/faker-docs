# randomElement
```php
randomElement(array|string|Traversal $array = ['a', 'b', 'c']) :mixed
```
:jp: :us:  
`$array`の中からランダムに要素を1つ抽出し返します。  
空の集合を渡した場合、nullを返します。

## パラメータ
### `$array`
要素を取得する配列、または列挙型のクラス名。デフォルトは`['a', 'b', 'c']`。

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomElement()
=> "c"
>>> Faker\Factory::create()->randomElement([1, 2, 3])
=> 1
>>> Faker\Factory::create()->randomElement([])
=> null
```