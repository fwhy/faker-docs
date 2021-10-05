# titleMale
```php
titleMale() :string
```
:jp: :us:  
男性の敬称を生成します。  

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->titleMale()
=> "Mr."
>>> Faker\Factory::create()->titleMale()
=> "Prof."
```

## 注意
::: warning 注意:
日本語ロケールでも英語の敬称になります。
:::
