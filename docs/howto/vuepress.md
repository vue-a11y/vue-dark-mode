# Vuepress

In Vuepress the use and installation is also simple.

::: warning
VuePress applications are rendered by the server in Node.js when generating static builds. To avoid errors, we will wrap it inside the `<ClientOnly>` component.
:::

```vue
<template>
  <ClientOnly>
    <DarkMode>
      <template v-slot="{ mode }">
        Color mode: <span>{{ mode }}</span>
      </template>
    </DarkMode>
  </ClientOnly>
</template>

<script>
import { DarkMode } from '@vue-a11y/dark-mode'

export default {
  components: {
    DarkMode
  }
}
</script>
```