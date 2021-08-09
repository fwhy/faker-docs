# dateTimeThisCentury
```php
dateTimeThisCentury(DateTime|int|string $max = 'now', ?string $timezone = null) :DateTime
```
:jp: :us:  
100年前から `$max` までの日時オブジェクトを生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。デフォルトはnull。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例外
`$max` が実行時の100年前より前の場合、 `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTimeThisCentury()
=> DateTime @-926067189 {#3559
     date: 1940-08-27 15:06:51.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->dateTimeThisCentury('+100 years', 'Europe/Paris')
=> DateTime @2074625721 {#3582
     date: 2035-09-28 22:55:21.0 Europe/Paris (+02:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
