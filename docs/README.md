---
home: true
heroImage: /hero.png
heroText: 歡迎來到 Terry Chen 的博客
actionText: 進入博客 →
actionLink: /frontend/
features:
- title: 簡潔至上
  details: 以 Markdown 為中心的項目結構，以最少的配置幫助你專注於寫作。
- title: Vue 驅動
  details: 享受 Vue + webpack 的開發體驗，可以在 Markdown 中使用 Vue 組件，又可以使用 Vue 來開發自定義主題。
- title: 高性能
  details: VuePress 會為每個頁面預渲染生成靜態的 HTML，同時，每個頁面被加載的時候，將作為 SPA 運行。
footer: MIT Licensed | Copyright © 2019
---

# 像數 1, 2, 3 一樣容易

``` bash
# 安裝
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一個 markdown 文件
echo '# Hello VuePress!' > README.md

# 開始寫作
vuepress dev .

# 構建靜態文件
vuepress build .
```

::: warning 注意
請確保你的 Node.js 版本 >= 10。
:::
