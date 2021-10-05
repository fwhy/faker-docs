# words
```php
words(int $nb = 3, bool $asText = false) :array|string
```
:jp: :us:  
ランダムな単語を`$nb`個生成します。

## パラメータ
### `$nb`
単語の数。デフォルトは3。

### `$asText`
trueの場合、文字列として返します。デフォルトはfalseで、この場合は配列で返します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->words()
=> [
     "molestias",
     "doloribus",
     "iste",
   ]
>>> Faker\Factory::create()->words(5)
=> [
     "modi",
     "laboriosam",
     "voluptates",
     "nemo",
     "harum",
   ]
>>> Faker\Factory::create()->words(2, true)
=> "necessitatibus blanditiis"
```
