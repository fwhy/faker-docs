# safeEmail
```php
safeEmail() :string
```
:jp: :us:  
安全なメールアドレスを生成します。

## パラメータ
なし

### 例
```php
>>> Faker\Factory::create('ja_JP')->safeEmail()
=> "pishida@example.org"
>>> Faker\Factory::create()->safeEmail()
=> "beer.jasper@example.net"
```

## 注意
::: warning 注意:
ドメインは `example.com` 、 `example.org` 、 `example.net` のいずれかになります。
:::