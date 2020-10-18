# name
```php
name([?string $gender = null]) :string
```
:jp: :us:  
氏名を生成します。

## パラメータ
### `$gender`
'male'を指定した場合は男性名を、'female'を指定した場合は女性名を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->name
=> "吉本 舞"
>>> Faker\Factory::create('ja_JP')->name('male')
=> "吉田 和也"
>>> Faker\Factory::create()->name
=> "Maryse Larson"
```

## 注意
::: warning 注意:
言語をデフォルト、つまり'en_US'ロケールを指定した場合は接頭辞(Mr.などの敬称)や接尾辞(Jr.などの称号)が付く場合があります。
:::