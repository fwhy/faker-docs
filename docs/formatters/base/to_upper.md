# toUpper
```php
toUpper(string $string = '') :string
```
アルファベットを大文字にした文字列を生成します。  
`mbstring`拡張が使用可能な場合、ギリシア文字やキリル文字等のアルファベットも大文字にできます。

## パラメータ
### `$string`
大文字にしたい文字列。

## 例
```php
>>> Faker\Factory::create('ja_JP')->toLower('ⓙaｐaⓝ')
=> "ⒿAＰＡⓃ"
>>> Faker\Factory::create()->toLower('abc')
=> "ABC"
```

