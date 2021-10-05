# kanaName
```php
kanaName(?string $gender = null) :string
```
:jp:  
カタカナの氏名を生成します。

## パラメータ
### `$gender`
'male'を指定した場合は男性名を、'female'を指定した場合は女性名を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->kanaName()
=> "ヤマモト チヨ"
>>> Faker\Factory::create('ja_JP')->kanaName('male')
=> "ニシノソノ ユウタ"
```
