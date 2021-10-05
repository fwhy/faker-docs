# randomKey
```php
randomKey(array $array = []) :mixed
```
:jp: :us:  
渡された配列`$array`からランダムにキーを1つ返します。  
空の配列を渡した場合、nullを返します。

## パラメータ
### `$array`
キーを取得する配列。デフォルトは`[]`。

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomKey(['a' => 'A', 'b' => 'B'])
=> "a"
>>> Faker\Factory::create()->randomKey(['a', 'b', 'c'])
=> 2
>>> Faker\Factory::create()->randomKey()
=> null
```
