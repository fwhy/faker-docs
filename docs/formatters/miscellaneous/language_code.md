# languageCode
```php
languageCode() :string
```
:jp: :us:  
言語コードを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->languageCode()
=> "lt"
>>> Faker\Factory::create()->languageCode()
=> "rm"
```
