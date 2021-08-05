# safeEmailDomain
```php
safeEmailDomain() :string
```
:jp: :us:  
安全なメールアドレスのドメインを生成します。

## パラメータ
なし

### 例
```php
>>> Faker\Factory::create('ja_JP')->safeEmailDomain()
=> "example.org"
>>> Faker\Factory::create()->safeEmailDomain()
=> "example.com"
```

## 注意
::: warning 注意:
ドメインは `example.com` 、 `example.org` 、 `example.net` のいずれかになります。
:::