# randomLetter
```php
randomLetter() :string
```
:jp: :us:  
'a'から'z'までのランダムな文字を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->randomLetter
=> "l"
>>> Faker\Factory::create()->randomLetter
=> "a"
```