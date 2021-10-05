# numerify
```php
numerify(string $string = '###') :string
```
:jp: :us:  
渡された文字列のハッシュ記号及びパーセント記号をランダムな数字に置き換えた文字列を生成します。

## パラメータ
### `$string`
フォーマットを指定します。  
ハッシュ記号('#')は0から9、パーセント記号('%')は1から9の数字に置き換えられます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->numerify()
=> "095"
>>> Faker\Factory::create()->numerify('Lucky number is %#!')
=> "Lucky number is 42!"
```
