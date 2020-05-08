<template>
  <div id="global-layout">
    <component :is="layout"/>
    <div class="box-color-mode">
      <ClientOnly>
        <VueDarkMode class="btn-color-mode">
          <template v-slot="{ mode }">
            Color mode: <span>{{ mode }}</span>
          </template>
        </VueDarkMode>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout',
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) return this.$frontmatter.layout
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style lang="stylus">
*
  transition: background-color .3s

:root 
  --bg: #fff
  --bg-secondary: #f2f2f2
  --bg-search: #fff
  --bg-code: #f2f2f2
  --bg-warning: #fff7d0
  --color: #304455
  --code-color: #476582
  --link-color: #3eaf7c
  --border-color: #eaecef
  background-color: var(--bg) !important

html.dark-mode 
  --bg: #232b32
  --bg-secondary: #282f34
  --bg-search: #282f34
  --bg-code: #353a3e
  --bg-warning: #575638
  --color: #ddd8ca
  --code-color: #ADCFF0
  --link-color: #68CA9E
  --border-color: #AEB8BC
  background-color: var(--bg) !important

body 
  background-color: var(--bg) !important
  color: var(--color) !important

a, .edit-link > a 
  color: var(--link-color) !important

.navbar, .sidebar, .links, .site-name, .sidebar-link, .nav-link 
  background-color: var(--bg) !important
  color: var(--color) !important

.navbar, .sidebar 
  border-color: var(--border-color) !important;

.dark-mode div[class*="language-"], .custom-block.tip 
  background-color: var(--bg-secondary) !important

.page code 
  background-color: var(--bg-code) !important
  color: var(--code-color) !important

div[class*="language-"] code 
  background-color: inherit !important
  color: inherit !important

.search-box input 
  background-color: inherit !important
  color: inherit !important

.custom-block.warning
  color: var(--color) !important
  background-color: var(--bg-warning) !important
  .custom-block-title{
    color: inherit !important
  }

.box-color-mode
  width: 100%
  padding: 10px 10px 50px 20rem
  display: flex
  justify-content: center
  box-sizing: border-box

.btn-color-mode
  &.vue-dark-mode
    border: 2px solid #666
    border-radius: 6px
    padding: 8px 14px
    font-weight: bold
    span
      text-transform: capitalize
</style>
