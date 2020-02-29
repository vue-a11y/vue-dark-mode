module.exports = {
  title: 'Vue dark-mode',
  description: '',
  serviceWorker: true,  
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vue-dark-mode',
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'How to',
            link: '/demos/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/no-filter.md',
              '/guide/own-style.md',
              '/guide/storage.md',
              '/guide/meta-theme-color.md',
              '/guide/accessibility.md'
            ]
          },
          {
            title: 'How to',
            collapsable: false,
            children: [
              '/demos/cdn.md',
              '/demos/spa-vue.md',
              '/demos/nuxt.md',
              '/demos/vuepress.md',
              '/demos/tailwind.md'
            ]
          }
        ]
      }
    }
  }
}