<template>
  <button
    @click="toggleDarkMode"
    @keydown.enter="toggleDarkMode"
    class="vue-darkmode"
  >
    <slot :mode="darkMode"></slot>
    <component :is="'style'" :media="darkMode ? 'screen' : 'none'">
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
  data () {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDarkMode () {
      this.darkMode = !this.darkMode
      this.$emit('darkMode', this.darkMode)
    }
  }
}
</script>

<style scoped>
.vue-darkmode {
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: inherit;
  border-radius: 3px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  color: inherit;
}
</style>
