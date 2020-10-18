# randomAscii
```php
randomAscii() :string
```
:jp: :us:  
ランダムなASCII文字を生成します。  

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomAscii
=> "{"
>>> Faker\Factory::create()->randomAscii
=> "o"
```

## 注意
::: warning 注意:
生成されるのは特殊文字を除いた、ASCIIコード33から126までの文字です。  
```php
>>> for($i = 33; $i <= 126; $i++) echo chr($i)
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
```
:::