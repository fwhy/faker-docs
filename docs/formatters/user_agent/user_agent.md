# userAgent
```php
userAgent() :string
```
:jp: :us:  
ユーザーエージェントを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->userAgent()
=> "Mozilla/5.0 (compatible; MSIE 6.0; Windows NT 6.2; Trident/4.1)"
>>> Faker\Factory::create()->userAgent()
=> "Opera/9.58 (Windows NT 6.0; sl-SI) Presto/2.9.318 Version/11.00"
```
