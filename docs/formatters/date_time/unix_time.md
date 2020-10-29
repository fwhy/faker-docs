# unixTime
```php
unixTime(int|string|DateTime $max = 'now') :int
```
:jp: :us:  
0から`$max`までの整数を生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->unixTime
=> 824129063
>>> Faker\Factory::create()->unixTime('1970-01-01 00:00:01')
=> 1
```
