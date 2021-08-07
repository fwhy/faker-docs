# creditCardExpirationDateString
```php
creditCardExpirationDateString(bool $valid = true, ?string $expirationDateFormat = null) :string
```
:jp: :us:  
クレジットカードの有効期限を文字列で生成します。

## パラメータ
### `$valid`
有効な有効期限か否かを指定します。デフォルトはtrue。
trueの場合、現在から36ヶ月後までのいずれか日付になります。
falseの場合、36ヶ月前から36ヶ月後までのいずれか日付になります。

### `$expirationDateFormat`
書式を指定します。デフォルトはnullで、この場合は'm/y'が指定されたものとして動作します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->creditCardExpirationDateString()
=> "10/23"
>>> Faker\Factory::create()->creditCardExpirationDateString(false, 'y-m')
=> "20-09"
```
