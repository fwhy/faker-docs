# citySuffix
```php
citySuffix() :string
```
:jp: :us:  
市の接尾辞を生成します。  

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->citySuffix()
=> "市"
>>> Faker\Factory::create()->citySuffix()
=> "stad"
```