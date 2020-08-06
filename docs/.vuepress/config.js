module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  title: 'Vue dark-mode',
  description: 'A component that helps to implement dark mode and other color modes in your Vue application.',
  serviceWorker: true,
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
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
          },
          {
            text: 'Vue A11y',
            ariaLabel: 'More about Vue accessibility project',
            items: [
              {
                text: 'Packages',
                items: [
                  {
                    text: 'vue-axe',
                    link: 'https://github.com/vue-a11y/vue-axe'
                  },
                  {
                    text: 'vue-skip-to',
                    link: 'https://github.com/vue-a11y/vue-skip-to'
                  },
                  {
                    text: 'vue-dark-mode',
                    link: 'https://github.com/vue-a11y/vue-dark-mode'
                  },
                  {
                    text: 'vue-announcer',
                    link: 'https://github.com/vue-a11y/vue-announcer'
                  },
                  {
                    text: 'vue-focus-loop',
                    link: 'https://github.com/vue-a11y/vue-focus-loop'
                  },
                  {
                    text: 'vue-accessible-multiselect',
                    link: 'https://github.com/vue-a11y/vue-accessible-multiselect'
                  },
                  {
                    text: 'eslint-plugin-vuejs-accessibility',
                    link: 'https://github.com/vue-a11y/vue-axehttps://github.com/vue-a11y/eslint-plugin-vuejs-accessibility'
                  },
                ]
              },
              {
                text: 'Links',
                items: [
                  {
                    text: 'Github',
                    link: 'https://github.com/vue-a11y'
                  },
                  {
                    text: 'Twitter',
                    link: 'https://twitter.com/vue_a11y'
                  }
                ]
              }
            ]
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
              '/guide/favicon.md',
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
              '/howto/ssr.md',
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