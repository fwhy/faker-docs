module.exports = {
    title: 'Faker非公式リファレンス',
    base: '/faker-docs/',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'フォーマッター', link: '/formatters/'},
        ],
        sidebar: {
            '/formatters/' : [
                {
                    title: '基底',
                    children: [
                        '/formatters/base/random_digit',
                        '/formatters/base/random_digit_not',
                        '/formatters/base/random_digit_not_null',
                        '/formatters/base/random_float',
                        '/formatters/base/random_number'
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
                    ]
                },
                {
                    title: '住所',
                    children: [
                        '/formatters/address/city_suffix'
                    ]
                }
            ]
        }
    },
    markdown: {
        lineNumbers: false
    }
}