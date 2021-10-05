# address
```php
address() :string
```
:jp: :us:  
住所を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->address()
=> "5685122  広島県石田市西区加藤町佐々木7-2-10 ハイツ佐藤109号"
>>> Faker\Factory::create()->address()
=> """
   10221 D'angelo Mountains\n
   New Theodoraside, MI 82899-1326
   """
```
