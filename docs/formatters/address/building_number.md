# buildingNumber
```php
buildingNumber() :mixed
```
:jp: :us:  
建物番号を生成します。  
  
## パラメータ
なし
  
## 例
```php
>>> Faker\Factory::create('ja_JP')->buildingNumber
=> 110
>>> Faker\Factory::create()->buildingNumber
=> "87756"
```

## 注意
::: warning 注意:
日本語ロケールと'en_US'ロケールでは返される値の型が異なります。  
日本語では整数型で、101から110の値となります。  
'en_US'ロケールでは文字列型で、3から5桁の数字からなる文字列となります。
:::