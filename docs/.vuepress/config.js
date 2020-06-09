module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  title: 'Vue dark-mode',
  description: 'A component that helps to implement dark mode and other color modes in your Vue application.',
  serviceWorker: true,
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
  ],
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vue-dark-mode',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    colorMode: {
      props: {
        modes: ['light', 'dark', 'system', 'sepia']
      }
    },
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
            link: '/howto/'
          }
        ],
        sidebar: [
          '/',
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/class-naming.md',
              '/guide/modes.md',
              '/guide/events.md',
              '/guide/storage.md',
              '/guide/meta-theme-color.md',
              '/guide/accessibility.md',
              '/guide/examples.md'
            ]
          },
          {
            title: 'How to',
            collapsable: false,
            children: [
              '/howto/',
              '/howto/nuxt.md',
              '/howto/vuepress.md',
              '/howto/tailwind.md'
            ]
          }
        ]
      }
    }
  }
}