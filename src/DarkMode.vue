<template>
  <button
    :aria-label="getAriaLabel"
    :title="getAriaLabel"
    class="vue-dark-mode"
    @click="toggleColorMode"
  >
    <span
      class="visually-hidden"
      aria-live="assertive"
      v-text="getAriaLive"
    />
    <slot :mode="chosenMode" />
  </button>
</template>

<script>
import {
  storage,
  getMediaQueryList
} from './utils'

export default {
  name: 'DarkMode',

  props: {
    defaultMode: {
      type: String,
      default: 'light'
    },
    modes: {
      type: Array,
      default () {
        return ['light', 'dark', 'system']
      }
    },
    className: {
      type: String,
      validator: str => str.includes('%cm'),
      default: '%cm-mode'
    },
    storage: {
      type: [String, Object],
      validator: storage => {
        if (typeof storage === 'string') return ['localStorage', 'sessionStorage'].includes(storage)
        return Object.keys(storage).every(key => ['getItem', 'setItem'].includes(key))
      },
      default: 'localStorage'
    },
    metaThemeColor: {
      type: Object,
      default: () => ({})
    },
    ariaLabel: {
      type: String,
      validator: str => str.includes('%cm'),
      default: 'toggle to %cm mode color'
    },
    ariaLive: {
      type: String,
      validator: str => str.includes('%cm'),
      default: '%cm color mode is enabled'
    },
    favicon: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      chosenMode: null,
      currentMode: null,
      listenerDark: null,
      metaThemeColorElement: null
    }
  },

  computed: {
    getPrefersColorScheme () {
      if (this.$isServer) return this.getStorage.getItem('colorModePrefer')
      const colorSchemeTypes = ['dark', 'light']
      let colorScheme = null
      colorSchemeTypes.forEach(type => {
        if (getMediaQueryList(type).matches) {
          colorScheme = type
        }
      })
      return colorScheme
    },

    getAriaLabel () {
      return this.ariaLabel.replace(/%cm/g, this.getNextMode)
    },

    getAriaLive () {
      return this.ariaLive.replace(/%cm/g, this.chosenMode)
    },

    getNextMode () {
      const currentIndex = this.modes.findIndex(mode => mode === this.chosenMode)
      return this.modes[currentIndex === (this.modes.length - 1) ? 0 : currentIndex + 1]
    },

    getStorage () {
      if (typeof this.storage !== 'string') return this.storage
      if (this.$isServer) return false
      return storage(this.storage)
    },

    getStorageColorMode () {
      if (!this.getStorage) return this.defaultMode
      return this.getStorage.getItem('colorMode')
    },

    isSystem () {
      return this.getStorageColorMode === 'system'
    }
  },

  created () {
    if (this.getPrefersColorScheme && this.isSystem) {
      this.currentMode = this.getPrefersColorScheme
      return this.setMode('system')
    }
    const colorMode = this.getStorageColorMode || this.defaultMode
    this.currentMode = colorMode
    this.setMode(colorMode)
  },

  mounted () {
    this.metaThemeColorElement = document.querySelector('meta[name="theme-color"]')
    this.listenerDark = getMediaQueryList('dark')
    this.listenerDark.addListener(this.handlePreferColorScheme)
    this.toggleFavicon(this.getPrefersColorScheme)
  },

  beforeDestroy () {
    this.listenerDark.removeListener(this.handlePreferColorScheme)
  },

  methods: {
    setMode (chosenMode) {
      this.chosenMode = chosenMode
      if (this.getStorage) {
        this.getStorage.setItem('colorMode', this.chosenMode)
        if (this.chosenMode === 'system') this.getStorage.setItem('colorModePrefer', this.getPrefersColorScheme)
      }
      this.handleColorModeClass('add')
      if (Object.keys(this.metaThemeColor).length) this.setMetaThemeColor(this.metaThemeColor[this.currentMode] || this.metaThemeColor[this.getPrefersColorScheme])
      this.$emit('change-mode', this.chosenMode)
    },

    setMetaThemeColor (color) {
      if (color) {
        this.$nextTick(() => {
          if (this.metaThemeColorElement) this.metaThemeColorElement.setAttribute('content', color)
        })
      }
    },

    toggleFavicon (mode) {
      if (!this.favicon) return
      this.$nextTick(() => {
        const favicon = document.querySelector('link[rel="icon"]')
        if (!favicon) return
        const href = favicon.getAttribute('href')
        const lastFour = href.substr(-4, 4)
        const favDarkStr = `-dark${lastFour}`
        favicon.setAttribute('href', mode === 'light' ? href.replace(favDarkStr, lastFour) : href.replace(lastFour, favDarkStr))
      })
    },

    handleColorModeClass (action) {
      const className = `${this.className.replace(/%cm/g, this.currentMode)}`
      if (!this.$isServer) return document.documentElement.classList[action](className)
      this.$ssrContext.colorModeClass = this.currentMode === 'system' ? `${this.className.replace(/%cm/g, this.getPrefersColorScheme)}` : className // Adds the className in the ssr context for the user to insert as they wish in the HTML tag
    },

    handlePreferColorScheme (e) {
      const colorMatch = e.matches ? 'dark' : 'light'
      this.toggleFavicon(colorMatch)
      if (this.isSystem) {
        this.handleColorModeClass('remove')
        this.currentMode = colorMatch
        this.setMode('system')
      }
    },

    toggleColorMode () {
      const selectedMode = this.getNextMode
      this.handleColorModeClass('remove')
      this.currentMode = selectedMode === 'system' ? this.getPrefersColorScheme : selectedMode
      this.setMode(selectedMode)
    }
  }
}
</script>

<style>
.vue-dark-mode {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
}

.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}
</style>
