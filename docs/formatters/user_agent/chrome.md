# chrome
```php
chrome() :string
```
:jp: :us:  
Chromeのユーザーエージェントを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->chrome()
=> "Mozilla/5.0 (Windows 98; Win 9x 4.90) AppleWebKit/5321 (KHTML, like Gecko) Chrome/39.0.864.0 Mobile Safari/5321"
>>> Faker\Factory::create()->chrome()
=> "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_9) AppleWebKit/5361 (KHTML, like Gecko) Chrome/37.0.888.0 Mobile Safari/5361"
```
