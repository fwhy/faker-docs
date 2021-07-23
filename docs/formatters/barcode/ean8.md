# ean8
```php
ean8() :string
```
:jp: :us:  
8桁のEANコードを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->ean8()
=> "83598043"
>>> Faker\Factory::create()->ean8()
=> "63923735"
```

## 注意
::: warning 注意:
日本語ロケールを指定しても日本の国コード（先頭2桁が"49"または"45"）になるわけではありません。
:::
