const format = require('date-fns/format');
const parse = require('date-fns/parse');

module.exports = {
    title: 'FakerPHP非公式リファレンス',
    base: '/faker-docs/',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    head: [
        ['meta', {name: 'google-site-verification', content: 'SI8vkpwgHefkAMieimoPyz14ykQUG0A7608PcnkR6YQ'}],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/images/logo180.png'}],
        ['meta', {name: 'application-name', content: this.name}],
        ['meta', {name: 'msapplication-square70x70logo', content: '/images/logo70.png'}],
        ['meta', {name: 'msapplication-square150x150logo', content: '/images/logo150.png'}],
        ['meta', {name: 'msapplication-square310x310logo', content: '/images/logo310.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#8892bf'}],
    ],
    themeConfig: {
        domain: 'https://fwhy.github.io/faker-docs',
        smoothScroll: true,
        repo: 'fwhy/faker-docs',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'フォーマッター', link: '/formatters/'},
        ],
        sidebar: {
            '/formatters/': [
                {
                    title: '人',
                    children: [
                        '/formatters/person/name',
                        '/formatters/person/first_name',
                        '/formatters/person/first_name_male',
                        '/formatters/person/first_name_female',
                        '/formatters/person/last_name',
                        '/formatters/person/title',
                        '/formatters/person/title_male',
                        '/formatters/person/title_female',
                        '/formatters/person/kana_name',
                        '/formatters/person/first_kana_name',
                        '/formatters/person/first_kana_name_male',
                        '/formatters/person/first_kana_name_female',
                        '/formatters/person/last_kana_name',
                    ]
                },
                {
                    title: '住所',
                    children: [
                        '/formatters/address/city_suffix',
                        '/formatters/address/street_suffix',
                        '/formatters/address/building_number',
                        '/formatters/address/city',
                        '/formatters/address/street_name',
                        '/formatters/address/street_address',
                        '/formatters/address/postcode',
                        '/formatters/address/address',
                        '/formatters/address/country',
                        '/formatters/address/latitude',
                        '/formatters/address/longitude',
                        '/formatters/address/local_coordinates',
                        '/formatters/address/postcode1',
                        '/formatters/address/postcode2',
                        '/formatters/address/prefecture',
                        '/formatters/address/ward',
                        '/formatters/address/area_number',
                        '/formatters/address/secondary_address',
                    ]
                },
                {
                    title: '電話番号',
                    children: [
                        '/formatters/phone_number/phone_number',
                        '/formatters/phone_number/e164_phone_number',
                        '/formatters/phone_number/imei',
                    ]
                },
                {
                    title: '会社',
                    children: [
                        '/formatters/company/company',
                        '/formatters/company/company_suffix',
                        '/formatters/company/job_title',
                        '/formatters/company/company_prefix',
                    ]
                },
                {
                    title: '文章',
                    children: [
                        '/formatters/text/real_text',
                    ]
                },
                {
                    title: '基底',
                    children: [
                        '/formatters/base/random_digit',
                        '/formatters/base/random_digit_not_null',
                        '/formatters/base/random_digit_not',
                        '/formatters/base/random_number',
                        '/formatters/base/random_float',
                        '/formatters/base/number_between',
                        '/formatters/base/passthrough',
                        '/formatters/base/random_letter',
                        '/formatters/base/random_ascii',
                        '/formatters/base/random_elements',
                        '/formatters/base/random_element',
                        '/formatters/base/random_key',
                        '/formatters/base/shuffle',
                        '/formatters/base/shuffle_array',
                        '/formatters/base/shuffle_string',
                        '/formatters/base/numerify',
                        '/formatters/base/lexify',
                        '/formatters/base/bothify',
                        '/formatters/base/asciify',
                        '/formatters/base/regexify',
                        '/formatters/base/to_lower',
                        '/formatters/base/to_upper',
                    ]
                },
                {
                    title: 'ロレム・イプサム',
                    children: [
                        '/formatters/lorem/word',
                        '/formatters/lorem/words',
                    ]
                },
                {
                    title: '日時',
                    children: [
                        '/formatters/date_time/unix_time',
                        '/formatters/date_time/date_time',
                        '/formatters/date_time/date_time_ad',
                        '/formatters/date_time/iso8601',
                    ]
                },
                {
                    title: 'インターネット',
                    children: [
                        '/formatters/internet/email',
                        '/formatters/internet/safe_email',
                        '/formatters/internet/free_email',
                        '/formatters/internet/company_email',
                        '/formatters/internet/free_email_domain',
                        '/formatters/internet/safe_email_domain',
                        '/formatters/internet/user_name',
                        '/formatters/internet/password',
                        '/formatters/internet/domain_name',
                        '/formatters/internet/tld',
                        '/formatters/internet/url',
                        '/formatters/internet/slug',
                        '/formatters/internet/ipv4',
                        '/formatters/internet/local_ipv4',
                        '/formatters/internet/ipv6',
                        '/formatters/internet/mac_address',
                    ]
                },
                {
                    title: '色',
                    children: [
                        '/formatters/color/hex_color',
                        '/formatters/color/safe_hex_color',
                        '/formatters/color/rgb_color_as_array',
                        '/formatters/color/rgb_color',
                        '/formatters/color/rgb_css_color',
                        '/formatters/color/rgba_css_color',
                        '/formatters/color/safe_color_name',
                        '/formatters/color/color_name',
                        '/formatters/color/hsl_color',
                    ]
                },
                {
                    title: 'ファイル',
                    children: [
                        '/formatters/file/mime_type',
                        '/formatters/file/file_extension',
                        '/formatters/file/file',
                    ]
                },
                {
                    title: '画像',
                    children: [
                        '/formatters/image/image_url',
                        '/formatters/image/image',
                    ]
                },
                {
                    title: 'UUID',
                    children: [
                        '/formatters/uuid/uuid',
                    ]
                },
                {
                    title: 'バーコード',
                    children: [
                        '/formatters/barcode/ean13',
                        '/formatters/barcode/ean8',
                        '/formatters/barcode/isbn10',
                        '/formatters/barcode/isbn13',
                    ]
                },
                {
                    title: '雑多',
                    children: [
                        '/formatters/miscellaneous/boolean',
                        '/formatters/miscellaneous/md5',
                        '/formatters/miscellaneous/sha1',
                        '/formatters/miscellaneous/sha256',
                        '/formatters/miscellaneous/locale',
                        '/formatters/miscellaneous/country_code',
                        '/formatters/miscellaneous/country_iso_alpha3',
                        '/formatters/miscellaneous/language_code',
                        '/formatters/miscellaneous/currency_code',
                        '/formatters/miscellaneous/emoji',
                    ],
                },
                {
                    title: 'バイアス',
                    children: [
                        '/formatters/biased/biased_number_between',
                    ]
                },
                {
                    title: 'HTMLロレム・イプサム',
                    children: [
                        '/formatters/html_lorem/random_html',
                    ]
                },
                {
                    title: '医療',
                    children:[
                        '/formatters/medical/blood_type',
                        '/formatters/medical/blood_rh',
                        '/formatters/medical/blood_group',
                    ],
                },
                {
                    title: '支払い',
                    children: [
                        '/formatters/payment/credit_card_type',
                        '/formatters/payment/credit_card_number',
                        '/formatters/payment/credit_card_expiration_date',
                        '/formatters/payment/credit_card_expiration_date_string',
                        '/formatters/payment/credit_card_details',
                        '/formatters/payment/iban',
                        '/formatters/payment/swift_bic_number',
                    ],
                },
            ],
            smoothScroll: true,
        },
        lastUpdated: '最終更新日時'
    },
    markdown: {
        lineNumbers: false,
        extendMarkdown: md => {
            md.use(require('markdown-it-attrs'))
        }
    },
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                return format(timestamp, 'yyyy-MM-dd kk:mm:ss');
            }
        },
        'seo': {
            modifiedAt: $page => $page.lastUpdated && parse($page.lastUpdated, 'yyyy-MM-dd kk:mm:ss', new Date()),
        },
        'sitemap': {
            hostname: 'https://fwhy.github.io/faker-docs',
            dateFormatter: time => parse(time, 'yyyy-MM-dd kk:mm:ss', new Date()).toISOString()
        },
        'feed': {
            canonical_base: 'https://fwhy.github.io/faker-docs',
        },
        '@vuepress/back-to-top': {}
    }
}