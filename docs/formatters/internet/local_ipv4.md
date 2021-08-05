# localIpv4
```php
localIpv4() :string
```
:jp: :us:  
ローカルIPv4アドレスを生成します。

## パラメータ
なし

### 例
```php
>>> Faker\Factory::create('ja_JP')->localIpv4()
=> "192.168.124.173"
>>> Faker\Factory::create()->localIpv4()
=> "192.168.125.149"
```
