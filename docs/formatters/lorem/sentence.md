# sentence
```php
sentence(int $nbWords = 6, bool $variableNbWords = true) :string
```
:jp: :us:  
ランダムな文を返します。

## パラメータ
### `$nbWords`
単語数を指定します。デフォルトは6。

### `$variableNbWords`
単語数の誤差を許容するか否かを指定します。  
デフォルトはtrueで、 `$nbWords` で指定した単語数の±40%の文字数になります。  
falseを指定した場合、正確に `$nbWords` 個の単語数になります。

## 例
```php
>>> Faker\Factory::create('ja_JP')->sentence()
=> "Voluptate quae enim saepe accusantium modi dicta tempore vel."
>>> Faker\Factory::create()->sentence(5, false)
=> "Omnis voluptas hic pariatur cum."
```
