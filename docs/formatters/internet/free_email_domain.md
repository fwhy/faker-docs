# freeEmailDomain
```php
freeEmailDomain() :string
```
:jp: :us:  
フリーメールアドレスのドメインを生成します。

## パラメータ
なし

### 例
```php
>>> Faker\Factory::create('ja_JP')->freeEmailDomain()
=> "mail.goo.ne.jp"
>>> Faker\Factory::create()->freeEmailDomain()
=> "yahoo.com"
```

## 注意
::: warning 注意:
ドメインは `gmail.com` 、 `yahoo.com` 、 `hotmail.com` 、 `mail.goo.ne.jp` のいずれかになります。  
また、 en_USロケールの場合は `mail.goo.ne.jp` を **除く** 、3種類のいずれかになります。
:::