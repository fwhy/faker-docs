# asciify
```php
asciify(string $string = '****') :string
```
:jp: :us:  
渡された文字列のアスタリスクをランダムなASCII文字に置き換えた文字列を生成します。

## パラメータ
### `$string`
フォーマットを指定します。  
疑問符('*')はASCII文字に置き換えられます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->asciify
=> "G'|m"
>>> Faker\Factory::create()->asciify('Password is ******')
=> "Password is p3};L="
```

## 注意
::: warning 注意:
置き換える文字は特殊文字を除いた、ASCIIコード33から126までの文字です。  
```php
>>> for($i = 33; $i <= 126; $i++) echo chr($i)
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
```
:::