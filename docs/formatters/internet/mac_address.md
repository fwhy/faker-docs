# macAddress
```php
macAddress() :string
```
:jp: :us:  
MACアドレスを生成します。

## パラメータ
なし

### 例
```php
>>> Faker\Factory::create('ja_JP')->macAddress()
=> "B9:E3:E2:CC:34:85"
>>> Faker\Factory::create()->macAddress()
=> "65:78:87:64:81:2D"
```
