# macPlatform
```php
macPlatform() :string
```
:jp: :us:  
Macプラットフォームを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->macPlatformToken()
=> "Macintosh; U; Intel Mac OS X 10_8_0"
>>> Faker\Factory::create()->macPlatformToken()
=> "Macintosh; U; PPC Mac OS X 10_5_0"
```
