# Setup

## Installation

Add `@vue-a11y/dark-mode` in your Vue project.

#### NPM
```shell
npm install @vue-a11y/dark-mode
```

#### Yarn
```shell
yarn add @vue-a11y/dark-mode
```

## Basic usage

```javascript
import Vue from 'vue'
import VueDarkMode from '@vue-a11y/dark-mode'

Vue.use(VueDarkMode)
```

```vue
<VueDarkMode>
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</VueDarkMode>

<style>
:root {
  --bg: #fff;
  --color: #333333;
}

html.dark-mode {
  --bg: #232b32;
  --color: #ddd8ca;
}

body {
  background-color: var(--bg);
  color: var(--color);
}
</style>
```
