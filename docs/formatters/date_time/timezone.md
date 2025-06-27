# timezone
```php
timezone(?string $countryCode = null) :string
```
:jp: :us:  
`$countryCode` で指定した国からランダムでタイムゾーンを生成します。

## パラメータ
### `$countryCode`
2文字のISO 3166-1互換の国コードを指定します。デフォルトは `null` で、この場合はすべての国からランダムにタイムゾーンが生成されます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->timezone('JP')
=> "Asia/Tokyo"
>>> Faker\Factory::create()->timezone()
=> "Asia/Dhaka"
```
