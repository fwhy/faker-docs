# dateTimeThisMonth
```php
dateTimeThisMonth(DateTime|int|string $max = 'now', ?stirng $timezone = null) :DateTime
```
:jp: :us:  
1ヶ月前から `$max` までの日時オブジェクトを生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。デフォルトはnull。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例外
`$max` が実行時の1ヶ月前より前の場合、 `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTimeThisMonth()
=> DateTime @1626970438 {#3880
     date: 2021-07-22 16:13:58.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->dateTimeThisMonth('+3 month', 'Europe/Paris')
=> DateTime @1636162023 {#3904
     date: 2021-11-06 02:27:03.0 Europe/Paris (+01:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
