# firstKanaName
```php
firstKanaName(?string $gender = null) :string
```
:jp:  
カタカナの名前を生成します。

## パラメータ
### `$gender`
'male'を指定した場合は男性名を、'female'を指定した場合は女性名を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->firstKanaName()
=> "ナナミ"
>>> Faker\Factory::create('ja_JP')->firstKanaName('male')
=> "ケンイチ"
```
