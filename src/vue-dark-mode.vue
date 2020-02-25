<template>
  <button
    :aria-pressed="darkMode"
    class="vue-darkmode"
    @click="toggleDarkMode"
  >
    <slot :mode="darkMode" />
    <component
      :is="'style'"
      :media="darkMode && $_use_filter ? 'screen' : 'none'"
      scoped
      v-text="styles.trim()"
    />
  </button>
</template>

<script>
import { styles } from './styles'

export default {
  name: 'DarkMode',
  props: {
    isDark: {
      type: Boolean,
      default: false
    },
    useFilter: {
      type: Boolean,
      default: true
    },
    styles: {
      type: String,
      default: styles
    },
    className: {
      type: String,
      default: 'dark-mode'
    },
    persist: {
      type: String,
      default: 'localStorage'
    },
    themeColorLight: {
      type: String,
      default: '#f2f2f2'
    },
    themColorDark: {
      type: String,
      default: '#999'
    }
  },
  data () {
    return {
      darkMode: false,
      themeColorMeta: null,
      $_use_filter: false
    }
  },
  created () {
    this.darkMode = this.isDark
    if (!this.$isServer) {
      this.darkMode = !!window[this.persist].getItem('darkMode') || this.isDark || this.prefersDark()
      this.themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (this.useFilter) {
        this.$_use_filter = this.supportsFilters()
      }
      if (this.darkMode) this.setDarkMode()
    }
  },
  methods: {
    supportsFilters () {
      const div = document.createElement('div')
      const isSupported = 'filter' in div.style
      if (!isSupported) console.trace('CSS filter is not supported')
      return isSupported
    },
    prefersDark () {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    setThemeColor (color) {
      if (this.themeColorMeta) return this.themeColorMeta.setAttribute('content', color)
    },
    toggleClass () {
      document.documentElement.classList.toggle(this.className)
    },
    setDarkMode () {
      window[this.persist].setItem('darkMode', 'on')
      this.toggleClass()
      this.setThemeColor(this.themeColorDark)
    },
    removeDarkMode () {
      window[this.persist].removeItem('darkMode')
      this.toggleClass()
      this.setThemeColor(this.themeColorLight)
    },
    toggleDarkMode () {
      this.darkMode = !this.darkMode
      if (this.darkMode) return this.setDarkMode()
      this.removeDarkMode()
    }
  }
}
</script>

<style scoped>
.vue-darkmode {
  appearance: none;
  background-color: transparent;
  color: inherit;
  border: none;
}
</style>
