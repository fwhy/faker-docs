<style>
.flex {
    display: flex;
}

.flex > div {
    width: 50%;
}
</style>
# PHP Faker非公式リファレンス

Fakerは、ダミーデータを生成するPHPライブラリです。   
データベースの初期データ、体裁の整ったXMLドキュメントの作成、
永続性の入力によるストレステスト、本番サービスから取得したデータの匿名化などにFakerが最適です。  
これは、PerlのData::FakerとRubyのFakerに大きく影響を受けています。

## [フォーマッター](./formatters)
<div class="flex">
<div>

### [基底](./formatters/base)
* [randomDigit](./formatters/base/random_digit)
* [randomDigitNotNull](./formatters/base/random_digit_not_null)
* [randomDigitNot](./formatters/base/random_digit_not)
* [randomNumber](./formatters/base/random_number)
* [randomFloat](./formatters/base/random_float)
* [numberBetween](./formatters/base/number_between)
* [passthroug](./formatters/base/passthrough)
* [randomLetter](./formatters/base/random_letter)
* [randomAscii](./formatters/base/random_ascii)
* [randomElements](./formatters/base/random_elements)
* [randomElement](./formatters/base/random_element)
* [randomKey](./formatters/base/random_key)
* [shuffle](./formatters/base/shuffle)
* [shuffleArray](./formatters/base/shuffle_array)
* [shuffleString](./formatters/base/shuffle_string)
* [numerify](./formatters/base/numerify)
* [lexify](./formatters/base/lexify)
* [bothify](./formatters/base/bothify)
* [asciify](./formatters/base/asciify)
* [regexify](./formatters/base/regexify)
* [toLower](./formatters/base/to_lower)
* [toUpper](./formatters/base/to_upper)

### [ロレム](./formatters/lorem)
* [word](./formatters/lorem/ward)
* [words](./formatters/lorem/wards)

### [人](./formatters/person)
* [name](./formatters/person/name)
* [firstName](./formatters/person/first_name)
* [firstNameMale](./formatters/person/first_name_male)
* [firstNameFemale](./formatters/person/first_name_female)
* [lastName](./formatters/person/last_name)
* [title](./formatters/person/title)
* [titleMale](./formatters/person/title_male)
* [titleFemale](./formatters/person/title_female)
* [kanaName](./formatters/person/kana_name)
* [firstKanaName](./formatters/person/first_kana_name)
* [firstKanaNameMale](./formatters/person/first_kana_name_male)
* [firstKanaNameFemale](./formatters/person/first_kana_name_female)
* [lastKanaName](./formatters/person/last_kana_name.md)

</div>
<div>

### [住所](./formatters/address)
* [citySuffix](./formatters/address/city_suffix)
* [streetSuffix](./formatters/address/street_suffix)
* [buildingNumber](./formatters/address/building_number)
* [city](./formatters/address/city)
* [streetName](./formatters/address/street_name)
* [streetAddress](./formatters/address/street_address)
* [postcode](./formatters/address/postcode)
* [address](./formatters/address/address)
* [country](./formatters/address/country)
* [latitude](./formatters/address/latitude)
* [longitude](./formatters/address/longitude)
* [localCoordinates](./formatters/address/local_coordinates)
* [postcode1](./formatters/address/postcode1)
* [postcode2](./formatters/address/postcode2)
* [prefecture](./formatters/address/prefecture)
* [ward](./formatters/address/ward)
* [areaNumber](./formatters/address/area_number)
* [secondaryAddress](./formatters/address/secondary_address)

### [電話番号](./formatters/phone_number)
* [phoneNumber](./formatters/phone_number/phone_number)
* [e164PhoneNumber](./formatters/phone_number/e164_phone_number)
* [imei](./formatters/phone_number/imei)

### [会社](./formatters/company)
* [company](./formatters/company/company)
* [companySuffix](./formatters/company/company_suffix)
* [jobTitle](./formatters/company/job_title)
* [companyPrefix](./formatters/company/company_prefix)

### [文章](./formatters/text)
* [realText](./formatters/text/real_text)

### [日時](./formatters/date_time)
* [unixTime](./formatters/date_time/unix_time)
* [dateTime](./formatters/date_time/date_time)
* [dateTimeAD](./formatters/date_time/date_time_ad)
* [iso8601](./formatters/date_time/iso8601)

### [UUID](./formatters/uuid)
* [uuid](./formatters/uuid/uuid)

</div>
</div>

