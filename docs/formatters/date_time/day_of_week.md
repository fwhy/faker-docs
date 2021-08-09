# dayOfWeek
```php
dayOfWeek(DateTime|int|string $max = 'now') :string
```
:jp: :us:  
1970年1月1日から `$max` までの日時をランダムに生成し、その曜日を文字列で返します。

## パラメータ
### `$max`
返す時刻の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dayOfWeek()
=> "Sunday"
>>> Faker\Factory::create()->dayOfWeek('-3 day')
=> "Saturday"
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
