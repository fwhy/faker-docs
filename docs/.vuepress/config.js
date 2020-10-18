module.exports = {
    title: 'Faker非公式リファレンス',
    base: '/faker-docs/',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    themeConfig: {
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
                    ]
                },
                {
                    title: 'ロレム',
                    children: [
                        '/formatters/lorem/word'
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
                }
            ],
            smoothScroll: true,
        },
        lastUpdated: '最終更新日時',

    },
    markdown: {
        lineNumbers: false
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const format = require('date-fns/format');
                    return format(timestamp, 'yyyy-MM-dd kk:mm:ss');
                }
            }
        ]
    ]
}