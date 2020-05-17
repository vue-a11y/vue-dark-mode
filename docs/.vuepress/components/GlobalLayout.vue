<template>
  <div id="global-layout">
    <component :is="layout"/>
    <div class="box-color-mode">
      <ClientOnly>
        <VueDarkMode data-cy="color-mode-button" class="btn-color-mode">
          <template v-slot="{ mode }">
            Color mode: <span>{{ mode }}</span>
          </template>
        </VueDarkMode>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout',
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
.box-color-mode
  width: 100%
  padding: 10px 10px 100px 20rem
  display: flex
  justify-content: center
  box-sizing: border-box

.btn-color-mode
  &.vue-dark-mode
    border: 2px solid #666
    border-radius: 6px
    padding: 8px 14px
    font-weight: bold
    span
      text-transform: capitalize

@media only screen and (max-width: 728px)
  .box-color-mode
    padding-left: 10px

</style>
