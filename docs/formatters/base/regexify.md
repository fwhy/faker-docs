# regexify
```php
regexify(string $regex = '') :string
```
:jp: :us:
渡された正規表現に一致する文字列を生成します。

## パラメータ
### `$regex`
正規表現を指定します。  
デリミタ(/.../)と行頭(^)、行末($)の記号は無視されます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->regexify('[a-z][0-9]{3}')
=> "s450"
>>> Faker\Factory::create()->regexify('\\w\\d{3}')
=> "w413"
```

## 注意
::: warning 注意:
この関数は **とても** 遅いです。  
別のもので代用できるのであればそちらを使用するようにしましょう。
:::

::: warning 注意:
2バイト文字を返すような正規表現では正しく動作しません。
```php
>>> Faker\Factory::create('ja_JP')->regexify('[あ-ん]')
=> b"‚"
```
:::