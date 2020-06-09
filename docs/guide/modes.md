# Color modes 

## modes

The `@vue-a11y/dark-mode` component is flexible, you can pass as many color modes as you like. By default we have 3 color modes, which are:

| prop       | Type      | default
| ---------- | --------- | ----------------------------------------------------
| `modes`    | Array     | `[ 'light', 'dark', 'system' ]`

### System preference

This component uses the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) to automatically detect the color mode chosen by the user in his operating system.  

So, if the user chooses the `system` color mode and is defined in his OS as "dark", then the component will understand and define the theme as dark (`dark-mode`).

## defaultMode

The defaultMode prop will be used as a fallback to define the theme if the following cases happen:

- The "prefers-color-scheme" was defined as `no-preference`;
- The browser does not support the media query "prefers-color-scheme";
- Happen any case of the items above and also have no color mode stored;

| Prop          | Type      | Default
| ------------- | --------- | ----------------------------------------------------
| `defaultMode` | String    | `light`

### Example of use

::: tip
Both props are optional, if not declared in the component, default values will be used.
:::

```vue
<DarkMode 
  defaultMode="sepia"
  :modes="[
    'light',
    'dark',
    'system',
    'sepia',
    'dark-blue'
  ]">
  <template v-slot="{ mode }">
    Color mode: {{ mode }}
  </template>
</DarkMode>
```

