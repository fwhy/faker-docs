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
                        '/formatters/person/last_kana_name'
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
                        '/formatters/address/secondary_address'
                    ]
                },
                {
                    title: '電話番号',
                    children: [
                        '/formatters/phone_number/phone_number',
                        '/formatters/phone_number/e164_phone_number',
                        '/formatters/phone_number/imei'
                    ]
                },
                {
                    title: '会社',
                    children: [
                        '/formatters/company/company',
                        '/formatters/company/company_suffix',
                        '/formatters/company/job_title',
                        '/formatters/company/company_prefix'
                    ]
                },
                {
                    title: '文章',
                    children: [
                        '/formatters/text/real_text'
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
                    title: 'UUID',
                    children: [
                        '/formatters/uuid/uuid'
                    ]
                }
            ],
            smoothScroll: true,
        },
        lastUpdated: '最終更新日時'
    },
    markdown: {
        lineNumbers: false
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