# ean13
```php
ean13() :string
```
:jp: :us:  
13桁のEANコードを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->ean13()
=> "0841227604363"
>>> Faker\Factory::create()->ean13()
=> "6898719036045"
```

## 注意
::: warning 注意:
日本語ロケールを指定しても日本の国コード（先頭2桁が"49"または"45"）になるわけではありません。
:::
