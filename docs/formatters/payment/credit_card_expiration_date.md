# creditCardExpirationDate
```php
creditCardExpirationDate(bool $valid = true) :DateTime
```
:jp: :us:  
クレジットカードの有効期限を日時型で生成します。

## パラメータ
### `$valid`
有効な有効期限か否かを指定します。デフォルトはtrue。
trueの場合、現在から36ヶ月後までのいずれか日付になります。
falseの場合、36ヶ月前から36ヶ月後までのいずれか日付になります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->creditCardExpirationDate()
=> DateTime @1658572238 {#3006
     date: 2022-07-23 10:30:38.0 UTC (+00:00),
   }
>>> Faker\Factory::create()->creditCardExpirationDate(false)
=> DateTime @1635438260 {#3030
     date: 2021-10-28 16:24:20.0 UTC (+00:00),
   }
```
