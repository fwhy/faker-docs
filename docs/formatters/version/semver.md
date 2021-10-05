# semver
```php
semver(bool $preRelease = false, bool $build = false) :string
```
:jp: :us:  
セマンティックバージョン2.0.0を生成します。

## パラメータ
### `$preRelease`
プレリリースバージョンを付けるか否か。デフォルトはfalse。  
trueの場合、'alpha'、'beta'、'rc'のいずれかが付きます。

### `$build`
ビルドメタデータを付けるか否か。デフォルトはfalse。
trueの場合、末尾にビルド番号が付きます。

## 例
```php
>>> Faker\Factory::create('ja_JP')->semver()
=> "5.82.55"
>>> Faker\Factory::create()->semver(true, true)
=> "6.69.32-beta.12+20061015231241"
```

## 注意
::: warning 注意:
`$preRelease` および `$build` はともにtrueを指定しても50%の確率でプレリリースバージョンおよびビルドメタデータが付かないことがあります。  
具体的には内部で `mt_rand(0, 1) === 0` となったときに出力されません。
:::