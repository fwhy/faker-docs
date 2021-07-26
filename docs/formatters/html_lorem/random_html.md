# randomHtml
```php
randomHtml(int $maxDepth = 4, int $maxWidth = 4) :string
```
:jp: :us:  
ランダムなHTML文字列を生成します。

## パラメータ
### `$maxDepth`
body部の最大深さを指定します。デフォルトは4。

### `$maxWidth`
各要素が持つ兄弟要素の最大値を指定します。デフォルトは4。

## 例外

## 例
```php
>>> >>> Faker\Factory::create('ja_JP')->randomHtml()
=> "<html><head><title>Optio facere.</title></head><body><form action="example.net" method="POST"><label for="username">consequatur</label><input type="text" id="username"><label for="password">omnis</label><input type="password" id="password"></form><div id="38464"><table><thead><tr><th>Repudiandae rerum et voluptatem.</th><th>Illo magnam at.</th><th>Perferendis.</th></tr></thead><tbody><tr><td>Dicta aut voluptatem hic ut veritatis.</td><td>Unde dignissimos quis aut ratione soluta qui impedit aut praesentium.</td><td>Eaque adipisci voluptatem laboriosam dignissimos autem reprehenderit labore eos et eveniet.</td></tr><tr><td>Cum cupiditate similique.</td><td>Omnis eum eius at eligendi.</td><td>Nesciunt quo minima nihil et fugit explicabo recusandae id.</td></tr><tr><td>Deserunt suscipit consequatur aut dolores.</td><td>Consequatur fugit exercitationem.</td><td>Et distinctio aut id nihil quasi.</td></tr><tr><td>Minima voluptas aut eos quia consectetur.</td><td>Qui dolor natus nihil earum est.</td><td>Quia distinctio non dolorem provident ratione.</td></tr><tr><td>Inventore iure non sapiente assumenda inventore similique quis.</td><td>Dignissimos accusantium velit.</td><td>Qui amet placeat enim.</td></tr><tr><td>Id qui voluptates aut mollitia non sit aut commodi veniam.</td><td>Dolorem.</td><td>Debitis autem amet molestias.</td></tr><tr><td>Hic unde similique doloribus quibusdam corrupti nostrum.</td><td>Aliquid aut commodi quo velit eius aut.</td><td>Atque ullam qui quae delectus.</td></tr><tr><td>Qui quia consequatur facere et architecto dolorem in eos et.</td><td>In expedita totam.</td><td>Quia et.</td></tr></tbody></table></div><div id="56284"><div class="iure"></div></div><div id="14073"><i>Illum sit laudantium iure aut.</i><i>Molestiae molestias quis voluptatem qui dolor magni.</i></div><div class="provident"></div></body></html>\n"
>>> Faker\Factory::create()->randomHtml(2, 1)
=> "<html><head><title>Voluptas.</title></head><body><form action="example.com" method="POST"><label for="username">quibusdam</label><input type="text" id="username"><label for="password">nemo</label><input type="password" id="password"></form>Quia itaque eos cupiditate veniam doloribus est.</body></html>\n"
```

## 注意
::: warning 注意:
返却されるHTML文字列には下記のようなログインフォームが必ず含まれます。
```html
<form action="example.com" method="POST">
    <label for="username">corrupti</label>
    <input type="text" id="username">
    <label for="password">sunt</label>
    <input type="password" id="password">
</form>
```
`$maxDepth` に1以下の数値を指定した場合、body部が上記のログインフォームのみを含むHTMLが返されます。  
また、 `$maxWidth` で指定した兄弟要素の数には含まれません。
つまり、body直下の要素の数は `ログインフォーム1個 ＋ (1〜$maxWidth)個` となります。
:::