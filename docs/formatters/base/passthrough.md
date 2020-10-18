# passthrough
```php
passthrough(mixed $value) :mixed
```
:jp: :us:  
`$value`をそのまま返します。

## パラメータ
### `$value`
返したい値。

## 例
```php
>>> Faker\Factory::create('ja_JP')->passthrough('日本語')
=> "日本語"
>>> Faker\factory::create()->passthrough(['a' => 'A'])
=> [
     "a" => "A",
   ]
```
