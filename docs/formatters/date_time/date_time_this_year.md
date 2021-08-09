# dateTimeThisYear
```php
dateTimeThisYear(DateTime|int|string $max = 'now', ?string $timezone = null) :DateTime
```
:jp: :us:  
今年の1月1日から `$max` までの範囲の日時オブジェクトを生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。デフォルトは'now'。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。デフォルトはnull。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例外
`$max` が今年の1月1日より前の場合、 `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTimeThisYear()
=> DateTime @1613897515 {#3651
     date: 2021-02-21 08:51:55.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->dateTimeThisYear('+1 years', 'Europe/Paris')
=> DateTime @1646341090 {#3835
     date: 2022-03-03 21:58:10.0 Europe/Paris (+01:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
