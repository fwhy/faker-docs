# rgbColorAsArray
```php
rgbColorAsArray() :array
```
:jp: :us:  
RGBカラーを生成し、配列で返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->rgbColorAsArray()
=> [
     37,
     70,
     113,
   ]
>>> Faker\Factory::create()->rgbColorAsArray()
=> [
     89,
     153,
     210,
   ]
```
