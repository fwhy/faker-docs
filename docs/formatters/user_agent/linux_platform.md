# linuxPlatform
```php
linuxPlatform() :string
```
:jp: :us:  
Linuxプラットフォームを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->linuxPlatformToken()
=> "X11; Linux i686"
>>> Faker\Factory::create()->linuxPlatformToken()
=> "X11; Linux x86_64"
```
