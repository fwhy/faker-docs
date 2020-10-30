# dateTimeAD
```php
dateTimeAD(DateTime|int|string $max = 'now', ?string $timezone = null) :DateTime
```
:jp: :us:  
0001年1月1日から現在までの日付の日時オブジェクトを生成します。


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
>>> Faker\Factory::create('ja_JP')->dateTimeAD
=> DateTime @-7252809348 {#3291
     date: 1740-03-02 10:44:12.0 Asia/Tokyo (+09:18),
   }
>>> Faker\Factory::create()->dateTimeAD('yesterday', 'Europe/Paris')
=> DateTime @-48854477183 {#3283
     date: 0421-11-11 16:02:58.0 Europe/Paris (+00:09),
   }
```

## 参考
* [strtotime](https://www.php.net/manual/ja/function.strtotime.php)
* [date_default_timezone_get](https://www.php.net/manual/ja/function.date-default-timezone-get)
