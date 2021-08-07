# linuxProcessor
```php
linuxProcessor() :string
```
:jp: :us:  
Linuxのプロセッサーを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->linuxProcessor()
=> "x86_64"
>>> Faker\Factory::create()->linuxProcessor()
=> "i686"
```
