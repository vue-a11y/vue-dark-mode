# Setup

## Installation
Add `@vue-a11y/dark-mode` in your Vue project.

### NPM
```shell
npm install @vue-a11y/dark-mode
```

### Yarn
```shell
yarn add @vue-a11y/dark-mode
```

## Usage

### Globally

You can use it globally in your main.js

```javascript
import Vue from 'vue'
import VueDarkMode from '@vue-a11y/dark-mode'

Vue.use(VueDarkMode)
```

### Locally

You can import into your component:

```javascript
import { DarkMode } from '@vue-a11y/dark-mode'

export default {
  // ...
  components: {
    DarkMode
  }
}
```

### Single file component
<br>

```vue
<template>
  <DarkMode>
    <template v-slot="{ mode }">
      Color mode: {{ mode }}
    </template>
  </DarkMode>
</template>

<script>
// ...
</script>

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
