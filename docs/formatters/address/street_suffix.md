# streetSuffix
```php
streetSuffix() :string
```
:jp: :us:  
町の接尾辞を生成します。  
  
## パラメータ
なし
  
## 例
```php
>>> Faker\Factory::create('ja_JP')->streetSuffix()
=> "町"
>>> Faker\Factory::create()->streetSuffix()
=> "River"
```