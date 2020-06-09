import DarkMode from './DarkMode.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('DarkMode', DarkMode)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
