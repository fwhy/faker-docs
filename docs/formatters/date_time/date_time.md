# dateTime
```php
dateTime(DateTime|int|string $max = 'now', ?string $timezone = null) :DateTime
```
:jp: :us:  
1970年1月1日から現在までの日付の日時オブジェクトを生成します。

## パラメータ
### `$max`
返す値の最大値を指定します。  
日時型を渡した場合、その日時のUNIXタイムスタンプとなります。  
文字列を渡す場合、`strtotime()`で解釈可能なものを渡します。

### `$timezone`
タイムゾーンを指定します。  
nullの場合、`date_default_timezone_get()`で取得される値になります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->dateTime
=> DateTime @1576931742 {#3288
     date: 2019-12-21 12:35:42.0 Asia/Tokyo (+09:00),
   }
>>> Faker\Factory::create()->dateTime('yesterday', 'Europe/Paris')
=> DateTime @135237530 {#3291
     date: 1974-04-15 06:58:50.0 Europe/Paris (+01:00),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
