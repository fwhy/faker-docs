<style>
h3.formatter + ul {
    display: flex;
    flex-flow: column wrap;
}

@media screen and (min-width: 576px) {
    h3.formatter + ul { flex-flow: row wrap; }

    h3.formatter + ul > li { width: 50%; }
}

@media screen and (min-width: 768px) {
    h3.formatter + ul > li { width: 33.3%; }
}
</style>
# FakerPHP非公式リファレンス

Fakerは、ダミーデータを生成するPHPライブラリです。   
データベースの初期データ、体裁の整ったXMLドキュメントの作成、
永続性の入力によるストレステスト、本番サービスから取得したデータの匿名化などにFakerが最適です。  
これは、PerlのData::FakerとRubyのFakerに大きく影響を受けています。

[本家リポジトリ](https://github.com/FakerPHP/Faker/)  
[本家ドキュメント](https://fakerphp.github.io/)  

## [フォーマッター](./formatters)

### [人](./formatters/person) {.formatter}
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

### [住所](./formatters/address) {.formatter}
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

### [電話番号](./formatters/phone_number) {.formatter}
* [phoneNumber](./formatters/phone_number/phone_number)
* [e164PhoneNumber](./formatters/phone_number/e164_phone_number)
* [imei](./formatters/phone_number/imei)

### [会社](./formatters/company) {.formatter}
* [company](./formatters/company/company)
* [companySuffix](./formatters/company/company_suffix)
* [jobTitle](./formatters/company/job_title)
* [companyPrefix](./formatters/company/company_prefix)

### [文章](./formatters/text) {.formatter}
* [realText](./formatters/text/real_text)

### [基底](./formatters/base) {.formatter}
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

### [ロレム・イプサム](./formatters/lorem) {.formatter}
* [word](./formatters/lorem/ward)
* [words](./formatters/lorem/wards)

### [日時](./formatters/date_time) {.formatter}
* [unixTime](./formatters/date_time/unix_time)
* [dateTime](./formatters/date_time/date_time)
* [dateTimeAD](./formatters/date_time/date_time_ad)
* [iso8601](./formatters/date_time/iso8601)

### [インターネット](./formatters/internet) {.formatter}
* [email](./formatters/internet/email)
* [safeEmail](./formatters/internet/safe_email)
* [freeEmail](./formatters/internet/free_email)
* [companyEmail](./formatters/internet/company_email)
* [freeEmailDomain](./formatters/internet/free_email_domain)
* [safeEmailDomain](./formatters/internet/safe_email_domain)
* [userName](./formatters/internet/user_name)
* [password](./formatters/internet/password)
* [domainName](./formatters/internet/domain_name)
* [tld](./formatters/internet/tld)
* [url](./formatters/internet/url)
* [slug](./formatters/internet/slug)
* [ipv4](./formatters/internet/ipv4)
* [localIpv4](./formatters/internet/local_ipv4)
* [ipv6](./formatters/internet/ipv6)
* [macAddress](./formatters/internet/mac_address.md)

### [色](./formatters/color) {.formatter}
* [hexColor](./formatters/color/hex_color)
* [safeHexColor](./formatters/color/safe_hex_color)
* [rgbColorAsArray](./formatters/color/rgb_color_as_array)
* [rgbColor](./formatters/color/rgb_color)
* [rgbCssColor](./formatters/color/rgb_css_color)
* [rgbaCssColor](./formatters/color/rgba_css_color)
* [safeColorName](./formatters/color/safe_color_name)
* [colorName](./formatters/color/color_name)
* [colorName](./formatters/color/hsl_color)

### [ファイル](./formatters/file) {.formatter}
* [mimeType](./formatters/file/mime_type)
* [fileExtension](./formatters/file/file_extension)
* [file](./formatters/file/file)

### [画像](./formatters/image) {.formatter}
* [imageUrl](./formatters/image/image_url)
* [image](./formatters/image/image)

### [UUID](./formatters/uuid) {.formatter}
* [uuid](./formatters/uuid/uuid)

### [バーコード](./formatters/barcode) {.formatter}
* [ean8](./formatters/barcode/ean8)
* [ean13](./formatters/barcode/ean13)
* [isbn10](./formatters/barcode/isbn10)
* [isbn13](./formatters/barcode/isbn13)

### [雑多](./formatters/miscellaneous) {.formatter}
* [boolean](./formatters/miscellaneous/boolean)
* [md5](./formatters/miscellaneous/md5)
* [sha1](./formatters/miscellaneous/sha1)
* [sha256](./formatters/miscellaneous/sha256)
* [locale](./formatters/miscellaneous/locale)
* [countryCode](./formatters/miscellaneous/country_code)
* [countryISOAlpha3](./formatters/miscellaneous/country_iso_alpha3)
* [languageCode](./formatters/miscellaneous/language_code)
* [currencyCode](./formatters/miscellaneous/currency_code)
* [emoji](./formatters/miscellaneous/emoji)

### [バイアス](./formatters/biased) {.formatter}
* [biasedNumberBetween](./formatters/biased/biased_number_between)

### [HTMLロレム・イプサム](./formatters/html_lorem) {.formatter}
* [randomHtml](./formatters/html_lorem/random_html)

### [医療](./formatters/medical) {.formatter}
* [bloodType](./formatters/medical/blood_type)
* [bloodRh](./formatters/medical/blood_rh)
* [bloodGroup](./formatters/medical/blood_group)

### [支払い](./formatters/payment) {.formatter}
* [creditCardType](./formatters/payment/credit_card_type)
* [creditCardNumber](./formatters/payment/credit_card_number)
* [creditCardExpirationDate](./formatters/payment/credit_card_expiration_date)
* [creditCardExpirationDateString](./formatters/payment/credit_card_expiration_date_string)
* [creditCardDetails](./formatters/payment/credit_card_details)
* [iban](./formatters/payment/iban)
* [swiftBicNumber](./formatters/payment/swift_bic_number)
