# shuffleString
```php
shuffleString(string $arg = '', string $encoding = 'UTF-8') :string
```
:jp: :us:  
引数で与えられた文字列をシャッフルして返します。
この関数は元の文字列を変更しません。  
メルセンヌ・ツイスタとともに、バイアスのないフィッシャー–イェーツのシャッフルを使用します。  
したがって、この関数はPHPの`shuffle()`関数よりもランダムであり、シード可能です。  
さらに、mb拡張機能が使用可能な場合はUTF8で安全です。

## パラメータ
### `$arg`
シャッフルする文字列。

### `$encoding`
文字列のエンコーディング。

## 例
```php
>>> Faker\Factory::create('ja_JP')->shuffleString('こんにちは　せかい！')
=> "こいちん　にか！はせ"
>>> Faker\Factory::create()->shuffleString('Hello World!')
=> "oerlHl odW!l"
```

## 参考
* [メルセンヌ・ツイスタ](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%AB%E3%82%BB%E3%83%B3%E3%83%8C%E3%83%BB%E3%83%84%E3%82%A4%E3%82%B9%E3%82%BF)
* [フィッシャー–イェーツのシャッフル](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E2%80%93%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%84%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB)
