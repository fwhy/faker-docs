import{_ as n,r as s,o as m,c as i,a as t,b as e,d as l,w as r,e as d}from"./app-yU-VTVEq.js";const u={},f=t("h1",{id:"fakerphp非公式リファレンス-for-v1-23-0",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#fakerphp非公式リファレンス-for-v1-23-0","aria-hidden":"true"},"#"),e(" FakerPHP非公式リファレンス "),t("small",null,"for v1.23.0")],-1),_=t("p",null,[e("Fakerは、ダミーデータを生成するPHPライブラリです。"),t("br"),e(" データベースの初期データ、体裁の整ったXMLドキュメントの作成、 永続性の入力によるストレステスト、本番サービスから取得したデータの匿名化などにFakerが最適です。"),t("br"),e(" これは、PerlのData::FakerとRubyのFakerに大きく影響を受けています。")],-1),h={href:"https://github.com/FakerPHP/Faker/",target:"_blank",rel:"noopener noreferrer"},c=t("br",null,null,-1),p={href:"https://fakerphp.github.io/",target:"_blank",rel:"noopener noreferrer"},b=d(`<h2 id="インストール" tabindex="-1"><a class="header-anchor" href="#インストール" aria-hidden="true">#</a> インストール</h2><p>FakePHPはPHP 7.4以上が必要です。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require fakerphp/faker
</code></pre></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><p>PSR-0 または PSR-4 を用いたオートロード</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">require_once</span> <span class="token string single-quoted-string">&#39;vendor/autoload.php&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>またはFakerPHPに同梱された PSR-0 オートローダーを用いて</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token keyword">require_once</span> <span class="token string single-quoted-string">&#39;/path/to/Faker/src/autoload.php&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="フォーマッター" tabindex="-1"><a class="header-anchor" href="#フォーマッター" aria-hidden="true">#</a> <a href="./formatters">フォーマッター</a></h2><h3 class="formatter" id="人" tabindex="-1"><a class="header-anchor" href="#人" aria-hidden="true">#</a> <a href="./formatters/person">人</a></h3>`,10),g=t("h3",{class:"formatter",id:"住所",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#住所","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/address"},"住所")],-1),x=t("h3",{class:"formatter",id:"電話番号",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#電話番号","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/phone_number"},"電話番号")],-1),y=t("h3",{class:"formatter",id:"会社",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#会社","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/company"},"会社")],-1),k=t("h3",{class:"formatter",id:"文章",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#文章","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/text"},"文章")],-1),N=t("h3",{class:"formatter",id:"基底",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#基底","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/base"},"基底")],-1),w=t("h3",{class:"formatter",id:"ロレム・イプサム",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ロレム・イプサム","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/lorem"},"ロレム・イプサム")],-1),v=t("h3",{class:"formatter",id:"日時",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#日時","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/date_time"},"日時")],-1),T=t("h3",{class:"formatter",id:"インターネット",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#インターネット","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/internet"},"インターネット")],-1),P=t("h3",{class:"formatter",id:"ユーザーエージェント",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ユーザーエージェント","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/user_agent"},"ユーザーエージェント")],-1),C=t("h3",{class:"formatter",id:"色",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#色","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/color"},"色")],-1),E=t("h3",{class:"formatter",id:"ファイル",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ファイル","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/file"},"ファイル")],-1),F=t("h3",{class:"formatter",id:"画像",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#画像","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/image"},"画像")],-1),A=t("h3",{class:"formatter",id:"uuid",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#uuid","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/uuid"},"UUID")],-1),D=t("h3",{class:"formatter",id:"バーコード",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#バーコード","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/barcode"},"バーコード")],-1),S=t("h3",{class:"formatter",id:"雑多",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#雑多","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/miscellaneous"},"雑多")],-1),H=t("h3",{class:"formatter",id:"バイアス",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#バイアス","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/biased"},"バイアス")],-1),B=t("h3",{class:"formatter",id:"htmlロレム・イプサム",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#htmlロレム・イプサム","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/html_lorem"},"HTMLロレム・イプサム")],-1),L=t("h3",{class:"formatter",id:"バージョン",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#バージョン","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/version"},"バージョン")],-1),M=t("h3",{class:"formatter",id:"医療",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#医療","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/medical"},"医療")],-1),I=t("h3",{class:"formatter",id:"支払い",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#支払い","aria-hidden":"true"},"#"),e(),t("a",{href:"./formatters/payment"},"支払い")],-1);function R(q,K){const o=s("ExternalLinkIcon"),a=s("RouterLink");return m(),i("div",null,[f,_,t("p",null,[t("a",h,[e("本家リポジトリ"),l(o)]),c,t("a",p,[e("本家ドキュメント"),l(o)])]),b,t("ul",null,[t("li",null,[l(a,{to:"/formatters/person/name.html"},{default:r(()=>[e("name")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/first_name.html"},{default:r(()=>[e("firstName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/first_name_male.html"},{default:r(()=>[e("firstNameMale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/first_name_female.html"},{default:r(()=>[e("firstNameFemale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/last_name.html"},{default:r(()=>[e("lastName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/title.html"},{default:r(()=>[e("title")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/title_male.html"},{default:r(()=>[e("titleMale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/title_female.html"},{default:r(()=>[e("titleFemale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/kana_name.html"},{default:r(()=>[e("kanaName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/first_kana_name.html"},{default:r(()=>[e("firstKanaName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/first_kana_name_male.html"},{default:r(()=>[e("firstKanaNameMale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/first_kana_name_female.html"},{default:r(()=>[e("firstKanaNameFemale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/person/last_kana_name.html"},{default:r(()=>[e("lastKanaName")]),_:1})])]),g,t("ul",null,[t("li",null,[l(a,{to:"/formatters/address/city_suffix.html"},{default:r(()=>[e("citySuffix")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/street_suffix.html"},{default:r(()=>[e("streetSuffix")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/building_number.html"},{default:r(()=>[e("buildingNumber")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/city.html"},{default:r(()=>[e("city")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/street_name.html"},{default:r(()=>[e("streetName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/street_address.html"},{default:r(()=>[e("streetAddress")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/postcode.html"},{default:r(()=>[e("postcode")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/address.html"},{default:r(()=>[e("address")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/country.html"},{default:r(()=>[e("country")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/latitude.html"},{default:r(()=>[e("latitude")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/longitude.html"},{default:r(()=>[e("longitude")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/local_coordinates.html"},{default:r(()=>[e("localCoordinates")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/postcode1.html"},{default:r(()=>[e("postcode1")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/postcode2.html"},{default:r(()=>[e("postcode2")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/prefecture.html"},{default:r(()=>[e("prefecture")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/ward.html"},{default:r(()=>[e("ward")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/area_number.html"},{default:r(()=>[e("areaNumber")]),_:1})]),t("li",null,[l(a,{to:"/formatters/address/secondary_address.html"},{default:r(()=>[e("secondaryAddress")]),_:1})])]),x,t("ul",null,[t("li",null,[l(a,{to:"/formatters/phone_number/phone_number.html"},{default:r(()=>[e("phoneNumber")]),_:1})]),t("li",null,[l(a,{to:"/formatters/phone_number/e164_phone_number.html"},{default:r(()=>[e("e164PhoneNumber")]),_:1})]),t("li",null,[l(a,{to:"/formatters/phone_number/imei.html"},{default:r(()=>[e("imei")]),_:1})])]),y,t("ul",null,[t("li",null,[l(a,{to:"/formatters/company/company.html"},{default:r(()=>[e("company")]),_:1})]),t("li",null,[l(a,{to:"/formatters/company/company_suffix.html"},{default:r(()=>[e("companySuffix")]),_:1})]),t("li",null,[l(a,{to:"/formatters/company/job_title.html"},{default:r(()=>[e("jobTitle")]),_:1})]),t("li",null,[l(a,{to:"/formatters/company/company_prefix.html"},{default:r(()=>[e("companyPrefix")]),_:1})])]),k,t("ul",null,[t("li",null,[l(a,{to:"/formatters/text/real_text.html"},{default:r(()=>[e("realText")]),_:1})]),t("li",null,[l(a,{to:"/formatters/text/real_text_between.html"},{default:r(()=>[e("realTextBetween")]),_:1})])]),N,t("ul",null,[t("li",null,[l(a,{to:"/formatters/base/random_digit.html"},{default:r(()=>[e("randomDigit")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_digit_not.html"},{default:r(()=>[e("randomDigitNot")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_digit_not_null.html"},{default:r(()=>[e("randomDigitNotNull")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_number.html"},{default:r(()=>[e("randomNumber")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_float.html"},{default:r(()=>[e("randomFloat")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/number_between.html"},{default:r(()=>[e("numberBetween")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_letter.html"},{default:r(()=>[e("randomLetter")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_elements.html"},{default:r(()=>[e("randomElements")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_element.html"},{default:r(()=>[e("randomElement")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/shuffle.html"},{default:r(()=>[e("shuffle")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/numerify.html"},{default:r(()=>[e("numerify")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/lexify.html"},{default:r(()=>[e("lexify")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/bothify.html"},{default:r(()=>[e("bothify")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/asciify.html"},{default:r(()=>[e("asciify")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/regexify.html"},{default:r(()=>[e("regexify")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/passthrough.html"},{default:r(()=>[e("passthrough")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_ascii.html"},{default:r(()=>[e("randomAscii")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/random_key.html"},{default:r(()=>[e("randomKey")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/shuffle_array.html"},{default:r(()=>[e("shuffleArray")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/shuffle_string.html"},{default:r(()=>[e("shuffleString")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/to_lower.html"},{default:r(()=>[e("toLower")]),_:1})]),t("li",null,[l(a,{to:"/formatters/base/to_upper.html"},{default:r(()=>[e("toUpper")]),_:1})])]),w,t("ul",null,[t("li",null,[l(a,{to:"/formatters/lorem/word.html"},{default:r(()=>[e("word")]),_:1})]),t("li",null,[l(a,{to:"/formatters/lorem/words.html"},{default:r(()=>[e("words")]),_:1})]),t("li",null,[l(a,{to:"/formatters/lorem/sentence.html"},{default:r(()=>[e("sentence")]),_:1})]),t("li",null,[l(a,{to:"/formatters/lorem/sentences.html"},{default:r(()=>[e("sentences")]),_:1})]),t("li",null,[l(a,{to:"/formatters/lorem/paragraph.html"},{default:r(()=>[e("paragraph")]),_:1})]),t("li",null,[l(a,{to:"/formatters/lorem/paragraphs.html"},{default:r(()=>[e("paragraphs")]),_:1})]),t("li",null,[l(a,{to:"/formatters/lorem/text.html"},{default:r(()=>[e("text")]),_:1})])]),v,t("ul",null,[t("li",null,[l(a,{to:"/formatters/date_time/unix_time.html"},{default:r(()=>[e("unixTime")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time.html"},{default:r(()=>[e("dateTime")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_ad.html"},{default:r(()=>[e("dateTimeAD")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/iso8601.html"},{default:r(()=>[e("iso8601")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date.html"},{default:r(()=>[e("date")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/time.html"},{default:r(()=>[e("time")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_between.html"},{default:r(()=>[e("dateTimeBetween")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_in_interval.html"},{default:r(()=>[e("dateTimeInInterval")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_this_century.html"},{default:r(()=>[e("dateTimeThisCentury")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_this_decade.html"},{default:r(()=>[e("dateTimeThisDecade")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_this_year.html"},{default:r(()=>[e("dateTimeThisYear")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/date_time_this_month.html"},{default:r(()=>[e("dateTimeThisMonth")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/am_pm.html"},{default:r(()=>[e("amPm")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/day_of_month.html"},{default:r(()=>[e("dayOfMonth")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/day_of_week.html"},{default:r(()=>[e("dayOfWeek")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/month.html"},{default:r(()=>[e("month")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/month_name.html"},{default:r(()=>[e("monthName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/year.html"},{default:r(()=>[e("year")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/century.html"},{default:r(()=>[e("century")]),_:1})]),t("li",null,[l(a,{to:"/formatters/date_time/timezone.html"},{default:r(()=>[e("timezone")]),_:1})])]),T,t("ul",null,[t("li",null,[l(a,{to:"/formatters/internet/email.html"},{default:r(()=>[e("email")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/safe_email.html"},{default:r(()=>[e("safeEmail")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/free_email.html"},{default:r(()=>[e("freeEmail")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/company_email.html"},{default:r(()=>[e("companyEmail")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/free_email_domain.html"},{default:r(()=>[e("freeEmailDomain")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/safe_email_domain.html"},{default:r(()=>[e("safeEmailDomain")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/user_name.html"},{default:r(()=>[e("userName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/password.html"},{default:r(()=>[e("password")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/domain_name.html"},{default:r(()=>[e("domainName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/tld.html"},{default:r(()=>[e("tld")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/url.html"},{default:r(()=>[e("url")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/slug.html"},{default:r(()=>[e("slug")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/ipv4.html"},{default:r(()=>[e("ipv4")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/local_ipv4.html"},{default:r(()=>[e("localIpv4")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/ipv6.html"},{default:r(()=>[e("ipv6")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/mac_address.html"},{default:r(()=>[e("macAddress")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/last_name_ascii.html"},{default:r(()=>[e("lastNameAscii")]),_:1})]),t("li",null,[l(a,{to:"/formatters/internet/first_name_ascii.html"},{default:r(()=>[e("firstNameAscii")]),_:1})])]),P,t("ul",null,[t("li",null,[l(a,{to:"/formatters/user_agent/mac_processor.html"},{default:r(()=>[e("macProcessor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/linux_processor.html"},{default:r(()=>[e("linuxProcessor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/user_agent.html"},{default:r(()=>[e("userAgent")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/chrome.html"},{default:r(()=>[e("chrome")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/msedge.html"},{default:r(()=>[e("msedge")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/firefox.html"},{default:r(()=>[e("firefox")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/safari.html"},{default:r(()=>[e("safari")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/opera.html"},{default:r(()=>[e("opera")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/internet_explorer.html"},{default:r(()=>[e("internetExplorer")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/windows_platform_token.html"},{default:r(()=>[e("windowsPlatformToken")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/mac_platform_token.html"},{default:r(()=>[e("macPlatformToken")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/ios_mobile_token.html"},{default:r(()=>[e("iosMobileToken")]),_:1})]),t("li",null,[l(a,{to:"/formatters/user_agent/linux_platform_token.html"},{default:r(()=>[e("linuxPlatformToken")]),_:1})])]),C,t("ul",null,[t("li",null,[l(a,{to:"/formatters/color/hex_color.html"},{default:r(()=>[e("hexColor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/safe_hex_color.html"},{default:r(()=>[e("safeHexColor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/rgb_color_as_array.html"},{default:r(()=>[e("rgbColorAsArray")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/rgb_color.html"},{default:r(()=>[e("rgbColor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/rgb_css_color.html"},{default:r(()=>[e("rgbCssColor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/rgba_css_color.html"},{default:r(()=>[e("rgbaCssColor")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/safe_color_name.html"},{default:r(()=>[e("safeColorName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/color_name.html"},{default:r(()=>[e("colorName")]),_:1})]),t("li",null,[l(a,{to:"/formatters/color/hsl_color.html"},{default:r(()=>[e("hlsColor")]),_:1})])]),E,t("ul",null,[t("li",null,[l(a,{to:"/formatters/file/mime_type.html"},{default:r(()=>[e("mimeType")]),_:1})]),t("li",null,[l(a,{to:"/formatters/file/file_extension.html"},{default:r(()=>[e("fileExtension")]),_:1})]),t("li",null,[l(a,{to:"/formatters/file/file.html"},{default:r(()=>[e("file")]),_:1})])]),F,t("ul",null,[t("li",null,[l(a,{to:"/formatters/image/image_url.html"},{default:r(()=>[e("imageUrl")]),_:1})]),t("li",null,[l(a,{to:"/formatters/image/image.html"},{default:r(()=>[e("image")]),_:1})])]),A,t("ul",null,[t("li",null,[l(a,{to:"/formatters/uuid/uuid3.html"},{default:r(()=>[e("uuid3")]),_:1})])]),D,t("ul",null,[t("li",null,[l(a,{to:"/formatters/barcode/ean8.html"},{default:r(()=>[e("ean8")]),_:1})]),t("li",null,[l(a,{to:"/formatters/barcode/ean13.html"},{default:r(()=>[e("ean13")]),_:1})]),t("li",null,[l(a,{to:"/formatters/barcode/isbn10.html"},{default:r(()=>[e("isbn10")]),_:1})]),t("li",null,[l(a,{to:"/formatters/barcode/isbn13.html"},{default:r(()=>[e("isbn13")]),_:1})])]),S,t("ul",null,[t("li",null,[l(a,{to:"/formatters/miscellaneous/boolean.html"},{default:r(()=>[e("boolean")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/md5.html"},{default:r(()=>[e("md5")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/sha1.html"},{default:r(()=>[e("sha1")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/sha256.html"},{default:r(()=>[e("sha256")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/locale.html"},{default:r(()=>[e("locale")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/country_code.html"},{default:r(()=>[e("countryCode")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/country_iso_alpha3.html"},{default:r(()=>[e("countryISOAlpha3")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/language_code.html"},{default:r(()=>[e("languageCode")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/currency_code.html"},{default:r(()=>[e("currencyCode")]),_:1})]),t("li",null,[l(a,{to:"/formatters/miscellaneous/emoji.html"},{default:r(()=>[e("emoji")]),_:1})])]),H,t("ul",null,[t("li",null,[l(a,{to:"/formatters/biased/biased_number_between.html"},{default:r(()=>[e("biasedNumberBetween")]),_:1})])]),B,t("ul",null,[t("li",null,[l(a,{to:"/formatters/html_lorem/random_html.html"},{default:r(()=>[e("randomHtml")]),_:1})])]),L,t("ul",null,[t("li",null,[l(a,{to:"/formatters/version/semver.html"},{default:r(()=>[e("semver")]),_:1})])]),M,t("ul",null,[t("li",null,[l(a,{to:"/formatters/medical/blood_type.html"},{default:r(()=>[e("bloodType")]),_:1})]),t("li",null,[l(a,{to:"/formatters/medical/blood_rh.html"},{default:r(()=>[e("bloodRh")]),_:1})]),t("li",null,[l(a,{to:"/formatters/medical/blood_group.html"},{default:r(()=>[e("bloodGroup")]),_:1})])]),I,t("ul",null,[t("li",null,[l(a,{to:"/formatters/payment/credit_card_type.html"},{default:r(()=>[e("creditCardType")]),_:1})]),t("li",null,[l(a,{to:"/formatters/payment/credit_card_number.html"},{default:r(()=>[e("creditCardNumber")]),_:1})]),t("li",null,[l(a,{to:"/formatters/payment/credit_card_expiration_date.html"},{default:r(()=>[e("creditCardExpirationDate")]),_:1})]),t("li",null,[l(a,{to:"/formatters/payment/credit_card_expiration_date_string.html"},{default:r(()=>[e("creditCardExpirationDateString")]),_:1})]),t("li",null,[l(a,{to:"/formatters/payment/credit_card_details.html"},{default:r(()=>[e("creditCardDetails")]),_:1})]),t("li",null,[l(a,{to:"/formatters/payment/iban.html"},{default:r(()=>[e("iban")]),_:1})]),t("li",null,[l(a,{to:"/formatters/payment/swift_bic_number.html"},{default:r(()=>[e("swiftBicNumber")]),_:1})])])])}const U=n(u,[["render",R],["__file","index.html.vue"]]);export{U as default};