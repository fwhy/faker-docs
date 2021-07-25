# file
```php
file(string $sourceDirectory = '/tmp', string $targetDirectory = '/tmp', bool $fullPath = true) :string
```
:jp: :us:  
`$sourceDirectory` ディレクトリに存在するファイルからランダムに選択し、
`$targetDirectory` ディレクトリにコピーしてそのファイル名（パス含む）を返します。  

## パラメータ
### `$sourceDirectory`
コピー元ディレクトリ。デフォルトは `/tmp`。  

### `$targetDirectory`
コピー先ディレクトリ。デフォルトは `/tmp`。

### `$fullPath`
返却値をフルパスで返すか否か。デフォルトは `true` で、フルパスを返します。

## 例外
以下の場合に `InvalidArgumentException` が発生します。
* `$sourceDirectory` または `$targetDirectory` がディレクトリでない
* `$sourceDirectory` と `$targetDirectory` が同一
* `$sourceDirectory` にファイルが存在しない

## 例
```php
>>> Faker\Factory::create('ja_JP')->file('/src', '/tmp')
=> "/tmp/b6eefd43-f14f-316e-b24e-1627343c0e51.lock"
>>> Faker\Factory::create()->file('/src', '/tmp', false)
=> "60ec7004-9633-34d7-a0b5-9c5c9808525b.json"
```
