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
# FakerPHP非公式リファレンス&nbsp;<small>for v1.24.1</small>

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

### [人](./formatters/person/) {.formatter}
* [name](./formatters/person/name.md)
* [firstName](./formatters/person/first_name.md)
* [firstNameMale](./formatters/person/first_name_male.md)
* [firstNameFemale](./formatters/person/first_name_female.md)
* [lastName](./formatters/person/last_name.md)
* [title](./formatters/person/title.md)
* [titleMale](./formatters/person/title_male.md)
* [titleFemale](./formatters/person/title_female.md)
* [kanaName](./formatters/person/kana_name.md)
* [firstKanaName](./formatters/person/first_kana_name.md)
* [firstKanaNameMale](./formatters/person/first_kana_name_male.md)
* [firstKanaNameFemale](./formatters/person/first_kana_name_female.md)
* [lastKanaName](./formatters/person/last_kana_name.md)

### [住所](./formatters/address/) {.formatter}
* [citySuffix](./formatters/address/city_suffix.md)
* [streetSuffix](./formatters/address/street_suffix.md)
* [buildingNumber](./formatters/address/building_number.md)
* [city](./formatters/address/city.md)
* [streetName](./formatters/address/street_name.md)
* [streetAddress](./formatters/address/street_address.md)
* [postcode](./formatters/address/postcode.md)
* [address](./formatters/address/address.md)
* [country](./formatters/address/country.md)
* [latitude](./formatters/address/latitude.md)
* [longitude](./formatters/address/longitude.md)
* [localCoordinates](./formatters/address/local_coordinates.md)
* [postcode1](./formatters/address/postcode1.md)
* [postcode2](./formatters/address/postcode2.md)
* [prefecture](./formatters/address/prefecture.md)
* [ward](./formatters/address/ward.md)
* [areaNumber](./formatters/address/area_number.md)
* [secondaryAddress](./formatters/address/secondary_address.md)

### [電話番号](./formatters/phone_number/) {.formatter}
* [phoneNumber](./formatters/phone_number/phone_number.md)
* [e164PhoneNumber](./formatters/phone_number/e164_phone_number.md)
* [imei](./formatters/phone_number/imei.md)

### [会社](./formatters/company/) {.formatter}
* [company](./formatters/company/company.md)
* [companySuffix](./formatters/company/company_suffix.md)
* [jobTitle](./formatters/company/job_title.md)
* [companyPrefix](./formatters/company/company_prefix.md)

### [文章](./formatters/text/) {.formatter}
* [realText](./formatters/text/real_text.md)
* [realTextBetween](./formatters/text/real_text_between.md)

### [基底](./formatters/base/) {.formatter}
* [randomDigit](./formatters/base/random_digit.md)
* [randomDigitNot](./formatters/base/random_digit_not.md)
* [randomDigitNotNull](./formatters/base/random_digit_not_null.md)
* [randomNumber](./formatters/base/random_number.md)
* [randomFloat](./formatters/base/random_float.md)
* [numberBetween](./formatters/base/number_between.md)
* [randomLetter](./formatters/base/random_letter.md)
* [randomElements](./formatters/base/random_elements.md)
* [randomElement](./formatters/base/random_element.md)
* [shuffle](./formatters/base/shuffle.md)
* [numerify](./formatters/base/numerify.md)
* [lexify](./formatters/base/lexify.md)
* [bothify](./formatters/base/bothify.md)
* [asciify](./formatters/base/asciify.md)
* [regexify](./formatters/base/regexify.md)
* [passthrough](./formatters/base/passthrough.md)
* [randomAscii](./formatters/base/random_ascii.md)
* [randomKey](./formatters/base/random_key.md)
* [shuffleArray](./formatters/base/shuffle_array.md)
* [shuffleString](./formatters/base/shuffle_string.md)
* [toLower](./formatters/base/to_lower.md)
* [toUpper](./formatters/base/to_upper.md)

### [ロレム・イプサム](./formatters/lorem/) {.formatter}
* [word](./formatters/lorem/word.md)
* [words](./formatters/lorem/words.md)
* [sentence](./formatters/lorem/sentence.md)
* [sentences](./formatters/lorem/sentences.md)
* [paragraph](./formatters/lorem/paragraph.md)
* [paragraphs](./formatters/lorem/paragraphs.md)
* [text](./formatters/lorem/text.md)

### [日時](./formatters/date_time/) {.formatter}
* [unixTime](./formatters/date_time/unix_time.md)
* [dateTime](./formatters/date_time/date_time.md)
* [dateTimeAD](./formatters/date_time/date_time_ad.md)
* [iso8601](./formatters/date_time/iso8601.md)
* [date](./formatters/date_time/date.md)
* [time](./formatters/date_time/time.md)
* [dateTimeBetween](./formatters/date_time/date_time_between.md)
* [dateTimeInInterval](./formatters/date_time/date_time_in_interval.md)
* [dateTimeThisCentury](./formatters/date_time/date_time_this_century.md)
* [dateTimeThisDecade](./formatters/date_time/date_time_this_decade.md)
* [dateTimeThisYear](./formatters/date_time/date_time_this_year.md)
* [dateTimeThisMonth](./formatters/date_time/date_time_this_month.md)
* [amPm](./formatters/date_time/am_pm.md)
* [dayOfMonth](./formatters/date_time/day_of_month.md)
* [dayOfWeek](./formatters/date_time/day_of_week.md)
* [month](./formatters/date_time/month.md)
* [monthName](./formatters/date_time/month_name.md)
* [year](./formatters/date_time/year.md)
* [century](./formatters/date_time/century.md)
* [timezone](./formatters/date_time/timezone.md)

### [インターネット](./formatters/internet/) {.formatter}
* [email](./formatters/internet/email.md)
* [safeEmail](./formatters/internet/safe_email.md)
* [freeEmail](./formatters/internet/free_email.md)
* [companyEmail](./formatters/internet/company_email.md)
* [freeEmailDomain](./formatters/internet/free_email_domain.md)
* [safeEmailDomain](./formatters/internet/safe_email_domain.md)
* [userName](./formatters/internet/user_name.md)
* [password](./formatters/internet/password.md)
* [domainName](./formatters/internet/domain_name.md)
* [tld](./formatters/internet/tld.md)
* [url](./formatters/internet/url.md)
* [slug](./formatters/internet/slug.md)
* [ipv4](./formatters/internet/ipv4.md)
* [localIpv4](./formatters/internet/local_ipv4.md)
* [ipv6](./formatters/internet/ipv6.md)
* [macAddress](./formatters/internet/mac_address.md)
* [lastNameAscii](./formatters/internet/last_name_ascii.md)
* [firstNameAscii](./formatters/internet/first_name_ascii.md)

### [ユーザーエージェント](./formatters/user_agent/) {.formatter}
* [macProcessor](./formatters/user_agent/mac_processor.md)
* [linuxProcessor](./formatters/user_agent/linux_processor.md)
* [userAgent](./formatters/user_agent/user_agent.md)
* [chrome](./formatters/user_agent/chrome.md)
* [msedge](./formatters/user_agent/msedge.md)
* [firefox](./formatters/user_agent/firefox.md)
* [safari](./formatters/user_agent/safari.md)
* [opera](./formatters/user_agent/opera.md)
* [internetExplorer](./formatters/user_agent/internet_explorer.md)
* [windowsPlatformToken](./formatters/user_agent/windows_platform_token.md)
* [macPlatformToken](./formatters/user_agent/mac_platform_token.md)
* [iosMobileToken](./formatters/user_agent/ios_mobile_token.md)
* [linuxPlatformToken](./formatters/user_agent/linux_platform_token.md)

### [色](./formatters/color/) {.formatter}
* [hexColor](./formatters/color/hex_color.md)
* [safeHexColor](./formatters/color/safe_hex_color.md)
* [rgbColorAsArray](./formatters/color/rgb_color_as_array.md)
* [rgbColor](./formatters/color/rgb_color.md)
* [rgbCssColor](./formatters/color/rgb_css_color.md)
* [rgbaCssColor](./formatters/color/rgba_css_color.md)
* [safeColorName](./formatters/color/safe_color_name.md)
* [colorName](./formatters/color/color_name.md)
* [hlsColor](./formatters/color/hsl_color.md)

### [ファイル](./formatters/file/) {.formatter}
* [mimeType](./formatters/file/mime_type.md)
* [fileExtension](./formatters/file/file_extension.md)
* [file](./formatters/file/file.md)

### [画像](./formatters/image/) {.formatter}
* [imageUrl](./formatters/image/image_url.md)
* [image](./formatters/image/image.md)

### [UUID](./formatters/uuid/) {.formatter}
* [uuid3](./formatters/uuid/uuid3.md)

### [バーコード](./formatters/barcode/) {.formatter}
* [ean8](./formatters/barcode/ean8.md)
* [ean13](./formatters/barcode/ean13.md)
* [isbn10](./formatters/barcode/isbn10.md)
* [isbn13](./formatters/barcode/isbn13.md)

### [雑多](./formatters/miscellaneous/) {.formatter}
* [boolean](./formatters/miscellaneous/boolean.md)
* [md5](./formatters/miscellaneous/md5.md)
* [sha1](./formatters/miscellaneous/sha1.md)
* [sha256](./formatters/miscellaneous/sha256.md)
* [locale](./formatters/miscellaneous/locale.md)
* [countryCode](./formatters/miscellaneous/country_code.md)
* [countryISOAlpha3](./formatters/miscellaneous/country_iso_alpha3.md)
* [languageCode](./formatters/miscellaneous/language_code.md)
* [currencyCode](./formatters/miscellaneous/currency_code.md)
* [emoji](./formatters/miscellaneous/emoji.md)

### [バイアス](./formatters/biased/) {.formatter}
* [biasedNumberBetween](./formatters/biased/biased_number_between.md)

### [HTMLロレム・イプサム](./formatters/html_lorem/) {.formatter}
* [randomHtml](./formatters/html_lorem/random_html.md)

### [バージョン](./formatters/version/) {.formatter}
* [semver](./formatters/version/semver.md)

### [医療](./formatters/medical/) {.formatter}
* [bloodType](./formatters/medical/blood_type.md)
* [bloodRh](./formatters/medical/blood_rh.md)
* [bloodGroup](./formatters/medical/blood_group.md)

### [支払い](./formatters/payment/) {.formatter}
* [creditCardType](./formatters/payment/credit_card_type.md)
* [creditCardNumber](./formatters/payment/credit_card_number.md)
* [creditCardExpirationDate](./formatters/payment/credit_card_expiration_date.md)
* [creditCardExpirationDateString](./formatters/payment/credit_card_expiration_date_string.md)
* [creditCardDetails](./formatters/payment/credit_card_details.md)
* [iban](./formatters/payment/iban.md)
* [swiftBicNumber](./formatters/payment/swift_bic_number.md)
