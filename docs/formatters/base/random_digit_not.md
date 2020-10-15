# randomDigitNot
```php
randomDigitNot(int $except) :int
```
`$except`でない、0から9までのランダムな数字を生成します。

## パラメータ
### `$except`
除外する整数を指定します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomDigitNot(1)
=> 3
>>> Faker\Factory::create()->radomDigitNot(3)
=> 1
```

## 注意
::: warning 注意:
`$except`に-1以下の値を指定した場合、0を指定したときと同様に1から9までの値を返すようになります。  
また、10以上の値を指定した場合は9を指定したときと同様、0から8までの値を返すようになります。
:::

::: warning 注意:
`$except`に浮動小数点数を指定しても例外は発生しません。  
浮動小数点数が指定された場合は切り上げた(`ceil()`を適用した)値が指定されたものとして処理を行います。
:::
