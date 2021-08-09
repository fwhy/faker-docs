# dateTimeInInterval
```php
dateTimeInInterval(DateTime|string $date = '-30 years', string $interval = '+5 days', ?string $timezone = null) :DateTime
```
:jp: :us:  
`$date` から `$interval` までの範囲の日時オブジェクトを生成します。

## パラメータ
### `$date`
返す値の基準値を指定します。デフォルトは'-30 years'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$interval`
返す値の範囲を指定します。デフォルトは'+5 days'。  
`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。デフォルトはnull。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTimeInInterval()
=> DateTime @681947148 {#3516
     date: 1991-08-11 21:45:48.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->dateTimeInInterval(new DateTime(), '-3 days', 'Europe/Paris')
=> DateTime @1628305614 {#3539
     date: 2021-08-07 05:06:54.0 Europe/Paris (+02:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
