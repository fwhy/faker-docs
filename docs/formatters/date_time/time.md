# time
```php
time(string $format = 'H:i:s', DateTime|int|String $max = 'now') :string
```
:jp: :us:  
時刻の文字列を生成します。

## パラメータ
### `$format`
書式を指定します。デフォルトは'H:i:s'。

### `$max`
返す時刻の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->time()
=> "12:27:12"
>>> Faker\Factory::create()->date('g:i A', '2000-01-01')
=> "10:34 PM"
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
