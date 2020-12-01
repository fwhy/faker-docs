# toLower
```php
toLower(string $string = '') :string
```
アルファベットを小文字にした文字列を生成します。  
`mbstring`拡張が使用可能な場合、ギリシア文字やキリル文字等のアルファベットも小文字にできます。

## パラメータ
### `$string`
小文字にしたい文字列。

## 例
```php
>>> Faker\Factory::create('ja_JP')->toLower('ⒿⒶⓅⒶⓃ')
=> "ⓙⓐⓟⓐⓝ"
>>> Faker\Factory::create()->toLower('ABC')
=> "abc"
```

