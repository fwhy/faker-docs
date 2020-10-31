# lexify
```php
lexify(string $string = '????') :string
```
:jp: :us:  
渡された文字列の疑問符をランダムな英小文字に置き換えた文字列を生成します。

## パラメータ
### `$string`
フォーマットを指定します。  
疑問符('?')は英小文字に置き換えられます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->lexify
=> "rpeb"
>>> Faker\Factory::create()->lexify('Hello ?????!')
=> "Hello fnbtl!"
```
