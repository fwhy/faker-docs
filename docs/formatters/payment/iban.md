# iban
```php
iban(?stirng $countryCode = null, string $prefix = '', ?int $length = null) :string
```
:jp: :us:  
IBANコードを生成します。

## パラメータ
### `$countryCode`
ISO 3166-1 の2文字の国コードを指定します。デフォルトはnullで、この場合はランダムに国コードが選択されます。

### `$prefix`
接頭辞を指定します。デフォルトは空文字列。  
特定の銀行の口座番号を生成したい場合はここで指定します。

### `$length`
文字列の長さ。デフォルトはnullで、この場合は内部で定義された国コードごとの文字長となります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->iban()
=> "RS98544971279220233906"
>>> Faker\Factory::create()->iban('FR', 'BBBBBGGGGG', 27)
=> "FR60BBBBBGGGGG9XRX3532W8S17"
```
