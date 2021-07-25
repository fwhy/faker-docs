# safeColorName
```php
safeColorName() :string
```
:jp: :us:  
Webセーフな色名を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->safeColorName()
=> "yellow"
>>> Faker\Factory::create()->safeColorName()
=> "silver"
```
