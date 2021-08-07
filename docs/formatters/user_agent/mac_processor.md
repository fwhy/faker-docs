# macProcessor
```php
macProcessor() :string
```
:jp: :us:  
Macのプロセッサーを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->macProcessor()
=> "PPC"
>>> Faker\Factory::create()->macProcessor()
=> "U; Intel"
```
