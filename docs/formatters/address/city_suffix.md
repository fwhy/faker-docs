# citySuffix
```php
citySuffix() :string
```
市の接尾辞を生成します。  
日本語では必ず「市」を返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->citySuffix
=> "市"
>>> Faker\Factory::create()->citySuffix
=> "stad"
```