module.exports = {
  base: '/',
  title: 'TienYi Chen 博客',
  description: '生活、技術',
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
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '大前端',
        items: [
          { text: 'Canvas', link: '/frontend/canvas/', },
          { text: 'Framework', link: '/frontend/framework/', },
          { text: 'Hexo', link: '/frontend/hexo/', },
          { text: 'JavaScript', link: '/frontend/javascript/', },
          { text: 'Node.js', link: '/frontend/nodejs/', },
          { text: 'TypeScript', link: '/frontend/typescript/', },
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
        link: 'https://github.com/terry90918',
      },
    ],
    serviceWorker: {
      updatePopup: true
    },
  },
}