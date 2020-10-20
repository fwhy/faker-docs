# firstName
```php
firstName(?string $gender = null) :string
```
:jp: :us:  
名前を生成します。

## パラメータ
### `$gender`
'male'を指定した場合は男性名を、'female'を指定した場合は女性名を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->firstName
=> "美加子"
>>> Faker\Factory::create('ja_JP')->firstName('male')
=> "裕太"
>>> Faker\Factory::create()->firstName
=> "Peggie"
```
