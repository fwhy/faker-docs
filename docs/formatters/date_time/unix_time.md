# unixTime
```php
unixTime(DateTime|int|string $max = 'now') :int
```
:jp: :us:  
1970年1月1日から現在までのタイムスタンプを生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->unixTime()
=> 824129063
>>> Faker\Factory::create()->unixTime('1970-01-01 00:00:01')
=> 1
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
