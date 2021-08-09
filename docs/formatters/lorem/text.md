# text
```php
text(int $maxNbChars = 200) :string
```
:jp: :us:  
ランダムな文章を返します。

## パラメータ
### `$maxNbChars`
最大文字数を指定します。最小値は5で、デフォルトは200。

## 例外
`$maxNbChars` に5未満の値を指定した場合、 `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->text()
=> "Sunt dolore ea amet dolorem et inventore sapiente. Voluptatem possimus illo deleniti. Est autem ea minus ipsam voluptatem."
>>> Faker\Factory::create()->text(100)
=> "Vel voluptatum omnis reiciendis. Magnam tempore sapiente quia mollitia."
```
