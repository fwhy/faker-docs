# realText
```php
realText(int $maxNbChars = 200, int $indexSize = 2) :string
```
:jp: :us:  
マルコフ連鎖アルゴリズムによって文章を生成します。  

## パラメータ
### `$maxNbChars`
最大文字数。最小値は10で、デフォルトは200です。

### `$indexSize`
インデックスサイズ。1から5で指定します。  
インデックスサイズが大きいほどより自然な文章になります。

## 例外
`$maxNbChars`に10未満の値を指定した場合や`$indexSize`に0以下または6以上の値を指定した場合は`InvalidArgumentException`が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->realText
=> "うしろそうだいと思ったたんです。まだいかんしんごくように考えるからのぞけたのからちらって、ジョバンニは思いま秋だねえ。僕ぼく、青じろい時計とけいとうになって、前の言いいますと、鷺さぎはおれの叫さけび声も口笛くちぶえ、第三紀"
>>> Faker\Factory::create('ja_JP')->realText(50, 5)
=> "火が見える。あれはほんとうにいいことをしたはずがないんだ。ザネリはうちへ連つれられてった」ジョバン。"
>>> Faker\Factory::create()->realText(50)
=> "Footman. 'That's the judge,' she said this, she."
```

## 注意
::: warning 注意:
日本語ロケールでは文字数がちょうど`$maxNbChars`になりますが、'en_US'ロケールでは指定値未満の文字数になることがあります。
:::
::: warning 注意:
日本語ロケールでは宮沢賢治著「銀河鉄道の夜」より文章が生成されます。
:::

## 参考
* [マルコフ連鎖](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%80%A3%E9%8E%96)

