import VueDarkMode from './vue-dark-mode.vue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueDarkMode', VueDarkMode)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}

export default VueDarkMode