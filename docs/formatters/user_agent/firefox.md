# firefox
```php
firefox() :string
```
:jp: :us:  
Firefoxのユーザーエージェントを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->firefox()
=> "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_1 rv:3.0) Gecko/20140907 Firefox/36.0"
>>> Faker\Factory::create()->firefox()
=> "Mozilla/5.0 (X11; Linux x86_64; rv:6.0) Gecko/20201229 Firefox/36.0"
```
