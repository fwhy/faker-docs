# imageUrl
```php
imageUrl(int $width = 640, int $height = 480, ?string $category = null, bool $randomize = true, ?string $word = null, bool $gray = false) :string
```
:jp: :us:  
[https://placeholder.com/](https://placeholder.com/)　を用いて画像URLを生成します。

## パラメータ
### `$width`
画像の横幅。デフォルトは640。

### `$height`
画像の高さ。デフォルトは480。

### `$category`
カテゴリを指定します。指定した文字列は画像内に表示されます。

### `$randomize`
画像内にランダムな文字を表示するかを指定します。デフォルトはtrue。

### `$word`
文字列を指定します。指定した文字列は画像内に表示されます。

### `$gray`
trueの場合、灰色の画像になります。デフォルトはfalse。

## 例
```php
>>> Faker\Factory::create('ja_JP')->imageUrl(468, 60)
=> "https://via.placeholder.com/467x60.png/008888?text=assumenda"
>>> Faker\Factory::create()->imageUrl(320, 240, 'category', false, 'word', true)
=> "https://via.placeholder.com/320x240.png/CCCCCC?text=category+word"
```
### 画像の例
#### imageUrl(468, 60)
![imageUrl(468, 60)](https://via.placeholder.com/467x60.png/008888?text=assumenda)
#### imageUrl(320, 240, 'category', false, 'word', true)
![imageUrl(320, 240, 'category', false, 'word', true)](https://via.placeholder.com/320x240.png/CCCCCC?text=category+word)

## 注意
::: warning 注意:
画像内の文字は `<$category> <$word> <ランダムな文字列($randomizeがtrueの場合)>` のようになります。
:::
