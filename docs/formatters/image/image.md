# image
```php
image(?string $dir = null, int $width = 640, int $height = 480, ?string $category = null, bool $fullPath = true, bool $randomize = true, ?string $word = null, bool $gray = false) :?string|bool
```
:jp: :us:  
[https://placeholder.com/](https://placeholder.com/) から画像を取得し、ローカルに作成された画像ファイルのパスを返します。  
URLにアクセスできない場合やHTTPエラーが発生した場合はfalseを返します。

## パラメータ
### `$dir`
画像を生成するディレクトリ。デフォルトはnullで、この場合は `sys_get_temp_dir()` で取得したディレクトリとなります。

### `$width`
画像の横幅。デフォルトは640。

### `$height`
画像の高さ。デフォルトは480。

### `$category`
カテゴリを指定します。指定した文字列は画像内に表示されます。

### `$fullPath`
返却値をフルパスで返すかを指定します。デフォルトはtrueで、フルパスを返します。

### `$randomize`
画像内にランダムな文字を表示するかを指定します。デフォルトはtrue。

### `$word`
文字列を指定します。指定した文字列は画像内に表示されます。

### `$gray`
trueの場合、灰色の画像になります。デフォルトはfalse。

## 例外
`$dir` で指定したディレクトリが、ディレクトリでない場合や書き込み権限がない場合は `InvalidArgumentException` が発生します。

## 例
```php
>>> Faker\Factory::create('ja_JP')->image()
=> "/tmp/d813204dcf0be099824cc35740c5a6c8.png"
>>> Faker\Factory::create()->imageUrl('/var/www/html/images', 320, 240, 'category', false, false, 'word', true)
=> "181935b6d4b3084bbf91e961aa429d02.png"
```

## 注意
::: warning 注意:
画像内の文字は `<$category> <$word> <ランダムな文字列($randomizeがtrueの場合)>` のようになります。
:::

## 参考
* [sys_get_temp_dir](https://www.php.net/manual/ja/function.sys-get-temp-dir.php)