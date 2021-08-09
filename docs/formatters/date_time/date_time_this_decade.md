# dateTimeThisDecade
```php
dateTimeThisDecade(DateTime|int|string $max = 'now', ?string $timezone = null) :DateTime
```
:jp: :us:  
10年前から `$max` までの日時オブジェクトを生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。デフォルトはnull。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例外
`$max` が実行時の10年前より前の場合、 `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTimeThisDecade()
=> DateTime @1409959965 {#3605
     date: 2014-09-05 23:32:45.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->dateTimeThisDecade(1_600_000_000, 'Europe/Paris')
=> DateTime @1534807243 {#3628
     date: 2018-08-21 01:20:43.0 Europe/Paris (+02:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
