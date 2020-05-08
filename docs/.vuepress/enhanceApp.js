import VueDarkMode from '../../dist/vue-dark-mode.esm'

export default ({ Vue, isServer }) => {
  if (!isServer) {
    Vue.use(VueDarkMode)
  }
}
