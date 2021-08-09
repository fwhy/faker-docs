# paragraph
```php
paragraph(int $nbSentences = 3, bool $variableNbSentences = true) :string
```
:jp: :us:  
ランダムな段落を返します。

## パラメータ
### `$nbSentences`
文の数を指定します。デフォルトは3。

### `$variableNbWords`
文の数の誤差を許容するか否かを指定します。  
デフォルトはtrueで、 `$nbSentences` で指定した単語数の±40%の文字数になります。  
falseを指定した場合、正確に `$nbSentences` 個の単語数になります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->paragraph()
=> "Sed illum aut modi autem sunt. Voluptas dolor nihil aut."
>>> Faker\Factory::create()->paragraph(4, false)
=> "Iste nihil minus at non. Eum quis aut temporibus asperiores. Maiores saepe animi omnis dolores quo. Fuga sit dolor doloremque impedit nostrum placeat."
```
