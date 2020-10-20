# shuffleArray
```php
shuffleArray(array $arg = []) :array
```
:jp: :us:  
引数で与えられた配列をシャッフルして返します。  
メルセンヌ・ツイスタとともに、バイアスのないフィッシャー–イェーツのシャッフルを使用します。  
したがって、この関数はPHPの`shuffle()`関数よりもランダムであり、シード可能です。  

## パラメータ
### `$arg`
シャッフルする配列。

## 例
```php
>>> Faker\Factory::create('ja_JP')->suffleArray(['こんにちは', 'せかい'])
=> [
     "せかい",
     "こんにちは",
   ]
>>> Faker\Factory::create()->shuffleArray(['a' => 'A', 'b' => 'B', 'c' => 'C'])
=> [
     "C",
     "A",
     "B",
   ]
```

## 注意
::: warning 注意:
上記例の2つ目のように、連想配列を渡した場合も配列で返されます。
:::

## 参考
* [メルセンヌ・ツイスタ](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%AB%E3%82%BB%E3%83%B3%E3%83%8C%E3%83%BB%E3%83%84%E3%82%A4%E3%82%B9%E3%82%BF)
* [フィッシャー–イェーツのシャッフル](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E2%80%93%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%84%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB)
