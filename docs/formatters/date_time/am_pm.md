# amPm
```php
amPm(DateTime|int|string $max = 'now') :string
```
:jp: :us:  
1970年1月1日から `$max` までの日時をランダムに生成し、その午前(am)または午後(pm)を文字列で返します。

## パラメータ
### `$max`
返す時刻の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->amPm()
=> "am"
>>> Faker\Factory::create()->amPm('yesterday')
=> "pm"
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
