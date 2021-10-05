# localCoordinates
```php
localCoordinates() :array
```
:jp: :us:  
ローカル座標を生成します。

## パラメータ
なし

## 例
```php
>>> Faker\Factory::create('ja_JP')->localCoordinates()
=> [
     "latitude" => -55.725708,
     "longitude" => 100.825886,
   ]
>>> Faker\Factory::create()->localCoordinates()
=> [
     "latitude" => -71.613282,
     "longitude" => -161.562566,
   ]
```
