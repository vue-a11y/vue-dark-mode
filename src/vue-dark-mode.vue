<template>
  <button
    :aria-pressed="darkMode"
    class="vue-dark-mode"
    @click="toggleDarkMode"
  >
    <slot :isDark="darkMode" />
    <component
      :is="'style'"
      :media="darkMode && $_use_filter ? 'screen' : 'none'"
      scoped
      v-text="styles.trim()"
    />
  </button>
</template>

<script>
const styles = `
  html {
    background-color: #222 !important;
    color: #333 !important;
  }

  body {
    filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
    -ms-filter: invert(100%);
    -webkit-filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
  }

  input, textarea, select {
    color: purple;
  }

  img, video, iframe, canvas, svg, embed[type='application/x-shockwave-flash'], object[type='application/x-shockwave-flash'], *[style*='url('] {
    filter: invert(100%) hue-rotate(-180deg) !important;
    -ms-filter: invert(100%) !important;
    -webkit-filter: invert(100%) hue-rotate(-180deg) !important;
  }
`

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
      if (!isSupported) console.warn('CSS filter is not supported')
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

<style>
body {
  text-rendering: optimizeSpeed;
  image-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -webkit-image-rendering: optimizeSpeed;
}

.vue-dark-mode {
  appearance: none;
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
}
</style>
