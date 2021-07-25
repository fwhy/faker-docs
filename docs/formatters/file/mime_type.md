# mimeType
```php
mimeType() :string
```
:jp: :us:  
MIMEタイプを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->mimeType()
=> "application/xhtml+xml"
>>> Faker\Factory::create()->mimeType()
=> "video/vnd.uvvu.mp4"
```
