# realText
```php
realTextBetween(int $minNbChars = 160, int $maxNbChars = 200, int $indexSize = 2) :string
```
:jp: :us:  
マルコフ連鎖アルゴリズムによって文章を生成します。  

## パラメータ
### `$minNbChars`
最小文字数。最小値は1で、デフォルトは160。

### `$maxNbChars`
最大文字数。最小値は10で、デフォルトは200。

### `$indexSize`
インデックスサイズ。1から5で指定します。デフォルトは2。  
インデックスサイズが大きいほどより自然な文章になります。

## 例外
以下の場合に `InvalidArgumentException` が発生します。
* `$minNbChars` に1未満の値を指定した場合
* `$maxNbChars` に10未満の値を指定した場合
* `$indexSize` に0以下または6以上の値を指定した場合
* `$minNbChars` に `$maxNbChars` 以上の値を指定した場合

## 例
```php
>>> Faker\Factory::create('ja_JP')->realTextBetween()
=> "鳥捕とりごとごとごとごと、車室の中で見たら、かたのお菓子屋かして見分けて計算台のとき出て来るようがつめたく時計とけいはげしい人の人へ持もっとありました。「あのしく列れつはないんとなが、そこの下の遠ください。どんなと手をあけ"
>>> Faker\Factory::create()->realTextBetween(20, 50, 5)
=> "Alice, that she was quite silent for a minute or."
```

## 注意
::: warning 注意:
日本語ロケールでは宮沢賢治著「銀河鉄道の夜」より文章が生成されます。
:::

## 参考
* [マルコフ連鎖](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%80%A3%E9%8E%96)

