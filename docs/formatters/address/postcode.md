# postcode
```php
postcode() :string
```
:jp: :us:  
郵便番号を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->postcode
=> "5972377"
>>> Faker\Factory::create()->postcode
=> "81265-4770"
```

## 注意
::: warning 注意:
日本語ロケールでは7桁のハイフン無しで生成されます。  
'en_US'ロケールではハイフン無し5桁またはハイフンあり5桁-4桁で生成されます。
:::