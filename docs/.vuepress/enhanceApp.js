import VueAnnouncer from '@vue-a11y/announcer'
import VueSkipTo from 'vue-skip-to'
import VueDarkMode from '../../dist/vue-dark-mode.esm'

export default ({ Vue, router, isServer }) => {
  if (!isServer) {
    Vue.use(VueDarkMode)
    Vue.use(VueSkipTo)
    Vue.use(VueAnnouncer, {}, router)
  }

}
