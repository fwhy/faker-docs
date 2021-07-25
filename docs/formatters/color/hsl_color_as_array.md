# hslColorAsArray
```php
hslColorAsArray() :array
```
:jp: :us:  
HSLカラーを生成し配列で返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->hslColorAsArray()
=> [
     320,
     3,
     0,
   ]
>>> Faker\Factory::create()->hslColorAsArray()
=> [
     341,
     70,
     42,
   ]
```
