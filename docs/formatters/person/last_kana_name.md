# lastKanaName
```php
lastKanaName() :string
```
カタカナの名字を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->lastKanaName
=> "タカハシ"
```

## 注意
::: warning 注意:
日本語ロケールのみ使用可能です。
:::