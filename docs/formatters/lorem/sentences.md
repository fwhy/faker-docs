# sentences
```php
sentences(int $nb = 3, bool $asText = false) :array|string
```
:jp: :us:  
ランダムな文を `$nb` 個生成します。

## パラメータ
### `$nb`
文の数を指定します。デフォルトは3。

### `$asText`
文を文字列として返すかを指定します。デフォルトはfalseで、この場合は配列で返します。
trueの場合は半角スペースで結合した文字列を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->sentences()
=> [
     "Nobis eaque enim ut est tempora.",
     "In veniam quae earum debitis illum sed.",
     "Pariatur corporis delectus molestiae totam velit.",
   ]
>>> Faker\Factory::create()->sentences(2, true)
=> "Aperiam odio et quaerat in cum fuga. Est ut qui consequatur esse accusamus soluta eligendi."
```
