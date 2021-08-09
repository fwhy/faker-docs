# emoji
```php
emoji() :string
```
:jp: :us:  
絵文字を生成します。  
返す値はU+1F600（😀）からU+1F637（😷）までです。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->emoji()
=> "😩"
>>> Faker\Factory::create()->emoji()
=> "😠"
```
