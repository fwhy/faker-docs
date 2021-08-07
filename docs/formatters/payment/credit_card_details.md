# creditCardDetails
```php
creditCardDetails(bool $valid = true) :array
```
:jp: :us:  
クレジットカードの情報を生成し、配列で返します。

## パラメータ
### `$valid`
有効な有効期限か否かを指定します。デフォルトはtrue。
trueの場合、現在から36ヶ月後までのいずれか日付になります。
falseの場合、36ヶ月前から36ヶ月後までのいずれか日付になります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->creditCardDetails()
=> [
     "type" => "MasterCard",
     "number" => "2221559561860978",
     "name" => "喜嶋 美加子",
     "expirationDate" => "02/24",
   ]
>>> Faker\Factory::create()->creditCardDetails(false)
=> [
     "type" => "JCB",
     "number" => "3589104573913970",
     "name" => "Holly Kilback Jr.",
     "expirationDate" => "01/21",
   ]
```
