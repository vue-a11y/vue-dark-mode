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
      default: '%cm-mode'
    },
    storage: {
      type: String,
      default: 'localStorage'
    },
    metaThemeColor: {
      type: Object,
      default: () => ({})
    },
    ariaLabel: {
      type: String,
      default: 'toggle to %cm mode color'
    },
    ariaLive: {
      type: String,
      default: '%cm color mode is enabled'
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
      if (this.$isServer) return false
      const colorSchemeTypes = ['dark', 'light']
      let colorScheme = null
      colorSchemeTypes.forEach(type => {
        if (this.getMediaQueryList(type).matches) {
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
      this.$emit('change-mode', this.chosenMode)
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

    handleColorModeClass (action) {
      if (this.$isServer) return
      return document.documentElement.classList[action](`${this.className.replace(/%cm/g, this.currentMode)}`)
    },

    handlePreferColorScheme (e) {
      if (this.isSystem) {
        this.handleColorModeClass('remove')
        this.currentMode = e.matches ? 'dark' : 'light'
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