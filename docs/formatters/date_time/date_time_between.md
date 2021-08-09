# dateTimeBetween
```php
dateTimeBetween(DateTime|string $startDate = '-30 years', DateTime|string $endDate = 'now', ?string $timezone = null) :DateTime
```
:jp: :us:  
`$startDate` から `$endDate` までの日付の日時オブジェクトを生成します。

## パラメータ
### `$startDate`
返す値の最小値を指定します。デフォルトは'-30 years'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$endDate`
返す値の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。デフォルトはnull。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例外
`$startDate` が `$endDate` よりも大きい場合、 `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTimeBetween()
=> DateTime @1483556653 {#3467
     date: 2017-01-04 19:04:13.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->dateTimeBetween('-1 week', new DateTime(), 'Europe/Paris')
=> DateTime @1628107158 {#3491
     date: 2021-08-04 21:59:18.0 Europe/Paris (+02:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
