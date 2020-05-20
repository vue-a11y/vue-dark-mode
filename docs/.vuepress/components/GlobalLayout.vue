<template>
  <div id="global-layout">
    <ClientOnly>
      <VueAnnouncer />
      <MountingPortal v-if="show" name="colorMode" mountTo=".nav-links" targetSlim append>
        <div class="nav-item">
          <VueDarkMode 
            data-cy="color-mode-button" 
            class="btn-color-mode"
          >
            <template v-slot="{ mode }">
              Color mode: <span data-cy="color-mode">{{ mode }}</span>
            </template>
          </VueDarkMode>
        </div>
      </MountingPortal>
    </ClientOnly>
    <component :is="layout"/>
  </div>
</template>

<script>
import { MountingPortal } from 'portal-vue'

export default {
  name: 'GlobalLayout',

  components: {
    MountingPortal
  },

  data: () => ({
    show: false
  }),

  mounted () {
    setTimeout(() => {
      this.show = true
    }, 100)
  },

  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) return this.$frontmatter.layout
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style lang="stylus">
.btn-color-mode
  &.vue-dark-mode
    border: 2px solid #666
    border-radius: 6px
    padding: 8px 14px
    font-weight: bold
    span
      text-transform: capitalize
</style>
