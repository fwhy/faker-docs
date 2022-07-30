# msedge
```php
msedge() :string
```
:jp: :us:  
Microsoft Edgeのユーザーエージェントを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->msedge()
=> "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/533.1 (KHTML, like Gecko) Chrome/79.0.4410.58 Safari/533.1 EdgA/79.01000.98"
>>> Faker\Factory::create()->msedge()
=> "Mozilla/5.0 (Macintosh; PPC Mac OS X 10_8_0) AppleWebKit/534.1 (KHTML, like Gecko) Chrome/88.0.4836.68 Safari/534.1 Edg/88.01009.81"
```
