# Storage

By default the `@vue-a11y/dark-mode` component use **localStorage** to store the user's choice of color mode.

| Prop         | Type                | Default       
| ------------ | ------------------- | ----------------
| `storage`    | String \| Object    | `localStorage`

```vue
<DarkMode storage="sessionStorage">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</DarkMode>
```

::: tip
See more about using `cookies` on storage to [support SSR](/howto/ssr.html)
:::