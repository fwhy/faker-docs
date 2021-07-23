# isbn10
```php
isbn10() :string
```
:jp: :us:  
10桁（旧規格）のISBNコードを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->isbn10()
=> "1499424760"
>>> Faker\Factory::create()->isbn10()
=> "1834140889"
```

## 注意
::: warning 注意:
日本語ロケールを指定しても日本のグループ記号（先頭が"4"）になるわけではありません。
:::
