# date
```php
date(string $format = 'Y-m-d', DateTime|int|string $max = 'now') :string
```
:jp: :us:  
日付の文字列を生成します。

## パラメータ
### `$format`
書式を指定します。デフォルトは'Y-m-d'。

### `$max`
返す日付の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->date()
=> "2009-10-09"
>>> Faker\Factory::create()->date('Y/m/d', '2000-01-01')
=> "1995/05/23"
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
