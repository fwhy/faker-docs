# rgbCssColor
```php
rgbCssColor() :string
```
:jp: :us:  
RGBカラーを生成し、CSSフレンドリーな形で返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->rgbCssColor()
=> "rgb(244,185,221)"
>>> Faker\Factory::create()->rgbCssColor()
=> "rgb(221,99,78)"
```
