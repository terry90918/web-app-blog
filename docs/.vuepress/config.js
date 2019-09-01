module.exports = {
  base: '/app-blog-vuepress/',
  title: 'Terry Chen 的博客',
  description: '技術、生活的筆記',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '大前端',
        items: [
          { text: 'Canvas', link: '/FrontEnd/Canvas/', },
          { text: 'Framework', link: '/FrontEnd/Framework/', },
          { text: 'JavaScript', link: '/FrontEnd/JavaScript/', },
          { text: 'Node.js', link: '/FrontEnd/Node.js/', },
          { text: 'TypeScript', link: '/FrontEnd/TypeScript/', },
        ]
      },
      { text: 'UI 設計', link: '/ui/' },
      /* {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
        ]
      }, */
      {
        text: 'Github',
        link: 'https://github.com/TpWILovePanda',
      },
    ],
    serviceWorker: {
      updatePopup: true
    },
    sidebar: {
      '/canvas/': [
        '',
        'example',
      ],
      '/chrome/': [
        '',
        'extensions',
      ],
      '/': [
        '',
      ],
    },
  },
}