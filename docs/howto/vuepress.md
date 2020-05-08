# Vuepress

In Vuepress the use and installation is also simple.

```javascript
// enhanceApp.js
import VueDarkMode from '@vue-a11y/dark-mode'

export default ({ Vue, isServer }) => {
  if (!isServer) {
    Vue.use(VueDarkMode)
  }
}
```

::: warning
VuePress applications are rendered by the server in Node.js when generating static builds. To avoid errors, we will wrap it inside the `<ClientOnly>` component.
:::


```vue
<ClientOnly>
  <VueDarkMode>
    <template v-slot="{ mode }">
      Color mode: <span>{{ mode }}</span>
    </template>
  </VueDarkMode>
</ClientOnly>
```