<template>
  <button
    @click="toggleDarkMode"
    :aria-pressed="darkMode"
    class="vue-darkmode"
  >
    <slot :mode="darkMode"></slot>
    <component :is="'style'" :media="darkMode && $_use_filter ? 'screen' : 'none'" scoped>
      html {
        background-color: #222 !important;
        color: #333 !important;
      }

      body {
        filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
        -ms-filter: invert(100%);
        -webkit-filter: contrast(90%) invert(90%) hue-rotate(180deg) !important;
        text-rendering: optimizeSpeed;
        image-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
        -webkit-image-rendering: optimizeSpeed;
      }

      input, textarea, select {
        color: purple;
      }

      img, video, iframe, canvas, svg, embed[type='application/x-shockwave-flash'], object[type='application/x-shockwave-flash'], *[style*='url('] {
        filter: invert(100%) hue-rotate(-180deg) !important;
        -ms-filter: invert(100%) !important;
        -webkit-filter: invert(100%) hue-rotate(-180deg) !important;
      }
    </component>
  </button>
</template>

<script>
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
    storage: {
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
      this.darkMode = !!window[this.storage].getItem('darkMode') || this.isDark || this.prefersDark()
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
      const hasFilter = 'filter' in div.style
      if (!hasFilter) console.warn('CSS filter is not supported')
      return hasFilter
    },
    prefersDark () {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    },
    setThemeColor (color) {
      if (this.themeColorMeta) return this.themeColorMeta.setAttribute('content', color)
    },
    toggleClass () {
      document.documentElement.classList.toggle('dark-mode')
    },
    setDarkMode () {
      window[this.storage].setItem('darkMode', 'on')
      this.toggleClass()
      this.setThemeColor(this.themeColorDark)
    },
    removeDarkMode () {
      window[this.storage].removeItem('darkMode')
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
