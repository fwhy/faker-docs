# isbn13
```php
isbn13() :string
```
:jp: :us:  
13桁（現行規格）のISBNコードを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->isbn13()
=> "9799510096818"
>>> Faker\Factory::create()->isbn13()
=> "9787798877557"
```

## 注意
::: warning 注意:
日本語ロケールを指定しても日本の接頭辞およびグループ記号（先頭が"9784"）になるわけではありません。
:::
