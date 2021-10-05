# uuid
```php
uuid() :string
```
:jp: :us:  
UUIDを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->uuid()
=> "7dd6d676-8854-3711-8360-3049f4e46ef4"
>>> Faker\Factory::create()->uuid()
=> "204b2cb0-2585-3595-b839-6bade90d8b73"
```
