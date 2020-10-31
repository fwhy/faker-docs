# bothify
```php
bothify(string $string = '## ??') :string
```
:jp: :us:  
渡された文字列のハッシュ記号、疑問符、アスタリスクを
それぞれランダムな数字、英小文字、数字または英小文字に置き換えた文字列を生成します。


## パラメータ
### `$string`
フォーマットを指定します。  
ハッシュ記号('#')は0から9の数字に置き換えられます。  
疑問符('?')は英小文字に置き換えられます。  
アスタリスク('*')は数字または英小文字に置き換えられます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->bothify
=> "49 dr"
>>> Faker\Factory::create()->bothify('Password is ##**??')
=> "Password is 17o9ce"
```
