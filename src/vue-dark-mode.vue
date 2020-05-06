<template>
  <button
    :aria-label="`toggle to ${getNextMode} mode color`"
    :title="`toggle to ${getNextMode} mode color`"
    class="vue-dark-mode"
    @click="toggleColorMode"
  >
    <span
      class="visually-hidden"
      aria-live="assertive"
    >
      {{ chosenMode }} color mode is enabled
    </span>
    <slot :mode="chosenMode" />
  </button>
</template>

<script>
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
    storage: {
      type: String,
      default: 'localStorage'
    },
    metaThemeColor: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      elementMetaThemeColor: null,
      chosenMode: null,
      currentMode: null,
      listenerDark: null
    }
  },

  computed: {
    getPrefersColorScheme () {
      const colorSchemeTypes = ['dark', 'light']
      let colorScheme = null
      colorSchemeTypes.forEach(type => {
        if (this.getMediaQueryList(type).matches) {
          colorScheme = type
        }
      })
      return colorScheme
    },

    getNextMode () {
      const currentIndex = this.modes.findIndex(mode => mode === this.chosenMode)
      return this.modes[currentIndex === (this.modes.length - 1) ? 0 : currentIndex + 1]
    },

    getStorageColorMode () {
      return window[this.storage].getItem('colorMode')
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
    this.elementMetaThemeColor = document.querySelector('meta[name="theme-color"]')
    this.listenerDark = this.getMediaQueryList('dark')
    this.listenerDark.addListener(this.handlePreferColorScheme)
  },

  beforeDestroy () {
    this.listenerDark.removeListener(this.handlePreferColorScheme)
  },

  methods: {
    setMode (chosenMode) {
      this.chosenMode = chosenMode
      window[this.storage].setItem('colorMode', this.chosenMode)
      this.handleColorModeClass('add')
      if (Object.keys(this.metaThemeColor).length) this.setMetaThemeColor(this.metaThemeColor[this.currentMode] || this.metaThemeColor[this.getPrefersColorScheme])
    },

    getMediaQueryList (type) {
      return window.matchMedia(`(prefers-color-scheme: ${type})`)
    },

    setMetaThemeColor (color) {
      if (color) {
        this.$nextTick(() => {
          if (this.elementMetaThemeColor) this.elementMetaThemeColor.setAttribute('content', color)
        })
      }
    },

    handleColorModeClass (action, cls) {
      return document.documentElement.classList[action](`${this.currentMode}-mode`)
    },

    handlePreferColorScheme (e) {
      if (this.isSystem) {
        this.currentMode = e.matches ? 'dark' : 'light'
        this.handleColorModeClass('remove')
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
