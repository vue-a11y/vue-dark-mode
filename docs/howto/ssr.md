# SSR

`@vue-a11y/dark-mode` supports SSR applications.

::: tip
If you are using `vue-cli` to build your project, we recommend using [@akryum/vue-cli-plugin-ssr](https://github.com/Akryum/vue-cli-plugin-ssr).  
****
:::

## Setup

`@vue-a11y/dark-mode` adds a variable called `colorModeClass` to the SSR context for you to add to your server side template.

We will use the **@akryum/vue-cli-plugin-ssr** as example.

In your `public/index.ssr.html`

```html{2}
<!DOCTYPE html>
<html lang="en" class="{{{ colorModeClass }}}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>{{ title }}</title>
    {{{ renderResourceHints() }}}
    {{{ renderStyles() }}}
  </head>
  <body>
    <!--vue-ssr-outlet-->
    {{{ renderState() }}}
    {{{ renderState({ contextKey: 'apolloState', windowKey: '__APOLLO_STATE__' }) }}}
    {{{ renderScripts() }}}
  </body>
</html>
```

## Usage

For it to work on the server you need to use cookies as storage, just customize the `@vue-a11y/dark-mode` storage api.

In this example, we use the `universal-cookie` to work in both environments.

```vue{2,10,11,15,19,23,24,25,26,27}
<template>
  <DarkMode :storage="storage">
    <template v-slot="{ mode }">
      Color mode: {{ mode }}
    </template>
  </DarkMode>
</template>

<script>
import { DarkMode } from '@vue-a11y/dark-mode'
import Cookies from 'universal-cookie'

export default {
  components: {
    DarkMode
  },

  data: () => ({
    storage: null
  }),

  created () {
    const cookies = new Cookies(this.$isServer ? this.$ssrContext.req.headers.cookie : null)
    this.storage = {
      getItem: key => cookies.get(key),
      setItem: (key, value) => cookies.set(key, value, { path: '/' })
    }
  }
}
</script>
```