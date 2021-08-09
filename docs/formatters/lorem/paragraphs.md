# paragraphs
```php
paragraphs($nb = 3, $asText = false) :array|string
```
:jp: :us:  
ランダムな段落を `$nb` 個生成します。

## パラメータ
### `$nb`
段落の数を指定します。デフォルトは3。

### `$asText`
段落を文字列として返すかを指定します。デフォルトはfalseで、この場合は配列で返します。
trueの場合は改行コード2個（'\n\n'）で結合した文字列を返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->paragraphs()
=> [
     "Nemo placeat dicta quibusdam aut in saepe adipisci. Quo quas iure veritatis voluptas. Est sed assumenda deserunt. Fugit eos qui facilis quasi nisi. Eius aliquid nesciunt non saepe occaecati blanditiis.",
     "Sed voluptatem ex maiores recusandae et excepturi. Id nostrum voluptatem dolorem dolorum aut aut hic. Eveniet officiis dolor voluptatum dolores.",
     "Repellendus non est neque vitae mollitia debitis numquam. Consequatur cumque soluta quia rerum nihil. Qui hic dolor aut delectus et quia tempora. Rerum ratione rem velit dolorem ut praesentium est explicabo.",
   ]
>>> Faker\Factory::create()->paragraphs(2, true)
=> """
   Atque pariatur vel culpa architecto soluta. Qui ea incidunt rerum id. Nam ut rem est omnis. Excepturi fuga expedita et est ratione quos rerum cupiditate. Perferendis mollitia nesciunt et est sunt.\n
   \n
   Ut quos labore numquam et earum. Neque eum nihil esse accusamus ut autem. Vel aut illum saepe maxime deleniti voluptatem. Est corporis quibusdam eum est.
   """
```
