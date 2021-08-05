# slug
```php
slug(int $nbWords = 6, bool $variableNbWords = true) :string
```
:jp: :us:  
スラッグを生成します。

## パラメータ
### `$nbWords`
単語数を指定します。デフォルトは6。

### `$variableNbWords`
単語数の誤差を許容するか否かを指定します。  
デフォルトはtrueで、 `$nbWords` で指定した単語数の `60〜140% + 1` の文字数になります。  
falseを指定した場合、正確に `$nbWords` 個の単語数になります。

### 例
```php
>>> Faker\Factory::create('ja_JP')->slug()
=> "sunt-voluptatem-excepturi-eligendi-eaque-aspernatur-commodi-officia"
>>> Faker\Factory::create()->slug(2, false)
=> "dolores-omnis"
>>> Faker\Factory::create()->slug(2, true)
=> "vel-ut-assumenda"
>>> Faker\Factory::create()->slug(0)
=> ""
```
