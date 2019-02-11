module.exports = {
  base: '/app-blog-vuepress/',
  title: 'F2E Go',
  description: '前端工程師的旅程之路 - VuePress',
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
    nav: [
      {
        text: 'Canvas',
        link: '/canvas/',
      },
      {
        text: 'Chrome',
        link: '/chrome/',
      },
      {
        text: 'Github',
        link: 'https://github.com/TpWILovePanda',
      },
    ],
    serviceWorker: {
      updatePopup: true
    },
  },
  // locales: {
  //   '/zh/TW': {
  //     lang: '繁體中文',
  //     title: 'VuePress',
  //     description: 'Vue 驅動的靜態網站生成器'
  //   },
  //   '/zh/CN': {
  //     lang: '簡體中文',
  //     title: 'VuePress',
  //     description: 'Vue 驱动的静态网站生成器'
  //   },
  //   '/en/US': {
  //     lang: 'en-US',
  //     title: 'VuePress',
  //     description: 'Vue-powered Static Site Generator'
  //   },
  // }
}