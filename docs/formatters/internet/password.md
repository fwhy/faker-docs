# password
```php
password(int $minLength = 6, int $maxLength = 20) :string
```
:jp: :us:  
パスワードを生成します。

## パラメータ
### `$minLength`
生成する文字列の最小長を指定します。デフォルトは6。

### `$maxLength`
生成する文字列の最大長を指定します。デフォルトは20。

### 例
```php
>>> Faker\Factory::create('ja_JP')->password()
=> "W?RhFua1|Cn"
>>> Faker\Factory::create()->password(8, 16)
=> ";s`Vj~o0+"/A>%<="
```
