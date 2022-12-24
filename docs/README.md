<style>
h3.formatter + ul {
    display: flex;
    flex-flow: column wrap;
}

@media screen and (min-width: 576px) {
    h3.formatter + ul { flex-flow: row wrap; }
    h3.formatter + ul > li { width: 50%; }
}
</style>
# FakerPHP非公式リファレンス&nbsp;<small>for v1.21.0</small>

Fakerは、ダミーデータを生成するPHPライブラリです。   
データベースの初期データ、体裁の整ったXMLドキュメントの作成、
永続性の入力によるストレステスト、本番サービスから取得したデータの匿名化などにFakerが最適です。  
これは、PerlのData::FakerとRubyのFakerに大きく影響を受けています。

[本家リポジトリ](https://github.com/FakerPHP/Faker/)  
[本家ドキュメント](https://fakerphp.github.io/)  

## インストール
FakePHPはPHP 7.4以上が必要です。

```sh
composer require fakerphp/faker
```

## 使用方法

PSR-0 または PSR-4 を用いたオートロード
```php
require_once 'vendor/autoload.php';
```

またはFakerPHPに同梱された PSR-0 オートローダーを用いて
```php
require_once '/path/to/Faker/src/autoload.php';
```


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
* [realTextBetween](./formatters/text/real_text_between)

### [基底](./formatters/base) {.formatter}
* [randomDigit](./formatters/base/random_digit)
* [randomDigitNot](./formatters/base/random_digit_not)
* [randomDigitNotNull](./formatters/base/random_digit_not_null)
* [randomNumber](./formatters/base/random_number)
* [randomFloat](./formatters/base/random_float)
* [numberBetween](./formatters/base/number_between)
* [randomLetter](./formatters/base/random_letter)
* [randomElements](./formatters/base/random_elements)
* [randomElement](./formatters/base/random_element)
* [shuffle](./formatters/base/shuffle)
* [numerify](./formatters/base/numerify)
* [lexify](./formatters/base/lexify)
* [bothify](./formatters/base/bothify)
* [asciify](./formatters/base/asciify)
* [regexify](./formatters/base/regexify)
* [passthroug](./formatters/base/passthrough)
* [randomAscii](./formatters/base/random_ascii)
* [randomKey](./formatters/base/random_key)
* [shuffleArray](./formatters/base/shuffle_array)
* [shuffleString](./formatters/base/shuffle_string)
* [toLower](./formatters/base/to_lower)
* [toUpper](./formatters/base/to_upper)

### [ロレム・イプサム](./formatters/lorem) {.formatter}
* [word](./formatters/lorem/ward)
* [words](./formatters/lorem/wards)
* [sentence](./formatters/lorem/sentence)
* [sentences](./formatters/lorem/sentences)
* [paragraph](./formatters/lorem/paragraph)
* [paragraphs](./formatters/lorem/paragraphs)
* [text](./formatters/lorem/text)

### [日時](./formatters/date_time) {.formatter}
* [unixTime](./formatters/date_time/unix_time)
* [dateTime](./formatters/date_time/date_time)
* [dateTimeAD](./formatters/date_time/date_time_ad)
* [iso8601](./formatters/date_time/iso8601)
* [date](./formatters/date_time/date)
* [time](./formatters/date_time/time)
* [dateTimeBetween](./formatters/date_time/date_time_between)
* [dateTimeInInterval](./formatters/date_time/date_time_in_interval)
* [dateTimeThisCentury](./formatters/date_time/date_time_this_century)
* [dateTimeThisDecade](./formatters/date_time/date_time_this_decade)
* [dateTimeThisYear](./formatters/date_time/date_time_this_year)
* [dateTimeThisMonth](./formatters/date_time/date_time_this_month)
* [amPm](./formatters/date_time/am_pm)
* [dayOfMonth](./formatters/date_time/day_of_month)
* [dayOfWeek](./formatters/date_time/day_of_week)
* [month](./formatters/date_time/month)
* [monthName](./formatters/date_time/month_name)
* [year](./formatters/date_time/year)
* [century](./formatters/date_time/century)
* [timezone](./formatters/date_time/timezone)

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
* [macAddress](./formatters/internet/mac_address)
* [lastNameAscii](./formatters/internet/last_name_ascii)
* [firstNameAscii](./formatters/internet/first_name_ascii)

### [ユーザーエージェント](./formatters/user_agent) {.formatter}
* [macProcessor](./formatters/user_agent/mac_processor)
* [linuxProcessor](./formatters/user_agent/linux_processor)
* [userAgent](./formatters/user_agent/user_agent)
* [chrome](./formatters/user_agent/chrome)
* [msedge](./formatters/user_agent/msedge)
* [firefox](./formatters/user_agent/firefox)
* [safari](./formatters/user_agent/safari)
* [opera](./formatters/user_agent/opera)
* [internetExplorer](./formatters/user_agent/internet_explorer)
* [windowsPlatformToken](./formatters/user_agent/windows_platform_token)
* [macPlatformToken](./formatters/user_agent/mac_platform_token)
* [iosMobileToken](./formatters/user_agent/ios_mobile_token)
* [linuxPlatformToken](./formatters/user_agent/linux_platform_token)

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
* [uuid3](./formatters/uuid/uuid3)

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

### [バージョン](./formatters/version) {.formatter}
* [semver](./formatters/version/semver)

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
