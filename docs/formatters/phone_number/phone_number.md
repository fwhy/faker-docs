# phoneNumber
```php
phoneNumber() :string
```
:jp: :us:  
電話番号を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->phoneNumber()
=> "0127-76-0287"
>>> Faker\Factory::create()->phoneNumber()
=> "1-379-405-3063"
```

## 注意
::: warning 注意:
日本語ロケールでは下記のフォーマットのいずれかになります。

* 080-####-####
* 090-####-####
* 0#-####-####
* 0####-#-####
* 0###-##-####
* 0##-###-####
* 0##0-###-###
:::

