# safari
```php
safari() :string
```
:jp: :us:  
Safariのユーザーエージェントを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->safari()
=> "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_1 like Mac OS X; en-US) AppleWebKit/533.16.7 (KHTML, like Gecko) Version/3.0.5 Mobile/8B115 Safari/6533.16.7"
>>> Faker\Factory::create()->safari()
=> "Mozilla/5.0 (Windows; U; Windows NT 5.1) AppleWebKit/532.13.6 (KHTML, like Gecko) Version/5.0.3 Safari/532.13.6"
```
