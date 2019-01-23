module.exports = {
  base: '/app-blog-vuepress/',
  title: 'TY',
  description: 'Terry.TY Chen Blog',
  themeConfig: {
    nav: [
      {
        text: '文章',
        link: '/article/'
      },
      {
        text: 'Github',
        link: 'https://github.com/TpWILovePanda'
      },
      {
        text: 'VuePress',
        items: [{
            text: '繁體中文',
            link: 'https://vuepress.vuejs.org/zh/'
          },
          {
            text: 'English',
            link: 'https://vuepress.vuejs.org/'
          }
        ]
      },
    ],
    sidebar: [
      '/',
      '/demo/'
    ]
  },
}