# creditCardNumber
```php
creditCardNumber(?string $type = null, bool $formatted = false, string $separator = '-') :string
```
:jp: :us:  
クレジットカード番号を生成します。

## パラメータ
### `$type`
クレジットカードの種類を指定します。デフォルトはnull。  
'Visa'、'MasterCard'、'American Express'、'Discover'、'JCB'のいずれかで指定してください。  
nullの場合、上記のいずれかになります。

### `$formatted`
trueを指定した場合、4桁ずつの区切りで返します。デフォルトはfalse。

### `$separator`
区切り文字を指定します。デフォルトは'-'。  
`$formatted` がfalseの場合は無視されます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->creditCardNumber()
=> "4024007197209801"
>>> Faker\Factory::create()->creditCardNumber('Visa', true)
=> "4716-8672-2779-8708"
```
