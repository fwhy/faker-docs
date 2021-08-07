# internetExplorer
```php
internetExplorer() :string
```
:jp: :us:  
Internet Explorerのユーザーエージェントを生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->internetExplorer()
=> "Mozilla/5.0 (compatible; MSIE 6.0; Windows CE; Trident/4.0)"
>>> Faker\Factory::create()->internetExplorer()
=> "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/4.0)"
```
