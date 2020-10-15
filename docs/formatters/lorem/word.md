# word
```php
word() :string
```
ランダムな単語を返します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->word
=> "ducimus"
>>> Faker\Factory::create()->word
=> "id"
```