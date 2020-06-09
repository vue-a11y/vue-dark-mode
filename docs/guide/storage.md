# Storage

By default the `@vue-a11y/dark-mode` component use **localStorage** to store the user's choice of color mode.

| Prop         | Type      | Default        | Options            
| ------------ | --------- | -------------  | -------------------
| `storage`    | String    | `localStorage` | `localStorage` or `sessionStorage`            

```vue
<DarkMode storage="sessionStorage">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</DarkMode>
```

::: tip
Currently, the component does not support the use of cookies (essential for use with SSR).
:::