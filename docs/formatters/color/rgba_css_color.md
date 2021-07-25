# rgbaCssColor
```php
rgbaCssColor() :string
```
:jp: :us:  
RGBAカラーを生成し、CSSフレンドリーな形で返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->rgbaCssColor()
=> "rgba(232,195,13,0.2)"
>>> Faker\Factory::create()->rgbaCssColor()
=> "rgba(149,5,103,0.5)"
```
